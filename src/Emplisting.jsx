import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Emplisting = () => {
  const [empdata, setEmpdata] = useState([]);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const removeFunction = (id) => {
    if (window.confirm("Are you sure you want to remove")) {
      fetch("http://localhost:8000/employees/" + id, {
        method: "DELETE",
      })
        .then(
          (response) => alert("Removed Successfully"),
          window.location.reload()
        )
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employees")
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
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-tittle">
          <h2>Employee Listing..</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success ">
              {" "}
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Text</td>
              </tr>
            </thead>
            <tbody>
              {empdata.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <a
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      onClick={() => {
                        removeFunction(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Remove
                    </a>
                    <a
                      className="btn btn-primary"
                      onClick={() => {
                        LoadDetail(item.id);
                      }}
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Emplisting;
