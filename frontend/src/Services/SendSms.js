import axios from "axios";

// const apiUrl = "http://172.19.0.4:8888/clientservice/client/getAllStudentData";
const apiUrl1 = "http://172.19.0.13:8086/hospital/sendsmsbycontactno";
const apiUrl2 = "http://172.19.0.13:8086/hospital/sendsms";

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
