function bmiCalculator(weight,height){
    return weight/(height*height);
}

let weight = 70;
let height = 1.8;

let bmi = bmiCalculator(weight,height);

if(bmi<18.5)
console.log("The person is Underweight");

if(bmi>=18.5 && bmi<=24.9)
console.log("The person is Normal weight");

if(bmi>=25 && bmi<=29.9)
console.log("The person is Overweight");

if(bmi>30)
console.log("The person is Obese");

