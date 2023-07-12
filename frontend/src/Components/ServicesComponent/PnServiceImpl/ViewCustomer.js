import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../ServicesMain.css";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPnById, sendPnToAll } from "../../../Services/SendPn";
import { viewAllCustomer } from "../../../Services/ViewCustomer";
import { useNavigate } from "react-router-dom";
export default function ViewCustomer() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState(
    "Sorry ! Something Went to wrong..."
  );
  let [pnDataForId, setPnDataForId] = useState("");
  let [errorPnMSgForId, setPnErrorMsgForId] = useState("");
  let [pnDataForAll, setPnDataForAll] = useState([]);
  let [errorPnMSgForAll, setPnErrorMsgForAll] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let handleSendPnById = (appToken, customerName) => {
    const sendPNById = async (appToken, customerName) => {
      setIsLoading(true);
      try {
        const respons = await sendPnById(appToken);
        console.log(respons);
        setPnDataForId(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.info(respons + "to " + customerName, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/services/pushnotificationservice");
        }, 2000);
        setTimeout(() => {
          setPnDataForId("");
        }, 5000);
      } catch (error) {
        setPnErrorMsgForId(error.message + " in " + customerName);
        setTimeout(() => {
          setIsLoading(false);
          console.log(error.message);
          toast.error(error.message + " in " + customerName, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/services/pushnotificationservice");
        }, 2000);
        setTimeout(() => {
          setPnErrorMsgForId("");
        }, 5000);
      }
    };
    sendPNById(appToken, customerName);
  };
  const handleSendPnToAll = (data1) => {
    const sendPNToAll = async (data1) => {
      setIsLoading(true);
      try {
        const respons = await sendPnToAll();
        console.log(respons);
        setPnDataForAll(respons);
        setTimeout(() => {
          setIsLoading(false);
          respons.map((r) => {
            console.log(r.body);

            toast.info(r.body + "to " + data1.customerName, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
          navigate("/services/pushnotificationservice");
        }, 2000);
        setTimeout(() => {
          setPnDataForAll("");
        }, 5000);
      } catch (error) {
        setPnErrorMsgForAll(error.message);
        setTimeout(() => {
          setIsLoading(false);
          toast.error(error.message + "in " + data1.customerName, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/services/pushnotificationservice");
        }, 2000);
        setTimeout(() => {
          setPnErrorMsgForAll("");
        }, 5000);
      }
    };
    sendPNToAll(data1);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const respons = await viewAllCustomer();
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Information received...", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 2000);
      } catch (error) {
        setErrorMsg(error.message);
        setTimeout(() => {
          setIsLoading(false);
          toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
          // alert(errorMSg);
        }, 2000);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="componentBody">
        {isLoading ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <ToastContainer />
            <div>
              <h3 className="m-3">View All Customer</h3>
            </div>
            <div className="m-4">
              <div>
                <div className="restApiMsg">{errorPnMSgForAll}</div>
                <h6 className="restApiMsg">{errorPnMSgForId}</h6>
                <div className="restApiMsg">
                  {Array.from(pnDataForAll).map((msg) => (
                    <h6>{msg.body}</h6>
                  ))}
                </div>
                <h6 className="restApiMsg">{pnDataForId}</h6>
              </div>
              <div className="m-3">
                <Button
                  variant="outline-info"
                  onClick={() => {
                    handleSendPnToAll(data);
                  }}
                >
                  Send Push-Notification To All
                </Button>
              </div>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Customer No.</th>
                    <th>Customer Name</th>
                    <th>Credit Card No.</th>
                    <th>Expairy Date</th>
                    <th>Bank Name</th>
                    <th>Application Token</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((customer) => (
                    <tr key={customer.customerId}>
                      <td>{customer.customerId}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.cardNo}</td>
                      <td>{customer.expairyDate}</td>
                      <td>{customer.bankName}</td>
                      <td>*******</td>
                      <td>
                        <Button
                          onClick={() => {
                            handleSendPnById(
                              customer.appToken,
                              customer.customerName
                            );
                          }}
                          variant="outline-primary"
                        >
                          Send Push Notification
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  variant="dark"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  <i class="fa fa-arrow-circle-left"></i>
                  <span>Go To Other Services</span>{" "}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
