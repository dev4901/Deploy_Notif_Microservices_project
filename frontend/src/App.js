import { Navigate, Route, Routes, useNavigate} from "react-router-dom";
import "./App.css";
import NavBar from './Components/NavbarComponent/Nav'
import Home from "./Components/BodyComponent/Home";
import DashBoard from "./Components/DashBoardComponent/DashBoard";
import AddStudent from "./Components/ServicesComponent/EmailServiceImpl/AddStudent";
import ViewStudent from "./Components/ServicesComponent/EmailServiceImpl/ViewStudent";
import UpdateStudent from "./Components/ServicesComponent/EmailServiceImpl/UpdateStudent";
import DeleteStudent from "./Components/ServicesComponent/EmailServiceImpl/DeleteStudent";
import ServicesMain from "./Components/ServicesComponent/ServicesMain";
import EmailService from "./Components/ServicesComponent/EmailServiceImpl/EmailServiceMain";
import AboutUs from "./Components/AboutUsComponent/AboutUs";
import ContactUs from "./Components/ContactUSComponent/ContactUs";
import Login from "./Components/LoginComponent/Login";
import SignUp from "./Components/SignUpComponent/SignUp";
import SmsServiceMain from "./Components/ServicesComponent/SmsServiceImpl/SmsServiceMain";
import AddPatient from "./Components/ServicesComponent/SmsServiceImpl/AddPatient";
import ViewPatient from "./Components/ServicesComponent/SmsServiceImpl/ViewPatient";
import UpdatePatient from "./Components/ServicesComponent/SmsServiceImpl/UpdatePatient";
import DeletePatient from "./Components/ServicesComponent/SmsServiceImpl/DeletePatient";
import PnServiceMain from "./Components/ServicesComponent/PnServiceImpl/PnServiceMain";
import ViewCustomer from "./Components/ServicesComponent/PnServiceImpl/ViewCustomer";
import AddCustomer from "./Components/ServicesComponent/PnServiceImpl/AddCustomer";
import UpdateCustomer from "./Components/ServicesComponent/PnServiceImpl/UpdateCustomer";
import DeleteCustomer from "./Components/ServicesComponent/PnServiceImpl/DeleteCustomer";
import { useState } from "react";
import ErrorPage from "./Components/ErrorComponent/ErrorPage";
import AuthProvider from "./Components/AuthComponent/Auth";
import RequiredAuth from "./Components/AuthComponent/RequiredAuth";
import ForgetPass from "./Components/LoginComponent/ForgetPass";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<DashBoard />}></Route>
       
        <Route  exact path="services" element={<RequiredAuth> <ServicesMain /></RequiredAuth>}/>
        
          <Route exact  path="/services/emailservice" element={ <RequiredAuth><EmailService /></RequiredAuth>}>
              <Route exact path="/services/emailservice/addstudent" element={<AddStudent />} />
              <Route index   element={<ViewStudent />} />
              <Route path="updatestudent" element={<UpdateStudent />} />
              <Route path="deletestudent" element={<DeleteStudent />} />
          </Route>
          <Route path="/services/smsservice" element={<RequiredAuth><SmsServiceMain /></RequiredAuth>} >
              <Route exact path="/services/smsservice/addpatient" element={<AddPatient />} />
              <Route index   element={<ViewPatient />} />
              <Route path="updatepatient" element={<UpdatePatient />} />
              <Route path="deletepatient" element={<DeletePatient />} />
            </Route>
          <Route path="/services/pushnotificationservice" element={<RequiredAuth><PnServiceMain /></RequiredAuth>}>
          <Route exact path="/services/pushnotificationservice/addcustomer" element={<AddCustomer />} />
              <Route index   element={<ViewCustomer />} />
              <Route path="updatecustomer" element={<UpdateCustomer />} />
              <Route path="deletecustomer" element={<DeleteCustomer />} />
            </Route>
        
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="forgetpassword" element={<ForgetPass />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
