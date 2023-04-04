import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const [empdata, setEmpdata] = useState([]);
  const { empid } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/employees/" + empid)
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        // console.log(resp);
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [""]);

  return (
    <div className="card" style={{ textAlign: "left" }}>
      <div className="card-tittle">
        <h2>Employeee Create</h2>
      </div>
      <div className="card-body"></div>
      {empdata && (
        <div>
          <h2>
            The Employee name is: {empdata.name} ({empdata.id})
          </h2>
          <h3>Contact Details:</h3>
          <h5>phone: {empdata.phone}</h5>
          <h5>email: {empdata.email}</h5>
          <Link to="/" className="btn btn-danger">
            Back to Listing
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmpDetails;
