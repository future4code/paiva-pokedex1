import React from "react";
import CardDetails from "../../Components/CardDetails/CardDetails";
import Header from "../../Components/Header/Header";
import {useParams} from "react-router-dom"

function DetailsPage () {
  const params = useParams().id;
  return (
    <div>
      <Header title={params}/>
      <CardDetails />
    </div>
  );
}

export default DetailsPage;