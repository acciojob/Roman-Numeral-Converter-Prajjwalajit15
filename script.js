function convertToRoman(num) {
  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (const [symbol, value] of romanSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

function convertNumber() {
  const numberInput = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");
  
  if (!isNaN(numberInput) && Number.isInteger(Number(numberInput))) {
    const number = parseInt(numberInput, 10);
    const romanNumeral = convertToRoman(number);
    resultDiv.textContent = romanNumeral;
  } else {
    resultDiv.textContent = "Invalid input. Please enter a valid integer.";
  }
}
