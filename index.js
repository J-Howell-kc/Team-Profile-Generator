const inquirer = require("inquirer");
const Intern = require("./intern");
const Manager = require("./manager.js");
const team = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: email,
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: officeNumber,
    },
  ])
  .then((res) => {
    const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    team.push(manager);
    menu();
  });
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["addEngineer", "addIntern", "Finish"],
      },
    ])
    .then((res) => {
      if (res.action === "addEngineer") {
        addEngineer ()
      } else if (res.action === "addIntern") {
      } else {
      }
    });
}
function addEngineer() {
    inquirer
  .prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's gitHub?",
      name: "gitHub",
    },
  ])
  .then((res) => {
    const engineer = new Engineer(res.name, res.id, res.email, res.gitHub);
    team.push(engineer);
    menu();
  });
}

function addIntern() {
    inquirer
  .prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "gitHub",
    },
  ])
  .then((res) => {
    const intern = new Intern(res.name, res.id, res.email, res.school);
    team.push(intern);
    menu();
  });
}