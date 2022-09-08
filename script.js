const btnSubmit = document.querySelector(".btnResult");
const btnctn = document.querySelector(".btn-container");
const btnEmail = document.querySelector(".email");
const formData = document.getElementById("form");

const btnClick = async function (e) {
  e.preventDefault()
  const payload = new FormData(formData);
  const response = await fetch(`http://mlclinic.herokuapp.com/api/hepatitis/`, {
    method: "POST",
    body: payload,
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  btnctn.style.opacity = 100;
};

formData.addEventListener("submit", btnClick);
// const formData = document.getElementById("form");

// formData.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const payload = new FormData(formData);

//   fetch("http://mlclinic.herokuapp.com/api/hepatitis/", {
//     method: "POST",
//     body: payload,
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// });

// const btnClick = function() {
//   fetch(`http://mlclinic.herokuapp.com/api/hepatitis`).then(res => res.json()).then(data => console.log(data))
// }

// const btnPwClick = async function () {
//   const resPassword = await fetch(
//     `http://mlclinic.herokuapp.com/api/subscribe`
//   );
//   console.log(resPassword);
//   // const dataEmail = await resPassword.json();
//   // console.log(dataEmail);
// };

// btnEmail.addEventListener("click", btnPwClick);
