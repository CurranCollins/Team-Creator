const Engineer = require("../lib/Engineer");

test("that an Engineer object is created", () => {
  const engineer = new Engineer(
    "Curran",
    8675309,
    "collinscurran@gmail.com",
    "CurranCollins"
  );
  expect(engineer.github).toEqual(expect.any(String));
});

test("that it gets value of github username", () => {
  const engineer = new Engineer(
    "Curran",
    8675309,
    "collinscurran@gmail.com",
    "CurranCollins"
  );
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets role as Engineer", () => {
  const engineer = new Engineer(
    "Curran",
    8675309,
    "collinscurran@gmail.com",
    "CurranCollins"
  );
  expect(engineer.getRole()).toEqual("Engineer");
});
