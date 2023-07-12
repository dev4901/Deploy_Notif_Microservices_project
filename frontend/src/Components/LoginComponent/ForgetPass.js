import React, { useState } from "react";
import {
  ForgetPasswordService,
  findByEmailId,
} from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import Footer from '../FooterComponent/Footer'
import NavBar from "../NavbarComponent/Nav";

function ForgetPass() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [data, setData] = useState(false);
  const [errorMSg, setErrorMsg] = useState("Sorry ! Fail to sent email...");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await findByEmailId(email);
        console.log(respons.data + "from find");
        setData(respons.data);
        if (respons.data) {
          const respons1 = await ForgetPasswordService(email);
          console.log(respons1.data + "from service");
          setData(respons1.data);
          alert(respons1.data);
          console.log(respons.data);
          navigate("/login", { replace: true });
        } else {
          alert("Oops ! Invaild Email...");
          navigate("/forgetpassword", { replace: true });
        }
        //   setTimeout(() => {
        //     setIsLoading(false);
        // toast.info("Login Successfully....", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        // }, 2000);;
      } catch (error) {
        console.log(error);
        setErrorMsg(error.response.data);
        alert(error.response.data)
        // auth.login(error.data)
        // setTimeout(() => {
        //   setIsLoading(false);
        // alert(errorMSg);
        // toast.info(error.message, { position: toast.POSITION.TOP_RIGHT });
        // }, 2000);
      }
    };
    fetchData();
    console.log(errorMSg);
  };
  return (
    <>
        <NavBar/>
    <div className='loginbg'>
      <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
      <div className="card text-center" style={{ width: "400px",height:"350px" }}>
        <div className="card-header h5 text-white bg-primary">
          Password Reset
        </div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your email address and we'll send you an email with
            instructions to reset your password.
          </p>
          <div className="form-outline">
            <input id="typeEmail" type="email"
          name="email"
          placeholder="abc@gmail.com"
          onChange={(e) => {
            handleEmail(e);
          }}
          required
          className="form-control my-3" />
            
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Reset password
          </button>
          <div className="d-flex justify-content-between mt-4">
            <a className="" href="/login">
              Login
            </a>
            <a className="" href="/signup">
              Register
            </a>
          </div>
        </div>
      </div>
          </form>
      </div>
          </div>
          <Footer/>
    </>
  );
}

export default ForgetPass;

{/* <form onSubmit={handleSubmit}>
  <input
    type="email"
    name="email"
    placeholder="abc@gmail.com"
    onChange={(e) => {
      handleEmail(e);
    }}
    required
  ></input>
  <button type="submit">Send Mail</button>
</form> */}