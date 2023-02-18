const Girl = (name, age, height, weight) => {
  const sayHi = () => console.log(`hi my name is ${name}`);
  return {
    name, age, height, weight, sayHi,
  };
};

const shu = Girl('shulamite', 18, 165, 60);
console.log(shu.name);
shu.sayHi();
