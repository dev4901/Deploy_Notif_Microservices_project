import axios from "axios";

const apiUrl1 = "http://localhost:8085/bank/getCustomerById";
const apiUrl2 = "http://localhost:8085/bank/updateCustomerData";

const getCustomerById = async (customerId) => {
  const requestToken = localStorage.getItem("token");
  const customers = await axios.get(`${apiUrl1}/${customerId}`, {
    headers: {
      jwttoken: requestToken,
    },
  });
  return customers.data;
};

const updateCustomer = async (
  customerId,
  customerName,
  cardNo,
  expairyDate,
  bankName,
  appToken
) => {
  console.log(
    customerId,
    customerName,
    cardNo,
    expairyDate,
    bankName,
    appToken
  );
  const requestToken = localStorage.getItem("token");
  const customers = await axios.put(
    `${apiUrl2}`,
    {
      customerId: customerId,
      customerName: customerName,
      cardNo: cardNo,
      expairyDate: expairyDate,
      bankName: bankName,
      appToken: appToken,
    },
    {
      headers: {
        jwttoken: requestToken,
      },
    }
  );
  console.log(customers);
  return customers.data;
};

export { getCustomerById, updateCustomer };
