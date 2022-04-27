module.exports = {
  add: function (number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number")
      return new Error(
        "Os valores fornecidos não são válidos (deve ser do tipo number)"
      );
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);

    return parseInt(num1+num2);
  },
  power: function(number1,number2){
    if(typeof number1 !== "number" || typeof number2!== "number") return new Error("Os valores fornecidos não são válidos (devem ser do tipo number)");
    const num1 = parseInt(number1)
    const num2 = parseInt(number2)

    return parseInt(Math.pow(num1,num2))
  }
};
