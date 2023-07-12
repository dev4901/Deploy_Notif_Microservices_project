import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../NavbarComponent/Nav";
import Footer from "../FooterComponent/Footer";
import Table from "react-bootstrap/Table";
import "./DashBoard.css";
import { callCountEmailService } from "../../Services/CallCountEmail";
import { callCountSmsService } from "../../Services/CallCountSms";
import { callCountPnService } from "../../Services/CallCountPn";
function DashBoard() {
  const [data, setData] = useState({});
  const [errorMSg, setErrorMsg] = useState(
    "Sorry ! Something Went to wrong..."
  );
  const [dataSms, setDataSms] = useState({});
  const [errorSmsMSg, setErrorSmsMsg] = useState(
    "Sorry ! Something Went to wrong..."
  );
  const [dataPn, setDataPn] = useState({});
  const [errorPnMSg, setErrorPnMsg] = useState(
    "Sorry ! Something Went to wrong..."
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respons = await callCountEmailService();

        console.log(respons);

        setData(respons);
        console.log(data);
      } catch (error) {
        setErrorMsg(error);
        alert(errorMSg);
      }
    };
    fetchData();
    const fetchDataSms = async () => {
      try {
        const respons = await callCountSmsService();

        console.log(respons);

        setDataSms(respons);
        console.log(dataSms);
      } catch (error) {
        setErrorSmsMsg(error);
        alert(errorSmsMSg);
      }
    };
    fetchDataSms();
    const fetchDataPn = async () => {
      try {
        const respons = await callCountPnService();

        console.log(respons);

        setDataPn(respons);
        console.log(dataPn);
      } catch (error) {
        setErrorPnMsg(error);
        alert(errorPnMSg);
      }
    };
    fetchDataPn();
  }, []);
  return (
    <>
      <NavBar />
      <div className="dashboardbg">
        <Container fuide>
          <div>
            <h1 className="text-center">DashBoard</h1>
          </div>
          <div>
            <br></br>
            <hr></hr>
            <br></br>

            <Table striped bordered hover responsive variant="light" size="sm" className="dashboardTable" style={{border:"black"}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th colSpan={2}>Email Service</th>
                  <th colSpan={2}>SMS Service</th>
                  <th colSpan={2}>Push Notification Service</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Success</th>
                  <th>Failure</th>
                  <th>Success</th>
                  <th>Failure</th>
                  <th>Success</th>
                  <th>Failure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{data.success}</td>
                  <td>{data.failure}</td>
                  <td>{dataSms.success}</td>
                  <td>{dataSms.failure}</td>
                  <td>{dataPn.success}</td>
                  <td>{dataPn.failure}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
