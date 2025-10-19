interface DirectorInterface {
  workFromHome() : string ;
  getCoffeeBreak() : string;
  workDirectorTasks() : string ;
}

interface TeacherInterface {
  workFromHome() : string;
  getCoffeeBreak() : string;
  workTeacherTasks() : string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee (Salary : number | string ) : Director | Teacher 
{
  if(typeof Salary == 'number' && Salary < 500)
  {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector (employee : Teacher | Director) : employee is Director
{
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork (employee : Teacher | Director) : string
{
  if (isDirector(employee)){
    return employee.workDirectorTasks();
  }
  else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass ( todayClass : Subjects) : string
{
    if (todayClass === "Math")
    {
        return "Teaching Math";
    }
    else 
    {
        return "Teaching History";
    }
}

console.log(teachClass("History"));
console.log(teachClass("Math"));