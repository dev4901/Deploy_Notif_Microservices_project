import axios from "axios";

const apiUrl1 = "http://localhost:8084/student/getStudentById";
const apiUrl2 = "http://localhost:8084/student/deleteStudentById";
const requestToken = localStorage.getItem("token");

const getStudentById = async (studentId) => {
  const students = await axios.get(
    `${apiUrl1}/${studentId}`
    , {
      headers: {
        jwttoken: requestToken,
      },
    }
  );
  return students.data;
};

const deleteStudent = async (studentId) => {
  const students = await axios.delete(
    `${apiUrl2}/${studentId}`
    // , {
    //   headers: {
    //     jwttoken: requestToken,
    //   },
    // }
  );
  return students.data;
};
export { getStudentById, deleteStudent };

// const apiUrl1 = "http://localhost:8888/clientservice/client/getStudentById";
// const apiUrl2 = "http://localhost:8888/clientservice/client/deleteStudentById"
