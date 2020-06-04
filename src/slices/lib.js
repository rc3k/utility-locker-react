export const arrayToObject = (array, key) => {
  return array.reduce((accumulatorObject, item) => ({ ...accumulatorObject, [item[key]]: item }), {})
}

export const groupArrayKeysByProperty = (array, property, key) => {
  return array.reduce(
    (accumulatorArray, item) => (
      { ...accumulatorArray, [item[property]]: [...new Set([...accumulatorArray[item[property]] || [], ...[item[key]]])] }
    ),
    {},
  );
}

export const updateCollectionItems = (items, payload, key) => {
  return {
    byId: { ...items.byId, ...arrayToObject(payload, key) },
    allIds: [...new Set([...payload.map(item => item[key]), ...items.allIds])]
  };
}
