import axios from "axios";

const apiUrl = "http://172.19.0.11:8085/bank/getCustomer";

const viewAllCustomer = async () => {
  const requestToken = localStorage.getItem("token");
  const customers = await axios.get(`${apiUrl}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return customers.data;
};

export { viewAllCustomer };
