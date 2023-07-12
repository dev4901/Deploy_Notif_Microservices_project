import axios from "axios";

const apiUrl = "http://172.19.0.12:8084/student/student";
const addStudent = async (
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
  const student = await axios.post(
    `${apiUrl}`,
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
  console.log(student);
  return student.data;
};

export { addStudent };

// const student = await axios.get(
//   `${apiUrl}/${studentId1}/${studentName1}/${marks1}/${email1}/${contactNo1}`
// );

// const apiUrl = "http://172.19.0.4:8888/clientservice/client/addStudent";
// var formData = new FormData();
// formData.append("data",{studentId:studentId1,studentName:studentName1,marks:marks1,email:email1,contactNo:contactNo1})
// var config = {
//   method: "post",
//   url: apiUrl,
//   headers: { Accept: "application/json; charset=utf8", "Content-Type": "application/json; charset=utf8" },
//   data: formData,
// };
// const student = await axios(config);
// console.log(JSON.parse(formData));
// alert("Haa i mane j bolavto to");
// const response = await fetch(apiUrl, {
//   method: "POST", // *GET, POST, PUT, DELETE, etc.
//   mode: "cors", // no-cors, *cors, same-origin
//   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//   // credentials: "same-origin", // include, *same-origin, omit
//   headers: {
//     "Content-Type": "application/json",
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   redirect: "follow", // manual, *follow, error
//   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

//   body: JSON.stringify(formData),
// });
// const student = response;
// console.log(formData);
