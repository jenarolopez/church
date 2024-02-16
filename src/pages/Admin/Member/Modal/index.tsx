import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import Modal from "../../../../components/Modal";
import Select from "../../../../components/Select";
import { IModalProps } from "../../../../components/Modal/modalInterface";
import { CalendarIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import DatePicker from "../../../../components/DatePicker";
import { useFieldArray, useForm } from "react-hook-form";
import { months } from "../../../../utils/Constants";
import { classNames } from "../../../../utils/helper";
import { userRequest } from "../../../../request/request";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../reducer/loading/loadingSlice";

type NewModal = Pick<IModalProps, "isOpen" | "onClose">;
interface ImageState {
  name: string;
  file: Blob | null; // Adjust as needed based on your use case
}

const RegistrationModal = (props: NewModal) => {
  const [isSaveVisible, setIsSaveVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [imagePath, setImagePath] = useState(null) as any;
  const [image, setImage] = useState<ImageState>({ name: "", file: null });
  const dispatch = useDispatch();

  const initialDependent = {
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    birthMonth: "",
    birthDate: "",
    birthYear: "",
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      birthday: "",
      birthMonth: "",
      birthDate: "",
      birthYear: "",
      dependentCount: 0,
      dependent: [],
    } as any,
  });
  const {
    fields: dependents,
    append: appendDependents,
    remove: removeDependents,
    update: updateDependents,
  } = useFieldArray({
    control,
    name: "dependent",
  });

  const imageInputRef = useRef(null) as any;

  const watchSavewithScroll = (scrollUp: boolean) => {
    setIsSaveVisible((prev) => {
      if (!scrollUp) {
        setTimeout(() => {
          setIsButtonVisible(false);
        }, 400);
      } else {
        setIsButtonVisible(true);
      }
      return scrollUp;
    });
  };

  const setSaving = (isLoading: Boolean, text: string) => {
    dispatch(
      setLoading({
        loading: isLoading,
        text,
        icon: "loading",
      })
    );
  };

  const handleSave = () => {
    console.log(watch());
    setSaving(true, "Saving member");
    userRequest.createUser(watch()).then((e: any) => {
      setTimeout(() => {
        setSaving(false, "Saving member");
        if (!image.file) return false;
        setSaving(true, "Uploading Profile");
        const data = new FormData();
        data.append("user_id", e?.data.data.id);
        data.append("image", image.file);
        userRequest.uploadImage(data).then((e) => {
          setSaving(false, "Uploading Profile");
        });
      }, 2000);
    }).catch(error => {
      setSaving(false, "Uploading Profile");
    });
  };
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      try {
        const reader = new FileReader();
        const img = new Image();
        reader.onload = function (e) {
          img.src = e?.target?.result + "";

          img.onload = function () {
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;
            const maxWidth = 600;
            const maxHeight = 800;

            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob: any) => {
              let file = new File([blob], files[0].name, {
                type: "image/jpeg",
              });
              setImage({
                name: files[0].name,
                file: file,
              });
            }, "image/jpeg");
          };
          img.onerror = function (e) {
            console.log(e);
          };

          setImagePath(e?.target?.result);
        };

        reader.onerror = function (e) {
          setImagePath("#");
        };
        reader.readAsDataURL(files[0]);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <Modal open={props.isOpen} onClose={props.onClose} width="3xl">
        <div className="flex flex-col relative h-[95vh] tablet:h-[75vh]">
          <div className="self-center bg-slate-200 w-24 h-24 p-2 rounded-full flex flex-col items-center justify-center mt-4">
            <div className="w-20 h-20 rounded-full bg-gray-500 self-center overflow-hidden">
              <img
                src={imagePath}
                className={`object-cover ${imagePath ? "h-full w-full" : ""}`}
              />
            </div>
          </div>
          <h1 className="text-2xl text-slate-700 text-center py-4">
            New Member
          </h1>
          <div
            className="overflow-y-auto px-6 pb-5 flex flex-col gap-5"
            onScroll={(event: React.UIEvent<HTMLDivElement>) => {
              const {
                scrollTop: currentScrollTop,
                scrollHeight,
                clientHeight,
              } = event.currentTarget as HTMLDivElement;
              const scrollPercentage =
                (currentScrollTop / (scrollHeight - clientHeight)) * 100;
              if (currentScrollTop > lastScrollTop && scrollPercentage >= 75) {
                watchSavewithScroll(true);
              } else if (currentScrollTop < lastScrollTop) {
                watchSavewithScroll(false);
              }
              setLastScrollTop(currentScrollTop);
            }}
          >
            <section className="gap-x-6 gap-y-3 mt-2 flex flex-row flex-wrap items-center">
              <button
                onClick={() => {
                  imageInputRef.current?.click();
                }}
                className="flex w-[140px] justify-between flex-row text-sm focus:ring-2 focus:text-white ring-slate-600 px-3 py-2 rounded bg-slate-500 hover:bg-slate-600 text-gray-200 font-bold ring-offset-1"
              >
                Select Image&nbsp;
                <PhotoIcon className="h-5 w-5" />
              </button>
              <input
                ref={imageInputRef}
                onChange={onChangeImage}
                className="hidden"
                type="file"
                accept="image/*"
              />

              <span className="text-sm">
                Filename: {image?.name ? image?.name : "No file selected"}
              </span>
            </section>

            <section className="gap-x-6 gap-y-3 grid grid-cols-1 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">First name</span>
                <input
                  {...register(`firstName`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Middle name</span>
                <input
                  {...register(`lastName`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Last name</span>
                <input
                  {...register(`middleName`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Gender</span>
                <select
                  {...register(`gender`)}
                  className="w-40 h-[42px] p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  defaultValue={"0"}
                >
                  <option value="0" disabled={true}>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold flex flex-row flex-wrap items-center gap-5">
                  Birthday
                  <DatePicker
                    onChange={(date: Date) => {
                      const newDate = date
                        .toLocaleDateString()
                        .toString()
                        .split("/");

                      const month = months.find(
                        (month) => month.value == newDate[0]
                      )?.label;
                      setValue("birthday", newDate.toLocaleString());
                      setValue("birthMonth", month);
                      setValue("birthDate", newDate[1]);
                      setValue("birthYear", newDate[2]);
                    }}
                  />
                </span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <input
                      disabled={true}
                      {...register(`birthMonth`)}
                      type="text"
                      placeholder="Month"
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                    />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <input
                      disabled={true}
                      {...register(`birthDate`)}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      placeholder="Day"
                      type="text"
                    />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <input
                      disabled={true}
                      {...register(`birthYear`)}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      placeholder="Year"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Address Information</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">House number</span>
                    </span>
                    <input
                      {...register(`addresses.houseNo`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Street</span>
                    </span>
                    <input
                      {...register(`addresses.street`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Baranggay</span>
                    </span>
                    {/* <Select
                      name="baranggay"
                      register={register} // Register the input field with react-hook-form
                      placeholder="Baranggay"
                    /> */}
                    <input
                      {...register(`addresses.barangay`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">City/Municipality</span>
                    </span>
                    {/* <Select
                      name="baranggay"
                      register={register} // Register the input field with react-hook-form
                      placeholder="Baranggay"
                    /> */}
                    <input
                      {...register(`addresses.cityMunicipality`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Province</span>
                    </span>
                    {/* <Select
                      name="country"
                      register={register} // Register the input field with react-hook-form
                      placeholder="Country"
                    /> */}
                    <input
                      {...register(`addresses.province`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Country</span>
                    </span>
                    {/* <Select
                      name="country"
                      register={register} // Register the input field with react-hook-form
                      placeholder="Country"
                    /> */}
                    <input
                      {...register(`addresses.country`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Zip code</span>
                    </span>
                    <input
                      {...register(`addresses.zipcode`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Contact number</span>
                    <input
                      {...register(`addresses.contactNumber`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Email Address</span>
                    <input
                      {...register(`addresses.email`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="gap-x-6 gap-y-3 grid grid-cols-1 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Work Information</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Work</span>
                    </span>
                    <input
                      {...register(`workInformation.work`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Position</span>
                    </span>
                    <input
                      {...register(`workInformation.position`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Company Name</span>
                    </span>
                    {/* <Select
                      name="baranggay"
                      register={register} // Register the input field with react-hook-form
                      placeholder="Baranggay"
                    /> */}
                    <input
                      {...register(`workInformation.companyName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Telephone Number</span>
                    </span>
                    {/* <Select
                      name="country"
                      register={register} // Register the input field with react-hook-form
                      placeholder="Country"
                    /> */}
                    <input
                      {...register(`workInformation.telephoneNumber`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Email Address</span>
                    <input
                      {...register(`workInformation.email`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </section>
            <span className="font-bold text-gray-700">
              Educational Background
            </span>
            <section className="grid grid-cols-1 gap-x-6 gap-y-3 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col gap-1">
                <span className="text-sm">
                  School{" "}
                  <em className="font-normal text-sm">( Last Attended )</em>
                </span>
                <input
                  {...register(`education.schoolLastAttended`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1">
                <span className="text-sm">Course</span>
                <input
                  {...register(`education.course`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>

              <div className="text-gray-700 flex flex-col gap-1">
                <span className="text-sm">
                  {" "}
                  <input
                    type="checkbox"
                    {...register(`education.graduated`)}
                  />{" "}
                  Year Graduated
                </span>
                <input
                  {...register(`education.yearGraduated`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
            </section>
            <section className="grid grid-cols-1 gap-x-6 gap-y-3 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="font-bold">Marriage Information</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Spouse first name</span>
                    <input
                      {...register(`marriageInformation.spouseFirstName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Spouse middle name</span>
                    <input
                      {...register(`marriageInformation.spouseMiddleName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Spouse last name</span>
                    <input
                      {...register(`marriageInformation.spouseLastName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="text-sm flex flex-row flex-wrap items-center gap-5">
                  Birthday
                  <DatePicker
                    onChange={(date: Date) => {
                      const newDate = date
                        .toLocaleDateString()
                        .toString()
                        .split("/");
                      const month = months.find(
                        (month) => month.value == newDate[0]
                      )?.label;
                      setValue("marriageInformation.spouseBirthday", newDate.toLocaleString());
                      setValue("marriageInformation.spouseBirthMonth", month);
                      setValue(
                        "marriageInformation.spouseBirthDate",
                        newDate[1]
                      );
                      setValue(
                        "marriageInformation.spouseBirthYear",
                        newDate[2]
                      );
                    }}
                  />
                </span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <input
                      disabled={true}
                      {...register(`marriageInformation.spouseBirthMonth`)}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <input
                      disabled={true}
                      {...register(`marriageInformation.spouseBirthDate`)}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <input
                      disabled={true}
                      {...register(`marriageInformation.spouseBirthYear`)}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="text-sm flex flex-row flex-wrap items-center gap-5">
                  Date of Marriage
                  <DatePicker
                    onChange={(date: Date) => {
                      const newDate = date
                        .toLocaleDateString()
                        .toString()
                        .split("/");
                      const month = months.find(
                        (month) => month.value == newDate[0]
                      )?.label;
                      setValue("marriageInformation.dateOfMarriage", newDate.toLocaleString());
                      setValue(
                        "marriageInformation.spouseMarriageMonth",
                        month
                      );
                      setValue(
                        "marriageInformation.spouseMarriageDate",
                        newDate[1]
                      );
                      setValue(
                        "marriageInformation.spouseMarriageYear",
                        newDate[2]
                      );
                    }}
                  />
                </span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <input
                      {...register(`marriageInformation.spouseMarriageMonth`)}
                      disabled={true}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <input
                      {...register(`marriageInformation.spouseMarriageDate`)}
                      disabled={true}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <input
                      {...register(`marriageInformation.spouseMarriageYear`)}
                      disabled={true}
                      className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col col-span-2 gap-1 mt-3">
                <span className="font-bold">Dependents</span>
                <span className="text-sm">
                  Number of dependents:{" "}
                  <input
                    className="w-20 ml-10 p-2 pl-2 pr-2  h-8 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border text-center"
                    {...register(`dependentCount`)}
                    onChange={(e) => {
                      const count = parseInt(e.target.value);
                      const oldCount = parseInt(watch("dependentCount"));
                      if (count > oldCount) {
                        setValue("dependentCount", count);
                        appendDependents(initialDependent);
                        return false;
                      }
                      setValue("dependentCount", oldCount);
                    }}
                    defaultValue={0}
                    min={0}
                    disabled={true}
                  />
                </span>
                {dependents.map((dependent, index) => {
                  return (
                    <div key={dependent.id}>
                      <div className="h-1 bg-gray-300 rounded mt-3 mb-3"></div>
                      <div className="flex flex-row justify-between">
                        <span className="text-sm">{`Dependent #${
                          index + 1
                        }`}</span>
                        <button
                          onClick={() => {
                            removeDependents(index);
                            setValue(
                              "dependentCount",
                              parseInt(watch("dependentCount")) - 1
                            );
                          }}
                          className="text-sm focus:ring-2 focus:text-white ring-red-600 rounded bg-red-500 hover:bg-red-600 text-gray-200 font-bold ring-offset-1"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1 mt-3">
                        <div className="text-gray-700 flex flex-col gap-1">
                          <span className="text-sm">First name</span>
                          <input
                            {...register(`dependent.${index}.firstName`)}
                            className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                            type="text"
                          />
                        </div>
                        <div className="text-gray-700 flex flex-col gap-1">
                          <span className="text-sm">Middle name</span>
                          <input
                            {...register(`dependent.${index}.middleName`)}
                            className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                            type="text"
                          />
                        </div>
                        <div className="text-gray-700 flex flex-col gap-1">
                          <span className="text-sm">Last name</span>
                          <input
                            {...register(`dependent.${index}.lastName`)}
                            className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="text-gray-700 flex flex-col gap-1 col-span-2 mt-4">
                        <span className="text-sm flex flex-row flex-wrap items-center gap-5">
                          Birthday
                          <DatePicker
                            onChange={(date: Date) => {
                              const newDate = date
                                .toLocaleDateString()
                                .toString()
                                .split("/");
                              const month = months.find(
                                (month) => month.value == newDate[0]
                              )?.label;
                              updateDependents(index, {
                                ...watch(`dependent.${index}`),
                                birthday: date,
                                birthMonth: month,
                                birthDate: newDate[1],
                                birthYear: newDate[2],
                              });
                            }}
                          />
                        </span>
                        <div className="flex flex-row gap-2 w-full">
                          <div className="w-44 d-flex flex-col gap-2">
                            <span>
                              <span className="text-sm">Month</span>
                            </span>
                            <input
                              disabled={true}
                              {...register(`dependent.${index}.birthMonth`)}
                              className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                              type="text"
                            />
                          </div>
                          <div className="w-20 d-flex flex-col gap-2">
                            <span>
                              <span className="text-sm">Day</span>
                            </span>
                            <input
                              disabled={true}
                              {...register(`dependent.${index}.birthDate`)}
                              className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                              type="text"
                            />
                          </div>
                          <div className="w-32 d-flex flex-col gap-2">
                            <span>
                              <span className="text-sm">Year</span>
                            </span>
                            <input
                              disabled={true}
                              {...register(`dependent.${index}.birthYear`)}
                              className="w-full p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      {index == dependents.length - 1 && (
                        <div className="h-1 bg-gray-300 rounded mt-6 "></div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-1 col-span-2">
                <button
                  onClick={() => {
                    appendDependents(initialDependent);
                    setValue(
                      "dependentCount",
                      parseInt(watch("dependentCount")) + 1
                    );
                  }}
                  className="text-sm focus:ring-2 focus:text-white ring-slate-600 px-3 py-2 rounded bg-slate-500 hover:bg-slate-600 text-gray-200 font-bold ring-offset-1"
                >
                  Add new dependent
                </button>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-x-6 gap-y-3 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="font-bold mb-3">Family Background</span>
                <span className="font-bold text-sm">Father's Information</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">First name</span>
                    <input
                      {...register(`familyBackground.fatherFirstName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Middle name</span>
                    <input
                      {...register(`familyBackground.fatherMiddleName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Last name</span>
                    <input
                      {...register(`familyBackground.fatherLastName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Work</span>
                    <input
                      {...register(`familyBackground.fatherWork`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="text-sm font-bold">Mother's Information</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">First name</span>
                    <input
                      {...register(`familyBackground.motherFirstName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Middle name</span>
                    <input
                      {...register(`familyBackground.motherMiddleName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Last name</span>
                    <input
                      {...register(`familyBackground.motherLastName`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Work</span>
                    <input
                      {...register(`familyBackground.motherWork`)}
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold text-sm">Number of siblings</span>
                <input
                  {...register(`familyBackground.noOfSiblings`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="number"
                  min={0}
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold text-sm">
                  How many are Christians
                </span>
                <input
                  {...register(`familyBackground.noOfChristianSiblings`)}
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="number"
                  min={0}
                  onChange={(e) => {
                    const siblings = parseInt(e.target.value);
                    const oldCount = parseInt(
                      watch("familyBackground.noOfSiblings")
                    );
                    if (siblings >= oldCount) {
                      setValue(
                        "familyBackground.noOfChristianSiblings",
                        oldCount
                      );
                      return false;
                    }
                  }}
                  max={watch("familyBackground.noOfSiblings")}
                />
              </div>
            </section>
          </div>
          <div
            className={classNames(
              "flex justify-center transition-all overflow-hidden py-2 duration-500",
              isSaveVisible ? "h-44" : "h-0"
            )}
          >
            <button
              onClick={handleSave}
              className={classNames(
                "text-sm font-bold h-full focus:ring-2 w-48 transition-all overflow-hidden focus:text-white ring-emerald-600 px-3 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-gray-100 ring-offset-1",
                isButtonVisible ? "" : "hidden"
              )}
            >
              Save new member
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
