const addItem = (array, index, string) => {
  if (index > array.length) {
    array.push(string);
    return array;
  }
  let newArray = [];
  let i = 1;
  while (i < array.length + 1) {
    if (i != index) {
      newArray.push(array[i - 1]);
    } else {
      newArray.push(string);
    }
    i++;
  }
  return newArray;
};