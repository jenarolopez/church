import { IMember } from "../../../Interface";

export const initialMemberState: IMember = {
  id: 0,
  firstName: "",
  middleName: "",
  lastName: "",
  image: "",
  birthday: "",
  gender: "",
  contactNo: "",
  addresses: [
    {
      id: 0,
      houseNo: "",
      street: "",
      barangay: "",
      cityMunicipality: "",
      province: "",
      country: "",
      zipcode: "",
      email: "",
      contactNumber: "",
      UserId: 0,
      createdAt: "",
      updatedAt: "",
    },
  ],
  education: {
    id: 0,
    schoolLastAttended: "",
    course: "",
    yearGraduated: "",
    graduated: false,
    UserId: 0,
    createdAt: "",
    updatedAt: "",
  },
  workInformation: {
    id: 0,
    work: "",
    position: "",
    companyName: "",
    telephoneNumber: "",
    email: "",
    UserId: 0,
    createdAt: "",
    updatedAt: "",
  },
  dependents: [
    {
      id: 0,
      firstName: "",
      lastName: "",
      middleName: "",
      birthday: "",
      UserId: 0,
      createdAt: "",
      updatedAt: "",
    },
  ],
  familyBackground: {
    id: 0,
    fatherFirstName: "",
    fatherLastName: "",
    fatherMiddleName: "",
    fatherWork: "",
    motherFirstName: "",
    motherLastName: "",
    motherMiddleName: "",
    motherWork: "",
    noOfSiblings: 0,
    noOfChristianSiblings: 0,
    UserId: 0,
    createdAt: "",
    updatedAt: "",
  },
  marriageInformation: {
    id: 0,
    spouseFirstName: "",
    spouseLastName: "",
    spouseMiddleName: "",
    spouseBirthday: "",
    dateOfMarriage: "",
    UserId: 0,
    createdAt: "",
    updatedAt: "",
  },
  createdAt: "",
  updatedAt: "",
};
