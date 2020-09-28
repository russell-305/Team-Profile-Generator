// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
class Intern extends Employee{
  constructor(name,id,email,school){
    super(name,id,email);
    this.name = name;
    this.duty = id;
    this.email = email; 
    this.school = school;
  };
  getSchool(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.id);
    return this.school;

  };
  getRole(){
    return "Intern";
  };
}
module.exports = Intern;