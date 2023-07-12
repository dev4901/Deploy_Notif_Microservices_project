import axios from "axios";

const apiUrl1 = "http://localhost:8085/bank/sendpnbyid";
const apiUrl2 = "http://localhost:8085/bank/sendpn";

const sendPnById = async (appToken) => {
  const requestToken = localStorage.getItem("token");
  const customers = await axios.post(`${apiUrl1}`, appToken, {
    headers: {
      "Content-Type": "application/json",
      jwttoken: requestToken,
    },
  });
  return customers.data;
};

const sendPnToAll = async () => {
  const requestToken = localStorage.getItem("token");
  const customers = await axios.post(`${apiUrl2}`, null, {
    headers: {
      "Content-Type": "application/json",
      jwttoken: requestToken,
    },
  });
  return customers.data;
};

export { sendPnById, sendPnToAll };
