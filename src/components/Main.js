import React from "react";

export default function Main(props) {
  return (
    <section className="main-section">
      <img src={`../images/${props.item.imageUrl}`} className="main-image" />
      <div className="main-info">
        <div className="main-header">
          <img src="../images/location.png"  className="main-location-image"/>
          <span>{props.item.location}</span>
          <a href={props.item.googleMapsUrl} target="_blank" className="main-google-map-link">
            View On google map
          </a>
          <h1>{props.item.title}</h1>
        </div>

        <h3>{props.item.startDate} - {props.item.endDate} </h3>
        <p>{props.item.description}</p>
      </div>
    </section>
  );
}
