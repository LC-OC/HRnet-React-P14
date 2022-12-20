import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <div>
      <Header />
      <div className="main_error">
        <h1>Are you lost ? This page doesn't exist !</h1>
        <p>
          <Link className="link-error" to="/create-employee">
            Create a new employee
          </Link>{" "}
          or{" "}
          <Link className="link-error" to="/employee-list">
            go to the employees list
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Error404;
