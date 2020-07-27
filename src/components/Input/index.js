import React from "react";
import Geosuggest from "react-geosuggest";

const Input = ({ onSelect }) => (
  <Geosuggest
    country="au"
    location={new google.maps.LatLng(-27.469771, 153.025124)}
    radius="30"
    placeholder="Check my suburb..."
    onSuggestSelect={onSelect}
    autoActivateFirstSuggest={true}
    autocomplete="false"
  />
);

export default Input;
