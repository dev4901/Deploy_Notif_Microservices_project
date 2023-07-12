import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import {
  deleteCustomer,
  getCustomerById,
} from "../../../Services/DeleteCustomer";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery"
import { ToastContainer, toast, error, success, info } from "react-toastify";
export default function DeleteCustomer() {
  let navigate = useNavigate();
  const [customerId, setCustomerId] = useState();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChangeId = (e) => {
    e.preventDefault();
    setCustomerId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await deleteCustomer(customerId);
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          toast.info("Data Deleted Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
          // alert("Data Deleted Successfully....");
          setCustomerId();
          navigate("/services/pushnotificationservice");
        }, 2000);
      } catch (error) {
        console.log(error);

        setErrorMsg(error);
        setTimeout(() => {
          setIsLoading(false);
          toast.info(errorMSg, { position: toast.POSITION.TOP_RIGHT });
          // alert(errorMSg);
        }, 2000);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const respo = await getCustomerById(customerId);
        console.log(respo);
        setData(respo);
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
  $(document).ready(function () {
    $(".customerIdInput").keypress(function (e) {
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
              <h3 className="m-5">Delete Customer Information</h3>
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
                      placeholder="990"
                      maxLength={3}
                      minLength={1}
                      className="customerIdInput"
                      onChange={(e) => {
                        handleOnChangeId(e);
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
                      placeholder="Divyesh Variya"
                      defaultValue={data.customerName}
                      plaintext
                      readOnly
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
                      placeholder="908712348765"
                      defaultValue={data.cardNo}
                      plaintext
                      readOnly
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
                    <Form.Control
                      type="date"
                      name="expairyDate"
                      placeholder="01/01/2050"
                      defaultValue={data.expairyDate}
                      plaintext
                      readOnly
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
                      name="Bank Name"
                      placeholder="Gujarat Bank"
                      defaultValue={data.bankName}
                      plaintext
                      readOnly
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
                      defaultValue="************"
                      plaintext
                      readOnly
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
                  <Button type="submit" variant="danger">
                    Delete Data
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
