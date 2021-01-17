import { useEffect, useState } from "react";
import {getPersonDetails} from '../api/movies-api'

const usePerson = id => {
    console.log("calling person")
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getPersonDetails(id).then(person => {
      console.log(person)
      setPerson(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default usePerson