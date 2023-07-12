import axios from "axios";

// const apiUrl = "http://localhost:8888/clientservice/client/getAllStudentData";
const apiUrl1 = "http://localhost:8086/hospital/sendsmsbycontactno";
const apiUrl2 = "http://localhost:8086/hospital/sendsms";

const sendSmsById = async (contactNo) => {
  const requestToken = localStorage.getItem("token");
  const patients = await axios.post(`${apiUrl1}`, contactNo, {
    headers: {
      "Content-Type": "application/json",
      jwttoken: requestToken,
    },
  });
  return patients.data;
};

const sendSmsToAll = async () => {
  const requestToken = localStorage.getItem("token");
  const patients = await axios.post(`${apiUrl2}`, null, {
    headers: {
      "Content-Type": "application/json",
      jwttoken: requestToken,
    },
  });
  return patients.data;
};

export { sendSmsById, sendSmsToAll };
