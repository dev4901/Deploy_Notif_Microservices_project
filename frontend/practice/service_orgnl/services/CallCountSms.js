import axios from "axios";

const apiUrl = "http://localhost:8086/hospital/getSmsServiceCallCount";

const callCountSmsService = async () => {
  const requestToken = localStorage.getItem("token");
  const calls = await axios.get(`${apiUrl}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  console.log(calls.data);
  return calls.data;
};

export { callCountSmsService };
