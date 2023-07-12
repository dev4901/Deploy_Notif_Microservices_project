import axios from "axios";

const apiUrl = "http://172.19.0.13:8086/hospital/addpatient";
const addPatient = async (
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
  const patient = await axios.post(
    `${apiUrl}`,
    {
      patientId: patientId,
      patientName: patientName,
      doctorName: doctorName,
      appointmentTime: appointmentTime,
      appointmentDate: appointmentDate,
      hospitalName: hospitalName,
      contactNo: contactNo,
    },
    {
      headers: {
        jwttoken: requestToken,
      },
    }
  );
  console.log(patient);
  return patient.data;
};

export { addPatient };
