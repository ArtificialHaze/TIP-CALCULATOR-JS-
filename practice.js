const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpanElement = document.getElementById("total");

const calculateTotal = () => {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpanElement.innerText = totalValue.toFixed(2);
};

btn.addEventListener("click", calculateTotal);
