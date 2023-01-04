import React from "react";

//components
import Banner from "./FirstSection";
import SectionTrip from "./SectionTrip";
import PlacesTrip from "./PlacesTrip";
import Mural from "./Mural";

export default function Main() {
  return (
    <div>
      <Banner />
      <SectionTrip />
      <PlacesTrip />
      <Mural />
    </div>
  );
}
