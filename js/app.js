const id = document.getElementById("advice-id");
const div = document.getElementById("div");
const btn = document.getElementById("btn");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      div.innerHTML = "''" + data.slip.advice + "''";
    })
    .catch((err) => {
      div.innerHTML = err.message;
    });
};

btn.addEventListener("click", getAdvice);
