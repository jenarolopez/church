export interface IMember {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  image: string;
  birthday: string;
  gender: string;
  contactNo: string;
  addresses: IAddress[];
  education: IEducationalBackground;
  workInformation: IWorkingInformation;
  dependents: IDependent[];
  familyBackground: IFamilyBackground;
  marriageInformation: IMarriageInformation;
  createdAt: string;
  updatedAt: string;
}

export interface IAddress {
  id: number;
  houseNo: string;
  street: string;
  barangay: string;
  cityMunicipality: string;
  province: string;
  country: string;
  zipcode: string;
  email: string;
  contactNumber: string;
  UserId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IEducationalBackground {
  id: number;
  schoolLastAttended: string;
  course: string;
  yearGraduated: string;
  graduated: boolean;
  UserId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IWorkingInformation {
  id: number;
  work: string;
  position: string;
  companyName: string;
  telephoneNumber: string;
  email: string;
  UserId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IDependent {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  UserId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IFamilyBackground {
  id: number;
  fatherFirstName: string;
  fatherLastName: string;
  fatherMiddleName: string;
  fatherWork: string;
  motherFirstName: string;
  motherLastName: string;
  motherMiddleName: string;
  motherWork: string;
  noOfSiblings: number;
  noOfChristianSiblings: number;
  UserId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IMarriageInformation {
  id: number;
  spouseFirstName: string;
  spouseLastName: string;
  spouseMiddleName: string;
  dateOfMarriage: string;
  spouseBirthday: string;
  UserId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IName {
  firstName: string;
  lastName: string;
  middleName: string;
}

export const members = [
  {
    firstName: "John",
    middleName: "Robert",
    lastName: "Doe",
    profile:
      "https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    birthDay: new Date(1990, 5, 15),
    gender: "Male",
    contactNo: "123-456-7890",
    address: {
      houseNo: "123",
      street: "Main Street",
      baranggay: "Central",
      city: "Metroville",
      province: "Provinceville",
      zipCode: "12345",
    },
    age: 31,
    educationalBackground: {
      schoolLastAttended: "ABC University",
      course: "Computer Science",
      graduated: true,
      yearGraduated: 2012,
    },
    workingInformation: {
      work: "Software Engineer",
      position: "Senior Developer",
      companyName: "XYZ Corporation",
      telephoneNumber: "987-654-3210",
    },
    children: [
      { name: "Emily", age: 6, birthday: new Date(2015, 8, 10) },
      { name: "Jacob", age: 4, birthday: new Date(2017, 2, 25) },
    ],
    familyBackground: {
      father: {
        name: "Robert Doe",
        work: "Accountant",
      },
      mother: {
        name: "Jane Doe",
        work: "Teacher",
      },
      numberOfSiblings: 2,
      numberOfChristians: 2,
    },
  },
  {
    firstName: "Alice",
    middleName: "Elizabeth",
    lastName: "Smith",
    profile:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
    birthDay: new Date(1985, 10, 20),
    gender: "Female",
    contactNo: "987-654-3210",
    address: {
      houseNo: "456",
      street: "Park Avenue",
      baranggay: "North",
      city: "Cityville",
      province: "Provinceville",
      zipCode: "54321",
    },
    age: 36,
    educationalBackground: {
      schoolLastAttended: "DEF College",
      course: "Business Administration",
      graduated: true,
      yearGraduated: 2007,
    },
    workingInformation: {
      work: "Marketing Manager",
      position: "Senior Manager",
      companyName: "ABC Corporation",
      telephoneNumber: "123-456-7890",
    },
    children: [
      { name: "Olivia", age: 9, birthday: new Date(2012, 3, 8) },
      { name: "Sophia", age: 5, birthday: new Date(2017, 6, 12) },
      { name: "Noah", age: 2, birthday: new Date(2020, 9, 2) },
    ],
    familyBackground: {
      father: {
        name: "William Smith",
        work: "Engineer",
      },
      mother: {
        name: "Sarah Smith",
        work: "Architect",
      },
      numberOfSiblings: 3,
      numberOfChristians: 3,
    },
  },
  {
    firstName: "Michael",
    middleName: "James",
    lastName: "Johnson",
    profile:
      "https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=",
    birthDay: new Date(1992, 8, 5),
    gender: "Male",
    contactNo: "555-123-4567",
    address: {
      houseNo: "789",
      street: "Oak Street",
      baranggay: "West",
      city: "Townsville",
      province: "Provinceville",
      zipCode: "98765",
    },
    age: 29,
    educationalBackground: {
      schoolLastAttended: "GHI University",
      course: "Electrical Engineering",
      graduated: true,
      yearGraduated: 2014,
    },
    workingInformation: {
      work: "Electrical Engineer",
      position: "Manager",
      companyName: "DEF Corporation",
      telephoneNumber: "789-456-1230",
    },
    children: [{ name: "Ethan", age: 4, birthday: new Date(2019, 2, 12) }],
    familyBackground: {
      father: {
        name: "David Johnson",
        work: "Doctor",
      },
      mother: {
        name: "Laura Johnson",
        work: "Nurse",
      },
      numberOfSiblings: 1,
      numberOfChristians: 1,
    },
  },
];
