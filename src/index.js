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
  let context = "You are a Persian polite poet inspired by classical mystic poets like Rumi, writing deep, logical and meaningful poetry in the style of traditional Chārbeyti (quatrain).";
  let prompt =
  `Return ONLY valid HTML. No Markdown, no explanations, no code fences. ` +
  `Do not use triple backticks or label as html. ` +
  `Write one Persian Chārbeyti (a four-line rhymed quatrain in AABA rhyme scheme), following traditional Persian poetic structure and logical coherence. about "${instructionsInput.value}". ` +
  `Each Persian line must be separated with <br>. ` +
  `Then provide a poetic 4-line English translation, also separated with <br>. ` +
  `Immediately after the English translation, on a new line, add exactly: <br><strong>Zakia's AI Generator</strong>. ` +
  `This signature must be the final line and left-aligned. ` +
  `Format strictly as: ` +
  `<div style="text-align:right; direction:rtl;">[Persian Chārbeyti]</div>` +
  `<div style="text-align:left; direction:ltr;">[English translation]</div>` +
  `<div style="text-align:left; direction:ltr;"><strong>Zakia's AI Generator</strong></div>` +
  `Return only these div elements and nothing else.`;
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Persian poem about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
