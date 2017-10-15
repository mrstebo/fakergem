export default collection => {
  let i, j, k;
  const result = [...collection];
  for (i = collection.length; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = result[i - 1];
    result[i - 1] = result[j];
    result[j] = k;
  }
  return result;
}
