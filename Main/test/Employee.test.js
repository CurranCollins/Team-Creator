const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("can create an employee object", () => {
    const employee = new Employee("Curran", 8675309, "collinscurran@gmail.com");
    expect(typeof employee).toBe("object");
  });

  it("gets employee name from constructor inputs", () => {
    const employee = new Employee("Curran", 8675309, "collinscurran@gmail.com");
    expect(employee.getName()).toEqual(expect.any(String));
  });

  it("gets employee id from constructor inputs", () => {
    const employee = new Employee("Curran", 8675309, "collinscurran@gmail.com");
    expect(employee.getId()).toEqual(expect.any(Number));
  });

  it("");
});
