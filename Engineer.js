// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    const Employee = require("./Employee");

 class Engineer extends Employee 
    constructor(name,id,email,github){
      super(name,id,email)
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;


       
    };
    getGithub(){
      console.log(this.name);
      console.log(this.email);
      console.log(this.id);
      return this.github;
    };
    
    getRole(){
      return "Engineer";

    };
}
module.exports = Engineer;
