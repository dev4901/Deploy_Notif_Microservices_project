import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import {
  getCustomerById,
  updateCustomer,
} from "../../../Services/UpdateCustomer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import $ from "jquery";
import addDays from "date-fns/addDays";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function UpdateCustomer() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [customerId, setCustomerId] = useState(data.customerId);
  const [customerName, setCustomerName] = useState(data.customerName);
  const [cardNo, setCardNo] = useState(data.cardNo);
  const [expairyDate, setExpairyDate] = useState(data.expairyDate);
  const [bankName, setBankName] = useState(data.bankName);
  const [appToken, setAppToken] = useState(data.appToken);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(customerId);
        const respo = await getCustomerById(customerId);
        console.log(respo);
        setData(respo);
        setCustomerId(data.customerId);
        setCustomerName(data.customerName);
        setCardNo(data.cardNo);
        setExpairyDate(data.expairyDate);
        setBankName(data.bankName);
        setAppToken(data.appToken);
        setTimeout(async () => {
          console.log(respo);
          // setIsLoading(false);
            toast.info("Data Receiced...", {
              position: toast.POSITION.TOP_RIGHT,
            });
        }, 2000);
      } catch (error) {
        console.log(error);
        setErrorMsg(error);
        
      }
    };
    getData();
  }, [customerId]);
  const handleCustomerId = (e) => {
    e.preventDefault();
    setCustomerId(e.target.value);
  };
  const handleCustomerName = (e) => {
    e.preventDefault();
    setCustomerName(e.target.value);
  };
  const handleCardNo = (e) => {
    e.preventDefault();
    setCardNo(e.target.value);
  };
  const handleExpairyDate = (e) => {
    // e.preventDefault();
    setExpairyDate(e);
  };
  const handleBankName = (e) => {
    e.preventDefault();
    setBankName(e.target.value);
  };
  const handleAppToken = (e) => {
    e.preventDefault();
    setAppToken(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await updateCustomer(
          customerId,
          customerName,
          cardNo,
          expairyDate.getDay() +
          "/" +
          expairyDate.getMonth() +
          "/" +
          expairyDate.getFullYear(),
          bankName,
          appToken
        );
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          // alert("Data Updated Successfully....");
          toast.info("Data Updated Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(data);
          navigate("/services/pushnotificationservice");
        }, 2000);
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          setErrorMsg(error);
          toast.info(errorMSg, { position: toast.POSITION.TOP_RIGHT });
          // alert(errorMSg);
        }, 2000);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
  $(document).ready(function () {
    $(".customerNameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z ]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        // e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate Only...");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".bankNameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z ]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        // e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate Only...");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".customerIdInput").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $(".error").html("Please Enter Number Only...").stop().show();
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".cardNoInput").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        $(".error").html("Please Enter Number Only...").stop().show();
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    
  });

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
              <h3 className="m-5">Update Customer Information</h3>
            </div>
            <h6 className="error"></h6>
            <div>
              <Form onSubmit={handleSubmit} style={{ padding: "20px 0px" }}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.customerId"
                >
                  <Form.Label column sm="4">
                    Customer Id :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="customerId"
                      maxLength={3}
                      minLength={1}
                      className="customerIdInput"
                      placeholder="990"
                      onChange={(e) => {
                        handleCustomerId(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.customerName"
                >
                  <Form.Label column sm="4">
                    Customer Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="customerName"
                      maxLength={50}
                      className="customerNameInput"
                      placeholder="Divyesh Variya"
                      defaultValue={customerName}
                      onChange={(e) => {
                        handleCustomerName(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="Form.cardNo">
                  <Form.Label column sm="4">
                    Credit Card No. :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="number"
                      name="cardNo"
                      maxLength={12}
                      minLength={12}
                      className="cardNoInput"
                      placeholder="987612340956"
                      defaultValue={cardNo}
                      onChange={(e) => {
                        handleCardNo(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.expairyDate"
                >
                  <Form.Label column sm="4">
                    Expairy Date :
                  </Form.Label>
                  <Col sm="8">
                  <DatePicker
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 3650)}
                      selected={expairyDate}
                      className="expairyDateInput"
                      name="expairyDate"
                      placeholderText="01/01/2050"
                      defaultValue={expairyDate}
                      onChange={(e) => {
                        handleExpairyDate(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="Form.bankName">
                  <Form.Label column sm="4">
                    Bank Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="bankName"
                      maxLength={50}
                      className="bankNameInput"
                      placeholder="Gujarat Bank"
                      defaultValue={bankName}
                      onChange={(e) => {
                        handleBankName(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="Form.appToken">
                  <Form.Label column sm="4">
                    Application Token :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="appToken"
                      placeholder="************"
                      defaultValue={appToken}
                      onChange={(e) => {
                        handleAppToken(e);
                      }}
                      required
                    />
                  </Col>
                </Form.Group>
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
                      navigate("/services/pushnotificationservice");
                    }}
                  >
                    <i class="fa fa-arrow-circle-left"></i>
                    <span>Back</span>{" "}
                  </Button>
                  <Button type="submit" variant="warning">
                    Update Data
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
