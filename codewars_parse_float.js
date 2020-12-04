/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

const parseF = (s) => {
  if(typeof s === 'boolean' || s === undefined) {
    return null;
  }
  if(Number(s) * 0 === 0) {
    return Number(s);
  }
  return null;
}