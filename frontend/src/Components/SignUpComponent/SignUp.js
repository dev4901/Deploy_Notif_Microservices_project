import React, { useState } from "react";
import Footer from "../FooterComponent/Footer";
import NavBar from "../NavbarComponent/Nav";
import $ from "jquery";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./SignUp.css";
import { signupService } from "../../Services/AuthService";
import { useAuth } from "../AuthComponent/Auth";
import { useLocation, useNavigate } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Signup failed...");
  const [isLoading, setIsLoading] = useState(false);
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleFname = (event) => {
    event.preventDefault();
    setFname(event.target.value);
  };
  const handleLname = (event) => {
    event.preventDefault();
    setLname(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await signupService(email, password, fName, lName);
        console.log(respons);
        setData(respons);
        setTimeout(() => {
          setIsLoading(false);
          // toast.info("Login Successfully....", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
        }, 2000);
        console.log(respons);
        if (respons) {
          alert("Register successfully...");
          navigate("/login", { replace: true });
        } else {
          alert("Oops ! SignUp Failed...");
          navigate("/signup", { replace: true });
        }
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
        // auth.login(error.data)
        setTimeout(() => {
          setIsLoading(false);
          // alert(errorMSg);
          // toast.info(error.message, { position: toast.POSITION.TOP_RIGHT });
        }, 2000);
      }
    };
    fetchData();
    console.log(errorMSg);
  };

  $(document).ready(function () {
    $(".fnameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".lnameInput").keypress(function (e) {
      var regex = new RegExp("^[a-zA-Z]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
        return true;
      } else {
        e.preventDefault();
        $(".error").show();
        $(".error").text("Please Enter Alphabate");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
        return false;
      }
    });
    $(".pr-password1").keyup(function () {
      $("#strengthMessage1").html(checkStrength1($(".pr-password1").val()));
      setTimeout(() => {
        $("#strengthMessage1").removeClass();
        $("#strengthMessage1").text("");
      }, 2000);
    });
    $(".pr-password").keyup(function () {
      $("#strengthMessage").html(checkStrength($(".pr-password").val()));
      setTimeout(() => {
        $("#strengthMessage").removeClass();
        $("#strengthMessage").text("");
      }, 2000);
    });
    function checkStrength(password) {
      var strength = 0;
      if (password.length < 6) {
        $("#strengthMessage").removeClass();
        $("#strengthMessage").addClass("Short");
        return "Too short";
      }
      if (password.length > 7) strength += 1;
      // If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
      // If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
        strength += 1;
      // If it has one special character, increase strength value.
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
      // If it has two special characters, increase strength value.
      if (
        password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)
      )
        strength += 1;
      // Calculated strength value, we can return messages
      // If value is less than 2
      if (strength < 2) {
        $("#strengthMessage").removeClass();
        $("#strengthMessage").addClass("Weak");
        return "Weak";
      } else if (strength == 2) {
        $("#strengthMessage").removeClass();
        $("#strengthMessage").addClass("Good");
        return "Good";
      } else {
        $("#strengthMessage").removeClass();
        $("#strengthMessage").addClass("Strong");
        return "Strong";
      }
    }
    function checkStrength1(password) {
      var strength = 0;
      if (password.length < 6) {
        $("#strengthMessage1").removeClass();
        $("#strengthMessage1").addClass("Short");
        return "Too short";
      }
      if (password.length > 7) strength += 1;
      // If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
      // If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
        strength += 1;
      // If it has one special character, increase strength value.
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
      // If it has two special characters, increase strength value.
      if (
        password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)
      )
        strength += 1;
      // Calculated strength value, we can return messages
      // If value is less than 2
      if (strength < 2) {
        $("#strengthMessage1").removeClass();
        $("#strengthMessage1").addClass("Weak");
        return "Weak";
      } else if (strength == 2) {
        $("#strengthMessage1").removeClass();
        $("#strengthMessage1").addClass("Good");
        return "Good";
      } else {
        $("#strengthMessage1").removeClass();
        $("#strengthMessage1").addClass("Strong");
        return "Strong";
      }
    }
  });

  return (
    <>
      <NavBar />
      <div className="signupbg">
        <MDBContainer
          fluid
          className="p-4 background-radial-gradient overflow-hidden"
        >
          <MDBRow>
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <div className="wrapper">
                <h1
                  className="typing-demo my-5 display-3 fw-bold ls-tight px-3"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  Notifier.com <br />
                  <span
                    style={{ color: "hsl(218, 81%, 75%)", fontSize: "30px" }}
                  >
                    Innovative Solutions Builder
                  </span>
                </h1>
              </div>

              <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
                We are providing unique solution for information delivering that
                easy to use and more suitable for any types information. So
                don't waste your time and{" "}
                <span className="signUpText">Sign Up Now...</span>
              </p>
            </MDBCol>

            <MDBCol md="6" className="position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <form onSubmit={handleSignUp}>
                    <h3 className="mb-5">Sign Up</h3>
                    <MDBRow>
                      <h6 className="error"></h6>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          className="fnameInput"
                          placeholder="First name"
                          id="form1"
                          name="fName"
                          onChange={(e) => {
                            handleFname(e);
                          }}
                          type="text"
                          required
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          className="lnameInput"
                          placeholder="Last name"
                          id="form2"
                          name="lName"
                          onChange={(e) => {
                            handleLname(e);
                          }}
                          type="text"
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Email"
                      id="form3"
                      name="email"
                      onChange={(e) => {
                        handleEmail(e);
                      }}
                      type="email"
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      className="pr-password"
                      placeholder="Password"
                      id="form4"
                      name="password"
                      type="password"
                      onChange={(e) => {
                        handlePassword(e);
                      }}
                      required
                    />
                    <div id="strengthMessage"></div>
                    <MDBInput
                      wrapperClass="mb-4"
                      className="pr-password1"
                      placeholder="Confirm Password"
                      id="form4"
                      name="confirmedpassword"
                      type="password"
                      required
                    />
                    <div id="strengthMessage1"></div>
                    <div className="d-flex justify-content-center mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="I have read and agree to the terms."
                        required
                      />
                    </div>

                    <button
                      className="w-100 mb-4 btn btn-primary"
                      type="submit"
                      size="md"
                    >
                      sign up
                    </button>
                  </form>
                  <div className="text-center">
                    <p>or sign up with:</p>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i class="fa fa-google" aria-hidden="true"></i>
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
