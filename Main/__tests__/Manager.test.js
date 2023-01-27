const Manager = require("../lib/Manager");

test("a Manager object is created", () => {
  const manager = new Manager("Curran", 8675309, "collinscurran@gmail.com", 13);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("role set as Manager", () => {
  const manager = new Manager("Curran", 8675309, "collinscurran@gmail.com", 13);
  expect(manager.getRole()).toEqual("Manager");
});
