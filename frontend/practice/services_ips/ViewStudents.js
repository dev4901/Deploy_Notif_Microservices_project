import axios from "axios";

const apiUrl = "http://172.19.0.12:8084/student/student";

const viewAllStudent = async () => {
  const requestToken = localStorage.getItem("token");
  const students = await axios.get(
    `${apiUrl}`
    , {
      headers: {
        jwttoken: requestToken,
      },
    }
  );
  return students.data;
};

export { viewAllStudent };
// const apiUrl = "http://172.19.0.4:8888/clientservice/client/getAllStudentData";
