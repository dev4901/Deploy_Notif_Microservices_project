import React, { useEffect, useState } from "react";
import "../ServicesMain.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { deleteStudent, getStudentById } from "../../../Services/DeleteStudent";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
function DeleteStudent() {
  let navigate = useNavigate();
  const [studentid, setStudentid] = useState();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Student Data Not Added...");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChangeId = (e) => {
    e.preventDefault();
    setStudentid(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await deleteStudent(studentid);
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          // alert("Data Deleted Successfully....");
          toast.info("Data Deleted Successfully....", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }, 2000);
        setStudentid();
        navigate("/services/emailservice");
      } catch (error) {
        console.log(error.message);
        setErrorMsg(error.message);
        setTimeout(() => {
          setIsLoading(false);
          // alert(errorMSg);
          toast.info(error.message, { position: toast.POSITION.TOP_RIGHT });
        }, 2000);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
  useEffect(() => {
    const getData = async () => {
      
      try {
        const respo = await getStudentById(studentid);
        setData(respo);
        setTimeout(async () => {
        console.log(respo);
        // setIsLoading(false);
          toast.info("Data Receiced...", {
            position: toast.POSITION.TOP_RIGHT,
          });
      }, 2000);
      } catch (error) {
        setErrorMsg(error);
        setTimeout(async () => {
          console.log(error.message);
          // setIsLoading(false);
          // toast.error(error.message, {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
        }, 2000);
      }
    };
    getData();
  }, [studentid]);
  $(document).ready(function () {
    $(".studentIdInput").keypress(function (e) {
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
              <h3 className="m-5">Delete Student Information</h3>
            </div>
            <h6 className="error"></h6>
            <div>
              <Form onSubmit={handleSubmit} style={{ padding: "20px 0px" }}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentId"
                >
                  <Form.Label column sm="4">
                    Student Enrollment No. :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentId"
                      minLength={12}
                      maxLength={12}
                      className="studentIdInput"
                      placeholder="190170116075"
                      defaultValue={data.studentid}
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
                  controlId="Form.studentName"
                >
                  <Form.Label column sm="4">
                    Student Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentName"
                      placeholder="Divyesh Variya"
                      defaultValue={data.studentName}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentMentorName"
                >
                  <Form.Label column sm="4">
                    Mentor Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentMentorName"
                      placeholder="Jashwant Dave"
                      defaultValue={data.studentMentorName}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentUniversity"
                >
                  <Form.Label column sm="4">
                    University Name :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentUniversity"
                      placeholder="GTU"
                      defaultValue={data.studentUniversity}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentMark"
                >
                  <Form.Label column sm="4">
                    Test Marks :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name="studentMark"
                      placeholder="100"
                      defaultValue={data.studentMark}
                      plaintext
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="Form.studentEmail"
                >
                  <Form.Label column sm="4">
                    Email address :
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="email"
                      name="studentEmail"
                      placeholder="name@example.com"
                      defaultValue={data.studentEmail}
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
                      navigate("/services/emailservice");
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

export default DeleteStudent;

// const frm = useFormik({
//   initialValues: {
//     studentId: "",
//     studentName: "",
//     marks: "",
//     email: "",
//     contactNo: "",
//   },
//   onSubmit: (event) => {
//     // event.prevantDefault();
//     console.log(frm.values.studentId);
//     console.log(frm.values.studentName);
//     console.log(frm.values.marks);
//     console.log(frm.values.email);
//     console.log(frm.values.contactNo);
//     // alert(`The name you entered was: ${frm.values.name}`);
// const fetchData = async () => {
//   try {
//     const respons = await deleteStudent(frm.values.studentId);
//     // const srcForImage = URL.createObjectURL(foods)
//     console.log(respons);
//     // console.log(srcForImage);
//     setData(respons);
//     alert("Data Deleted Successfully....");
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//     setErrorMsg(error);
//     alert(errorMSg);
//   }
// };
// fetchData();
// console.log(errorMSg);
//   },

// });
// const ChangeId=()=>{
// const getData = async () => {
//   try {
//     const respo = await getStudentById(frm.values.studentId);
//     console.log(respo);
//     // console.log(srcForImage);
//     setData(respo);
//     frm.values.studentId = data.studentId;
//   } catch (error) {
//     console.log(error);
//     setErrorMsg(error);
//   }
// };
// getData();
// }
