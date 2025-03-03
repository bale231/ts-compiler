document.addEventListener("DOMContentLoaded", () => {
  const inputN1 = document.getElementById("n1") as HTMLInputElement | null;
  const inputN2 = document.getElementById("n2") as HTMLInputElement | null;
  const button = document.getElementById("add") as HTMLButtonElement | null;
  const result = document.getElementById("result") as HTMLDivElement | null;

  if (!inputN1 || !inputN2 || !button || !result) {
    console.error("Uno o più elementi non esistono nel DOM.");
    return;
  }

  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  function printResult(num: number) {
    if (result === null) {
      return;
    }
    result.innerHTML = `Result is: <span class="fw-bold num-result">${num}</span>.`;
  }

  button.addEventListener("click", () => {
    const inputValue1 = Number(inputN1.value.trim());
    const inputValue2 = Number(inputN2.value.trim());

    if (isNaN(inputValue1) || isNaN(inputValue2)) {
      alert("Inserisci numeri validi!");
      return;
    }

    printResult(add(inputValue1, inputValue2));
  });
});
