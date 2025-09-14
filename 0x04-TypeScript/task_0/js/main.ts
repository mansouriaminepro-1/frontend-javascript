//Interface teacher
interface Teacher {
  readonly firstName: string; // only set at initialization
  readonly lastName: string;  // only set at initialization
  fullTimeEmployee: boolean;  // must always be defined
  yearsOfExperience?: number; // optional
  location: string;           // must always be defined
  [key: string]: any;         // allow any extra attributes (like contract, subjects, etc.)
}
//example for display
const teacher1 : Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: false,  // additional property allowed
};

console.log(teacher1);

// Interface directors that inherits from teacher
interface Directors extends Teacher {
    numberOfReports : number ;
}
//example
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//interface printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//function printTeacher that displays first letter of firstname and full lastname
const printTeacher : printTeacherFunction = (FirstName : string , lastName : string) : string =>
 {
  const firstInitial = FirstName.charAt(0).toUpperCase() ;
  return '$firstInitial, $lastName';
 };

 //interface for the class
 interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
 }

 //interface for the constructor
 interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

//class that implements the interface of the class
class StudentClass implements StudentClassInterface {
  private firstName : string ;
  private lastName : string ;

// constructor
  constructor (firstName : string , lastName : string)
  {
    this.firstName = firstName;
    this.lastName = lastName;
  }
// class methode 1
  workOnHomework(): string {
    return 'currently working';
  }

  //class methode2
  displayName(): string {
    return this.firstName;
  }
}
//example 
const Student : StudentClassInterface = new StudentClass("John", "Doe");
console.log(Student.displayName());
console.log(Student.workOnHomework());