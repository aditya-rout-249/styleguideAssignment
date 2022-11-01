// function to Register User From A register Form

const registerUser = () => {
  const {
    email,
    password,
    dateOfBirth,
    role,
    organisation,
    firstName,
    lastName,
  } = document.forms[0];

  // conditions to check user email validity
  if (validateEmail(email)) {
    if (localStorage.getItem(email.value)) {
      // Checking user already present or not
      alert("User already exist");
    } else {
      const user = {
        email,
        password,
        dateOfBirth,
        role,
        organisation,
        firstName,
        lastName,
      };
      localStorage.setItem(email.value, user);
      alert(" User Registered Successfully");
    }
  } else {
    alert("Invalid email");
  }
};

//Email Validation using regex
const validateEmail = (email) => {
  // email validation regex
  const emailValidator = /\w+[a-z0-9]@[a-z0-9\.]+/;

  return emailValidator.test(email);
};

