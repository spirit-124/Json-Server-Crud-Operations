import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone, active };

    fetch("http://localhost:8000/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((response) => alert("Saved Successfully"), navigate("/"))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="row ">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-tittle">
              <h2>Employeee Create</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      value={id}
                      disabled="disabled"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      value={name}
                      required
                      onMouseDown={(e) => setValidation(true)}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                    {name.length === 0 && validation && (
                      <span className="text-danger">Enter Your name</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input
                      value={active}
                      onChange={(e) => setActive(e.target.checked)}
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Is Active</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <Link
                      to="/"
                      rel="stylesheet"
                      href=""
                      className="btn btn-danger"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpCreate;
