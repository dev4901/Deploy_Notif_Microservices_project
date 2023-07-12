import axios from "axios";

const apiUrl1 = "http://172.19.0.13:8086/hospital/getPatientById";
const apiUrl2 = "http://172.19.0.13:8086/hospital/deletePatientById";

const getPatientById = async (patientId) => {
  const requestToken = localStorage.getItem("token");
  const patients = await axios.get(`${apiUrl1}/${patientId}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return patients.data;
};

const deletePatient = async (patientId) => {
  const requestToken = localStorage.getItem("token");
  const patients = await axios.delete(`${apiUrl2}/${patientId}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return patients.data;
};
export { getPatientById, deletePatient };
