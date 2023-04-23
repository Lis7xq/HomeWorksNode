function add(number) {
  let sum = number;
  function innerAdd(nextnumber) {
    if (nextnumber === undefined) {
      return sum;
    }
    sum += nextnumber;
    return innerAdd;
  }
  return innerAdd;
}
console.log(add(2)(5)());
