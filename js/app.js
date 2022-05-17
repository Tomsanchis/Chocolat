const melange = (str) => {
  let m = str.split("").sort(() => {
    return Math.random() - Math.random();
  });
  return m.join("");
};
console.log(melange("Chocolat"));
