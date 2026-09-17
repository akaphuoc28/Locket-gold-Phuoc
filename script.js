document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const target =
      document.querySelector(this.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


const finalChecks =
  document.querySelectorAll(".final-checklist input");

const completeMessage =
  document.getElementById("completeMessage");


function checkCompletion() {

  const completed =
    [...finalChecks].every(item => item.checked);

  completeMessage.style.display =
    completed ? "block" : "none";

}


finalChecks.forEach(item => {

  item.addEventListener(
    "change",
    checkCompletion
  );

});
