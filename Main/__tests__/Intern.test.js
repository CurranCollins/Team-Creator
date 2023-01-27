const Intern = require("../lib/Intern");

test("an Intern object is created", () => {
  const intern = new Intern(
    "Curran",
    8675309,
    "collinscurran@gmail.com",
    "CCC"
  );
  expect(intern.school).toEqual(expect.any(String));
});

test("employees school received from constructor", () => {
  const intern = new Intern(
    "Curran",
    8675309,
    "collinscurran@gmail.com",
    "CCC"
  );
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("sets role as Intern", () => {
  const intern = new Intern(
    "Curran",
    8675309,
    "collinscurran@gmail.com",
    "CCC"
  );
  expect(intern.getRole()).toEqual("Intern");
});
