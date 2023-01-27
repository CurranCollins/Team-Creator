const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Main/lib/Engineer");
const Intern = require("./Main/lib/Intern");
const Manager = require("./Main/lib/Manager");
const generateHtml = require("./Main/src/generateHtml");
const currentTeam = [];

function init() {
  popManager();
}

const popManager = () => {
  return inquirer
    .prompt([
      {
        message: "What is the Team Managers Name?",
        type: "input",
        name: "name",
      },
      {
        message: "Please enter the Manager ID number",
        type: "input",
        name: "id",
      },
      {
        message: "Enter Manager office number",
        type: "input",
        name: "officeNumber",
      },
    ])

    .then((managerInfo) => {
      const { name, id, email, officeNumber } = managerInfo;
      const manager = new Manager(name, id, email, officeNumber);

      currentTeam.push(manager);
    });
};

const popSub = () => {
  return inquirer.prompt([
    {
      message: "What is Employee role?",
      type: "list",
      name: "role",
      choices: ["Engineer", "Intern"],
    },
    {
      message: "Enter Employee name",
      type: "input",
      name: "name",
    },
    {
      message: "Enter Employee ID",
      type: "input",
      name: "id",
    },
    {
      message: "Enter Employee email",
      type: "input",
      name: "email",
    },
  ]);
};

init();
