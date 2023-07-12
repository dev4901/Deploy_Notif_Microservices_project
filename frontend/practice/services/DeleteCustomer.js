import axios from "axios";

const apiUrl1 = "http://18.191.211.71:8085/bank/getCustomerById";
const apiUrl2 = "http://18.191.211.71:8085/bank/deleteCustomerById";

const getCustomerById = async (customerId) => {
  const requestToken = localStorage.getItem("token");
  const customers = await axios.get(`${apiUrl1}/${customerId}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return customers.data;
};

const deleteCustomer = async (customerId) => {
  const requestToken = localStorage.getItem("token");
  const customers = await axios.delete(`${apiUrl2}/${customerId}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return customers.data;
};
export { getCustomerById, deleteCustomer };
