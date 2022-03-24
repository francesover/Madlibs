// 1. Use the id-selector to get your inputs' and the output element from the DOM
// for each input, I'll need to repeat the following
const inputOne = document.querySelector(`#one`);
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);
const inputEleven = document.querySelector(`#eleven`);
const output = document.querySelector(`.output`);
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} lived in a small town named ${inputTwo.value} that was very
  ${inputThree.value}. ${inputOne.value} loved ${inputFour.value}. One day, a dog named ${inputFive.value} walked up.
  The dog was very ${inputSix.value} and had ${inputSeven.value} ${inputEight.value}.
  Then the dog ${inputNine.value} and walked  away. ${`inputOne.value`} laughed ${`inputTen.value`} and started
  ${`inputEleven.value`}.`
  output.innerHTML = madlib;
}

  console.log(generateTemplate);
