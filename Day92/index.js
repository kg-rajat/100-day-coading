//Constants for tag options
const tagOptions = ["p","h1","h3","h4","h5","h6", "span"];

//Get Dom elements
const optionsContainer = document.querySelector(".options");
const outputContainer = document.querySelector(".output");
const tagsSelect = document.getElementById("tags");
const paragraphsSlider =document.getElementById("paragraphs");
const wordsSlider = document.getElementById("words");
const paragraphsValue = document.getElementById("paragraphsValue");
const wordsValue = document.getElementsById("wordsValue");

//Create Options UI
function createOptonsUI() {
  //With tag options, fill up the <select> element.
  tagOptions.forEach((tag)=>{
    const option = document.createElement("option");
    option.value= tag;
    option.textContent =`<${tag}`;
    tagsSelect.appendChild(option);
  });
  //Event listeners for sliders
  paragraphsSlider.addEventListener("input",updateParagraphsValue);
  wordsSlider.adde
}
