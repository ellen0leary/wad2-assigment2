import React from "react";
import "./peopleDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.biography}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birth Place
        </li>
        <li key="rut" className="list-group-item ">
          {person.place_of_birth}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rdv" className="list-group-item ">
          {person.birthday}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          AKA
        </li>
        {person.also_known_as.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {/* {person.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li> */}
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {/* {person.production_countries.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li> */}
        ))}
      </ul>
      
    </>
  );
};
