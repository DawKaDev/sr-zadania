function useArrayPosition(element, array) {
  let isFirst = false;
  let isLast = false;
  let position = 0;

  const elementPosition = array.indexOf(element);
  const arrayLength = array.length;

  if(elementPosition === 0) {
    isFirst = true;
  }
  if(elementPosition === arrayLength - 1) {
    isLast = true;
  }

  position = elementPosition;

  return [
    isFirst,
    isLast,
    position
  ]
}

export default useArrayPosition;