import axios from "axios";

const apiUrl = "http://18.191.211.71:8085/bank/getCustomer";

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
