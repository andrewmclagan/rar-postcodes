function arrayToLower(values) {
  return values.map((value) => String(value).toLowerCase());
}

export function addressComponentsSelector(suggest) {
  const components =
    suggest && suggest.gmaps && suggest.gmaps.address_components;
  return components ? components : null;
}

export function addressByComponentSelect(componentType, suggest) {
  const components = addressComponentsSelector(suggest);
  if (!components) {
    return false;
  }
  return components.find((component) => {
    return component.types.includes(componentType);
  });
}

export function postcodeSelector(suggest) {
  const component = addressByComponentSelect("postal_code", suggest);
  if (!component) {
    return null;
  }
  const postcode = parseInt(component.long_name, 10);
  return postcode || null;
}

export function suburbSelector(suggest) {
  const component = addressByComponentSelect("locality", suggest);
  const suburb = component.long_name;
  return suburb || null;
}

export function addressSelector(suggest) {
  const postcode = postcodeSelector(suggest);
  const suburb = suburbSelector(suggest);
  return `${suburb}, ${postcode}`;
}

export function deliveryAreaSelector(suggest) {
  const suburb = suburbSelector(suggest);
  const result = window.__areas.filter((area) => {
    const suburbAsLower = String(suburb).toLowerCase();
    return arrayToLower(area.suburbs).includes(suburbAsLower);
  });
  return result[0];
}

export function isValidDeliveryArea(suggest) {
  return !!deliveryAreaSelector(suggest);
}
