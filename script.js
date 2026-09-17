let currentStep = 0;

const screens = [
  "welcome",
  "step1",
  "step2"
];


function showScreen(index) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });


  const screen =
    document.getElementById(screens[index]);

  if (!screen) return;


  screen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function startGuide() {

  currentStep = 1;

  showScreen(currentStep);

}


function nextStep() {

  if (currentStep >= screens.length - 1)
    return;


  currentStep++;

  showScreen(currentStep);

}


function previousStep() {

  if (currentStep <= 0)
    return;


  currentStep--;

  showScreen(currentStep);

}
