const game = document.querySelectorAll(".game");
const question = game[0];
const answer = game[1];
const correct = document.getElementById("correctbtn4");
const wrong = document.querySelectorAll(".wrongbtn4");

const createTicketDomQUS = (id, qus) => {
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.id = id;
  ticket.innerHTML = `<h1>${qus}</h1>`;
  return ticket;
};

const createTicketDomANS = (id, ans) => {
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.id = id;
  ticket.innerHTML = `<p>D-${ans}</p>`;
  return ticket;
};

// http://localhost:8080/api/level4

let FirstQus = [];
let FirstAns = [];
(async function () {
  try {
    const postqus = await fetch("http://localhost:8080/api/level4");
    FirstQus = await postqus.json();

    const postans = await fetch("http://localhost:8080/api/level4");
    FirstAns = await postans.json();

    FirstQus.data.forEach((task) => {
      question.appendChild(createTicketDomQUS(task.id, task.qus));
    });

    FirstAns.data.forEach((task) => {
      answer.appendChild(createTicketDomANS(task.id, task.ans));
    });
  } catch (err) {
    console.error(err.message);
  }
})(FirstQus, FirstAns, createTicketDomQUS, createTicketDomANS);

correct.addEventListener("click", function () {
  window.location.href = "../level5/level5.html";
});

wrong.forEach((button) => {
  button.addEventListener("click", function () {
    // Redirect to another HTML page
    window.location.href = "../loser.html";
  });
});
