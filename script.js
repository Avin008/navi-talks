const translateBtn = document.querySelector("#translate-btn");
const displayOutput = document.querySelector("#output-box");
const input = document.querySelector("#input-box");

translateBtn.addEventListener("click", function () {
  let str = input.value;
  let url = `	https://api.funtranslations.com/translate/navi.json?text=${str}`;
  getTranslation(url);
});

function getTranslation(url) {
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      showOutput(data.contents.translated);
    })
    .catch((err) => {
      showOutput("Seems like server is down. please try after some time.");
    });
}

function showOutput(message) {
  displayOutput.value = message;
}
