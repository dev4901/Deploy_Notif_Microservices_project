import axios from "axios";

const apiUrl1 = "http://localhost:8086/hospital/getPatientById";
const apiUrl2 = "http://localhost:8086/hospital/updatePatientData";

const getPatientById = async (patientId) => {
  const requestToken = localStorage.getItem("token");
  const patients = await axios.get(`${apiUrl1}/${patientId}`
  , {
    headers: {
      jwttoken: requestToken,
    },
  }
  );
  return patients.data;
};

const updatePatient = async (
  patientId,
  patientName,
  doctorName,
  appointmentTime,
  appointmentDate,
  hospitalName,
  contactNo
) => {
  console.log(
    patientId,
    patientName,
    doctorName,
    appointmentTime,
    appointmentDate,
    hospitalName,
    contactNo
  );
  const requestToken = localStorage.getItem("token");
  const patients = await axios.put(`${apiUrl2}`, {
    patientId: patientId,
    patientName: patientName,
    doctorName: doctorName,
    appointmentTime: appointmentTime,
    appointmentDate: appointmentDate,
    hospitalName: hospitalName,
    contactNo: contactNo,
  }
  , {
    headers: {
      jwttoken: requestToken,
    },
  }
  );
  console.log(patients);
  return patients.data;
};

export { getPatientById, updatePatient };
