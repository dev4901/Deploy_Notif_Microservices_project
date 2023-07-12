import axios from "axios";

const apiUrl = "http://localhost:8085/bank/getCustomer";

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
