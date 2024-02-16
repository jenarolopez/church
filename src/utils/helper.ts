import { IAddress, IName } from "../Interface";
import { months } from "./Constants";

export function getFullName({ firstName, middleName, lastName }: IName) {
  let fullName = lastName + ", ";

  fullName += firstName + " ";
  if (middleName) {
    const middleNameWords = middleName.split(" ");

    if (middleNameWords.length === 1) {
      // If the middle name is a single word, use its first character as the initial
      fullName += middleNameWords[0].charAt(0).toUpperCase() + ". ";
    } else {
      // If the middle name has multiple words, use the first character of each word as the initials
      middleNameWords.forEach((word) => {
        fullName += word.charAt(0).toUpperCase() + ".";
      });
      fullName += " ";
    }
  }

  return fullName;
}

export function calculateAge(dateOfBirth: string | Date) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function getAddressString(address: IAddress): string {
  const {
    houseNo,
    street,
    barangay,
    cityMunicipality,
    province,
    zipcode,
    country,
  } = address;
  const addressString = `${houseNo}, ${street}, ${barangay}, ${cityMunicipality}, ${province}, ${country} ${zipcode}`;
  return addressString;
}

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const objectToQueryString = (obj: { [key: string]: any }): string => {
  const queryParams = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== undefined && value !== null) {
        queryParams.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(value)
        );
      }
    }
  }
  return queryParams.join("&");
}

export const getDateString = (birthday: string) => {
  const newDate = new Date(birthday).toLocaleDateString().toString().split("/");
  const month = months.find((month) => month.value == newDate[0])?.label;
  return `${month} ${newDate[1]}, ${newDate[2]}`
}