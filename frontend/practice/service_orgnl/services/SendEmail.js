import axios from "axios";

const apiUrl1 = "http://localhost:8084/student/sendmailbyid";
const apiUrl2 = "http://localhost:8084/student/sendmail";

const sendEmailById = async (studentEmail) => {
  const requestToken1 = localStorage.getItem("token");
  console.log(requestToken1);
  const students = await axios.post(`${apiUrl1}`, studentEmail, {
    headers: {
      "Content-Type": "application/json",
      jwttoken: requestToken1
    },
  });
  return students.data;
};

const sendEmailToAll = async () => {
  const requestToken2 = localStorage.getItem("token");
  console.log(requestToken2);
  const students = await axios.post(`${apiUrl2}`, null,{
    headers: {
      "Content-Type": "application/json",
      "jwttoken": requestToken2
    }
  });
  return students.data;
};

export { sendEmailById, sendEmailToAll };

// const apiUrl = "http://localhost:8888/clientservice/client/getAllStudentData";
