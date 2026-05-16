let calculation = JSON.parse(localStorage.getItem("calculation")) || "";
      document.querySelector(".calculation").innerHTML = calculation;

      function updateCalculation(value) {
        calculation += `${value}`;
        console.log(calculation);

        localStorage.setItem("calculation", JSON.stringify(calculation));

        document.querySelector(".calculation").innerHTML = calculation;
      }