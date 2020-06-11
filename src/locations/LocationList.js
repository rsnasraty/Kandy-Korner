import React, { useState, useEffect } from 'react'; 
import LocationCard from './LocationCard';
import LocationManager from "../modules/LocationManager.js"

const LocationList = (props) => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  //deletes an location from the API, THEN gets all locations again
  const deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
  };

  // got the Locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/locations/new")}}>
      Add New Location
  </button>
  </section>
    <div className="container-cards">
      {locations.map(location => <LocationCard key={location.id} location={location} deleteLocation={deleteLocation} {...props}/>)}
    </div>
    </>
  );
};
export default LocationList
