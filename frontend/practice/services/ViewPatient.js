import axios from "axios";

// const apiUrl = "http://18.191.211.71:8888/clientservice/client/getAllStudentData";
const apiUrl = "http://18.191.211.71:8086/hospital/getpatients";

const viewAllPatient = async () => {
  const requestToken = localStorage.getItem("token");
  const patients = await axios.get(`${apiUrl}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return patients.data;
};

export { viewAllPatient };
