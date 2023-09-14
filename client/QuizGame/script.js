const game = document.querySelectorAll(".game");
const question = game[0];
const answer = game[1];
const question2 = game[2];
const answer2 = game[3];
const question3 = game[4];
const answer3 = game[5];
const question4 = game[6];
const answer4 = game[7];
const question5 = game[8];
const answer5 = game[9];

const correct1 = document.getElementById("correctbtn1");
const correct2 = document.getElementById("correctbtn2");
const correct3 = document.getElementById("correctbtn3");
const correct4 = document.getElementById("correctbtn4");
const correct5 = document.getElementById("correctbtn5");

const wrong1 = document.querySelectorAll(".wrongbtn1");
const wrong2 = document.querySelectorAll(".wrongbtn2");
const wrong3 = document.querySelectorAll(".wrongbtn3");
const wrong4 = document.querySelectorAll(".wrongbtn4");
const wrong5 = document.querySelectorAll(".wrongbtn5");

const Div1 = document.getElementById("container1");
const Div2 = document.getElementById("container2");
const Div3 = document.getElementById("container3");
const Div4 = document.getElementById("container4");
const Div5 = document.getElementById("container5");

const createTicketDomQUS = (id, qus) => {
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.id = id;
  ticket.innerHTML = `<h1>${qus}</h1>`;
  return ticket;
};

const createTicketDomANS = (id, ans1, ans2, ans3, ans4) => {
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.id = id;
  ticket.innerHTML = `<p>A-${ans1}</p> <p>B-${ans2}</p> <p>C-${ans3}</p> <p>D-${ans4}</p>`;
  return ticket;
};

// http://localhost:8080/api/level1

let FirstQus = [];
let FirstAns = [];
(async function () {
  try {
    const postqus = await fetch("http://localhost:8080/api/level1");
    FirstQus = await postqus.json();

    const postans = await fetch("http://localhost:8080/api/level1");
    FirstAns = await postans.json();

    FirstQus.data.forEach((task) => {
      question.appendChild(createTicketDomQUS(task.id, task.qus));
    });

    FirstAns.data.forEach((task) => {
      answer.appendChild(
        createTicketDomANS(
          task.id,
          task.ans1,
          task.ans2,
          task.ans3,
          task.ans4,
          task.ans5
        )
      );
    });
  } catch (err) {
    console.error(err.message);
  }
})(FirstQus, FirstAns, createTicketDomQUS, createTicketDomANS);

correct1.addEventListener("click", async function () {
  if ((Div1.style.display = "block")) {
    Div2.style.display = "block";
    Div1.style.display = "none";

    try {
      // Delete the "http://localhost:8080/api/level1" data
      await fetch("http://localhost:8080/api/level1", { method: "DELETE" });

      // Fetch and display the "http://localhost:8080/api/level2" data
      const response = await fetch("http://localhost:8080/api/level2");
      const level2Data = await response.json();

      level2Data.data.forEach((task) => {
        question2.appendChild(createTicketDomQUS(task.id, task.qus));
      });

      level2Data.data.forEach((task) => {
        answer2.appendChild(
          createTicketDomANS(
            task.id,
            task.ans1,
            task.ans2,
            task.ans3,
            task.ans4
          )
        );
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  correct2.addEventListener("click", async function () {
    if ((Div2.style.display = "block")) {
      Div1.style.display = "none";
      Div2.style.display = "none";
      Div3.style.display = "block";

      try {
        // Delete the "http://localhost:8080/api/level2" data
        await fetch("http://localhost:8080/api/level2", { method: "DELETE" });

        // Fetch and display the "http://localhost:8080/api/level3" data
        const response = await fetch("http://localhost:8080/api/level3");
        const level3Data = await response.json();

        level3Data.data.forEach((task) => {
          question3.appendChild(createTicketDomQUS(task.id, task.qus));
        });

        level3Data.data.forEach((task) => {
          answer3.appendChild(
            createTicketDomANS(
              task.id,
              task.ans1,
              task.ans2,
              task.ans3,
              task.ans4
            )
          );
        });
      } catch (err) {
        console.error(err.message);
      }
    }

    correct3.addEventListener("click", async function () {
      if ((Div3.style.display = "block")) {
        Div1.style.display = "none";
        Div2.style.display = "none";
        Div3.style.display = "none";
        Div4.style.display = "block";
        try {
          // Delete the "http://localhost:8080/api/level3" data
          await fetch("http://localhost:8080/api/level3", { method: "DELETE" });

          // Fetch and display the "http://localhost:8080/api/level4" data
          const response = await fetch("http://localhost:8080/api/level4");
          const level4Data = await response.json();

          level4Data.data.forEach((task) => {
            question4.appendChild(createTicketDomQUS(task.id, task.qus));
          });

          level4Data.data.forEach((task) => {
            answer4.appendChild(
              createTicketDomANS(
                task.id,
                task.ans1,
                task.ans2,
                task.ans3,
                task.ans4
              )
            );
          });
        } catch (err) {
          console.error(err.message);
        }
      }
      correct4.addEventListener("click", async function () {
        if ((Div4.style.display = "block")) {
          Div1.style.display = "none";
          Div2.style.display = "none";
          Div3.style.display = "none";
          Div4.style.display = "none";
          Div5.style.display = "block";
          try {
            // Delete the "http://localhost:8080/api/level4" data
            await fetch("http://localhost:8080/api/level4", {
              method: "DELETE",
            });

            // Fetch and display the "http://localhost:8080/api/level5" data
            const response = await fetch("http://localhost:8080/api/level5");
            const level5Data = await response.json();

            level5Data.data.forEach((task) => {
              question5.appendChild(createTicketDomQUS(task.id, task.qus));
            });

            level5Data.data.forEach((task) => {
              answer5.appendChild(
                createTicketDomANS(
                  task.id,
                  task.ans1,
                  task.ans2,
                  task.ans3,
                  task.ans4
                )
              );
            });
          } catch (err) {
            console.error(err.message);
          }
        }
        correct5.addEventListener("click", async function () {
          window.location.href = "../result/win.html";
        });
        wrong5.forEach((button) => {
          button.addEventListener("click", function () {
            // Redirect to another HTML page
            window.location.href = "../result/loser.html";
          });
        });
      });
      wrong4.forEach((button) => {
        button.addEventListener("click", function () {
          // Redirect to another HTML page
          window.location.href = "../result/loser.html";
        });
      });
    });
    wrong3.forEach((button) => {
      button.addEventListener("click", function () {
        // Redirect to another HTML page
        window.location.href = "../result/loser.html";
      });
    });
  });
  wrong2.forEach((button) => {
    button.addEventListener("click", function () {
      // Redirect to another HTML page
      window.location.href = "../result/loser.html";
    });
  });
});

wrong1.forEach((button) => {
  button.addEventListener("click", function () {
    // Redirect to another HTML page
    window.location.href = "../result/loser.html";
  });
});

