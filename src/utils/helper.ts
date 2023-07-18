import { IAddress, IName } from "../Interface";

export function getFullName({
  firstName,
  middleName,
  lastName,
}: IName) {
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

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function getAddressString(address: IAddress): string {
  const { houseNo, street, baranggay, city, province, zipCode } = address;
  const addressString = `${houseNo}, ${street}, ${baranggay}, ${city}, ${province} ${zipCode}`;
  return addressString;
}