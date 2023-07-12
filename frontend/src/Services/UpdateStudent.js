import axios from "axios";

const apiUrl1 = "http://172.19.0.12:8084/student/getStudentById";
const apiUrl2 = "http://172.19.0.12:8084/student/updateStudentData";
// const requestToken = localStorage.getItem("token");

const getStudentById = async (studentId) => {
  const requestToken = localStorage.getItem("token");
  const students = await axios.get(`${apiUrl1}/${studentId}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return students.data;
};

const updateStudent = async (
  studentid,
  studentname,
  studentmarks,
  studentemail,
  studentmentorname,
  studentuniversityname
) => {

  console.log(
    studentid,
    studentname,
    studentmarks,
    studentemail,
    studentmentorname,
    studentuniversityname
  );
  const requestToken = localStorage.getItem("token");
  const students = await axios.put(
    `${apiUrl2}`,
    {
      studentId: studentid,
      studentName: studentname,
      studentMark: studentmarks,
      studentEmail: studentemail,
      studentMentorName: studentmentorname,
      studentUniversity: studentuniversityname,
    },
    {
      headers: {
        jwttoken: requestToken,
      },
    }
  );
  console.log(students);
  return students.data;
};

export { getStudentById, updateStudent };
// const apiUrl1 = "http://172.19.0.4:8888/clientservice/client/getStudentById";
// const apiUrl2 = "http://172.19.0.4:8888/clientservice/client/updateStuentData";
// const students = await axios.get(
//   `${apiUrl2}/${studentId1}/${studentName1.replace(
//     / /g,
//     "+"
//   )}/${marks1}/${email1}/${contactNo1}`
// );
