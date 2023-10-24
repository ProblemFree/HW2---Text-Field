

let inputButton;
let inputBox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  inputButton = createButton('Share');
  inputButton.position(width * 0.4, height * 0.8 + 10);
  inputButton.size(width / 5, height / 20);
  inputButton.mousePressed(submitText);

  inputBox = createInput("Write your anxious thoughts here");
  inputBox.position(width * 0.2 , height * 0.8 - 100);
  inputBox.size(width * 0.6, height / 20);
}

// Get user input and send it to the ai
async function submitText() {
  // Check if text is present, and if so submit. If not then send error to console  
  if (text != 0) {
    console.log("Text Submitted : " + inputBox.value()); // log text on console

    

    inputBox.value('Write your anxious thoughts here'); // reset input field
  } else {
    console.log("Can not submit an empty text")
  }
}
