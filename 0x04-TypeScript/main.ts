//interface
interface Student {
    firstname : string,
    lastname : string,
    age : number,
    location : string
}

//two students example
const student1 : Student = {
    firstname : "john",
    lastname : "doe",
    age : 26,
    location : "london"
};
const student2 : Student = {
    firstname : "jane",
    lastname : "dae",
    age : 24,
    location : "los angelos"
};

//array
const studentsList : Student[] = [student1 , student2];

//function to render a table of the array
function rendertable (Student : Student[])
{
//create table element
 const table = document.createElement('table');
const headerRow = document.createElement('tr');
const thead = document.createElement('thead');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th')
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

//add row for each student in the table
studentsList.forEach ( Student => {
const row = document.createElement("row");

const firstnameCell = document.createComment("td");
firstnameCell.textContent= Student.firstname;
row.appendChild(firstnameCell);

 const locationCell = document.createElement("td");
 locationCell.textContent = Student.location;
 row.appendChild(locationCell);

 //append row ot table
 table.appendChild(row);
});
document.body.appendChild(table);
}

//call the function to render the tabke
rendertable(studentsList);