import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="location-card">
      <div className="card-content">
        <h2>
          Name: <span className="card-locationname">{props.location.firstName}{props.location.lastName}</span>
        </h2>
        <h4> Address: {props.location.address}</h4>
        <h4> Phone: {props.location.phone}</h4>
        <button
          onClick={() => {
            props.deleteLocation(props.location.id);
          }}
          id="delete"
        >
          Delete
        </button>

        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;

