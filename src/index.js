function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f92fe2190a73t0c3474809d37ba10o1b";
  let context =
    "You are a Persian poem expert. Generate a 4-line translated Persian poem in to Englishusing ONLY basic HTML. Separate each line with <br />. DO NOT use markdown. DO NOT wrap the response in ``` or ```html. Do NOT include a title. Sign the poem with 'SheCodes AI' inside a <strong> element at the end."
    let prompt = `User instructions: Generate a Persian poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Persian poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);