import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PersonDetails from "../components/peopleDetails";
import PageTemplate from "../components/templatePersonPage";
import usePerson from "../hooks/usePerson";

const PeopleDetailsPage = props => {
  console.log("on details page")
  const { id } = props.match.params;
  console.log(id)
  const [person] = usePerson(id) 
  console.log(person)
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <PersonDetails person={person} />
        </PageTemplate>

      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(PeopleDetailsPage);