import React from "react";
import { Link } from "react-router-dom";

const EmployeeCard = props => {
  return (
    <div className="employee-card">
      <div className="card-content">
        <h2>
          Name: <span className="card-employeename">{props.employee.firstName}{props.employee.lastName}</span>
        </h2>
        <h4> Address: {props.employee.address}</h4>
        <h4> Phone: {props.employee.phone}</h4>
        <h4> Username: {props.employee.username}</h4>
        <h4> Password: {props.employee.password}</h4>
        <h4> Supervisor?: {props.employee.isSupervisor} </h4>
        <h4> Location: {props.employee.locationId} </h4>
        
        <button
          onClick={() => {
            props.deleteEmployee(props.employee.id);
          }}
          id="delete"
        >
          Delete
        </button>

        <Link to={`/employees/${props.employee.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeCard;

