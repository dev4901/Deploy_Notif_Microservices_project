import React, { useState } from "react";
import Footer from "../FooterComponent/Footer";
import NavBar from "../NavbarComponent/Nav";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";
import $ from "jquery";
import { useAuth } from "../AuthComponent/Auth";
import { useNavigate, useLocation } from "react-router-dom";
import { loginService } from "../../Services/AuthService";
import { ToastContainer, toast, error, success, info } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  const [errorMSg, setErrorMsg] = useState("Sorry ! login failed...");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectPath = location.state?.path || "/";
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await loginService(email, password);
        console.log(respons.data);
        if (respons.data) {
          setData(respons.data);
          window.localStorage.setItem("token", respons.data);
          auth.login(true);
        }

        setTimeout(() => {
          setIsLoading(false);
          // toast.info("Login Successfully....", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
        }, 2000);
        console.log(respons.data);
        console.log(redirectPath);
        if (respons.data) {
          alert("Login Successfully...");
          navigate(redirectPath, { replace: true });
        } else {
          alert("Oops ! Wrong credentails...");
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.log(error.response.data);
        setErrorMsg(error.response.data);
        // auth.login(error.data)
        setTimeout(() => {
          setIsLoading(false);
          // alert(errorMSg);
          // toast.info(error.message, { position: toast.POSITION.TOP_RIGHT });
        }, 2000);
        alert(error.response.data);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
  return (
    <>
      <NavBar />
      <div className="loginbg">
        {isLoading ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <ToastContainer />
            <MDBContainer fluid className=" h-custom">
              <h3 className="loginTitle">Log In</h3>
              <MDBRow>
                <MDBCol col="10">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </MDBCol>

                <MDBCol col="4">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <MDBBtn size="md" className="me-2">
                      {/* <MDBIcon fab icon='facebook-f' /> */}
                      <i class="fa fa-google" aria-hidden="true"></i>
                    </MDBBtn>

                    <MDBBtn size="md " className="me-2">
                      {/* <MDBIcon fab icon='facebook-f' /> */}
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </MDBBtn>

                    <MDBBtn size="md" className="me-2">
                      {/* <MDBIcon fab icon='twitter' /> */}
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </MDBBtn>

                    <MDBBtn size="md" className="me-2">
                      {/* <MDBIcon fab icon='linkedin-in' /> */}
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </MDBBtn>
                  </div>

                  <div className="divider m-3">
                    <p className="text-center fw-bold">Or</p>
                  </div>
                  <form onSubmit={handleLogIn}>
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Email address"
                      id="formControlLg"
                      type="email"
                      name="email"
                      onChange={(event) => {
                        handleEmail(event);
                      }}
                      size="lg"
                      required
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      className="pr-password"
                      placeholder="Password"
                      id="formControlLg"
                      type="password"
                      name="password"
                      onChange={(event) => {
                        handlePassword(event);
                      }}
                      size="lg"
                      required
                    />
                    <div id="strengthMessage"></div>
                    <div className="d-flex justify-content-between mb-4">
                      {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
                      <p></p>
                      <a
                        onClick={() => {
                          navigate("/forgetpassword");
                        }}
                        className="text-danger"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div className="text-center text-md-start mt-4 pt-2">
                      <MDBBtn className=" loginbtn" type="submit">
                        Login
                      </MDBBtn>

                      <p className="small fw-bold mt-2 pt-1 mb-2   accountCheckTitle">
                        Don't have an account?{" "}
                        <a href="/signup" className="link-success">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Login;
