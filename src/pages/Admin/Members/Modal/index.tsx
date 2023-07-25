import React from "react";
import Modal from "../../../../components/Modal";
import Select from "../../../../components/Select";
import { IModalProps } from "../../../../components/Modal/modalInterface";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
type NewModal = Pick<IModalProps, "isOpen" | "onClose">;

const RegistrationModal = (props: NewModal) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        width={600}
        header={false}
      >
        <div className="flex flex-col relative h-[95vh] tablet:h-[75vh] tablet:gap-5 gap-2">
          <div className="self-center tablet:absolute top-[-6rem] bg-slate-200 w-244 h-24 tablet:w-40 tablet:h-40 p-2 tablet:p-0 rounded-full flex flex-col items-center justify-center mt-4 tablet:mt-0">
            <div className="w-20 h-20 tablet:w-36 tablet:h-36 rounded-full bg-gray-500 self-center"></div>
          </div>
          <h1 className="text-2xl text-slate-700 text-center tablet:mt-[4.5rem]">
            New Member
          </h1>
          <div className="overflow-y-auto px-6 mb-6 pb-2 flex flex-col gap-5">
            <section className="gap-x-6 gap-y-3 grid grid-cols-1 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">First name</span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Middle name</span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Last name</span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Gender</span>
                <Select />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Birthday</span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <Select />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Address</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">House number</span>
                    </span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Street</span>
                    </span>
                    <Select />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Baranggay</span>
                    </span>
                    <Select />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Country</span>
                    </span>
                    <Select />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>
                      <span className="text-sm">Zip code</span>
                    </span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Email Address</span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Contact number</span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
            </section>
            <section className="grid grid-cols-1 gap-x-6 gap-y-3 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col gap-1">
                <span className="font-bold">
                  School{" "}
                  <em className="font-normal text-sm">( Last Attended )</em>
                </span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
              <div className="text-gray-700 flex flex-col gap-1">
                <span className="font-bold">Course</span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>

              <div className="text-gray-700 flex flex-col gap-1">
                <span className="font-bold">
                  {" "}
                  <input type="checkbox" /> Year Graduated
                </span>
                <input
                  className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                  type="text"
                />
              </div>
            </section>
            <section className="grid grid-cols-1 gap-x-6 gap-y-3 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="font-bold">Name of spouse</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">First name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Middle name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Last name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Birthday</span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <Select />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Date of marriage</span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <Select />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="font-bold">Dependents</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">First name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Middle name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Last name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2">
                <span className="font-bold">Birthday</span>
                <div className="flex flex-row gap-2 w-full">
                  <div className="w-44 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Month</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-20 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Day</span>
                    </span>
                    <Select />
                  </div>
                  <div className="w-32 d-flex flex-col gap-2">
                    <span>
                      <span className="text-sm">Year</span>
                    </span>
                    <Select />
                  </div>
                </div>
              </div>
              <div className="flex gap-1 col-span-2">
                <button className="text-sm focus:ring-2 focus:text-white ring-slate-600 px-3 py-2 rounded bg-slate-500 hover:bg-slate-600 text-gray-200 font-bold ring-offset-1">
                  <PersonAddRoundedIcon
                    sx={{
                      marginRight: 1,
                    }}
                    style={{
                      fontSize: "19px",
                    }}
                  />{" "}
                  Add new dependent
                </button>
              </div>
            </section>
            <section className="grid grid-cols-1 gap-x-6 gap-y-3 tablet:grid-cols-2">
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="font-bold">Name of the father</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">First name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Middle name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Last name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Work</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col col-span-2 gap-1">
                <span className="font-bold">Name of the mother</span>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-1">
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">First name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Middle name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Last name</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                  <div className="text-gray-700 flex flex-col gap-1">
                    <span className="text-sm">Work</span>
                    <input
                      className="p-2 pl-2 pr-2 rounded-md outline-slate-500 text-md text-gray-900 border-gray-300 border"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">Number of siblings</span>
                <div className="w-32">
                  {" "}
                  <Select />
                </div>
              </div>
              <div className="text-gray-700 flex flex-col gap-1 col-span-2 tablet:col-span-1">
                <span className="font-bold">How many are Christians</span>
                <div className="w-32">
                  {" "}
                  <Select />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
