import axios from "axios";

const apiUrl = "http://localhost:8084/student/getEmailServiceCallCount";

const callCountEmailService = async () => {
  const requestToken = localStorage.getItem("token");
  const calls = await axios.get(
    `${apiUrl}`
    , {
      headers: {
        jwttoken: requestToken,
      },
    }
  );
  console.log(calls.data);
  return calls.data;
};

export { callCountEmailService };
