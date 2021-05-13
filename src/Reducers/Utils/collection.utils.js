export const reducedCollection = (totalCollection) => {
  const reducedArray = totalCollection.reduce((accumulator, currentArray) => {
    accumulator[currentArray.val.title] = {
      id: currentArray.id,
      title: currentArray.val.title,
      items: currentArray.val.items,
    };
    return accumulator;
  }, {});
  return reducedArray;
};
