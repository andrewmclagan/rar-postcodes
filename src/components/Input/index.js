import React from "react";
import Geosuggest from "react-geosuggest";
import latlng from "../../lib/baseLatLng";

const Input = ({ onSelect }) => (
  <Geosuggest
    country="au"
    location={new google.maps.LatLng(latlng[0], latlng[1])}
    radius="30"
    placeholder="Check my suburb..."
    onSuggestSelect={onSelect}
    autoActivateFirstSuggest={true}
    autoComplete="false"
  />
);

export default Input;
