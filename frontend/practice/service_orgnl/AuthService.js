import axios from "axios";

const apiUrl1 = "http://localhost:8089/auth/authenticate";
const apiUrl2 = "http://localhost:8089/auth/signup";
const apiUrl3 = "http://localhost:8089/auth/findByEmail";
const apiUrl4 = "http://localhost:8089/auth/sendmailbyid";

const loginService = async (email, password) => {
  console.log(email, password);
  const loginStatus = await axios.post(`${apiUrl1}`, {
    emailId: email,
    password: password,
  });
  console.log(loginStatus);
  return loginStatus;
};

const signupService = async (emailId, password, fName, lName) => {
  console.log(emailId, password, fName, lName);
  const signupstatus = await axios.post(`${apiUrl2}`, {
    emailId: emailId,
    password: password,
    fName: fName,
    lName: lName,
  });
  console.log(signupstatus);
  return signupstatus.data;
};

const findByEmailId = async (email) => {
  console.log(email);
  const isAvailable = await axios.get(`${apiUrl3}/${email}`);
  console.log(isAvailable);
  return isAvailable;
};

const ForgetPasswordService = async (email) => {
  console.log(email);
  const mailStatus = await axios.post(`${apiUrl4}`, email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(mailStatus);
  return mailStatus;
};

export { loginService, signupService, findByEmailId, ForgetPasswordService };
