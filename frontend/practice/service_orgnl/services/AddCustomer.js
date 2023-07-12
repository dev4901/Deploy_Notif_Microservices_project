import axios from "axios";

const apiUrl = "http://localhost:8085/bank/addCustomer";

const addCustomer = async (
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
  const customer = await axios.post(
    `${apiUrl}`,
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
  console.log(customer);
  return customer.data;
};

export { addCustomer };
