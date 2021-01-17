import React from "react";
import Person from "../personCard/";
import "./personList.css";

const PersonList = ({movies, action}) => {
  const personCards = movies.map(m => (
    <Person key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{personCards}</div>;
};

export default PersonList;