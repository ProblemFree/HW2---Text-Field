let table;

let inputButton;
let inputBox;

function preload() {
  table = loadTable("HW2---text-csv/texts.csv", "csv");
  console.log(table);
  console.log(table.columns);
}

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
  inputText = inputBox.value(); 
  if (inputText != 0 && inputText != "Write your anxious thoughts here") {
    console.log("Text Submitted : " + inputText); // log text on console

    console.log(table.columns);

    let newRow = table.addRow();
    let newRowIndex = table.getRowCount() - 1;
    newRow.setString(inputText);

    console.log(table);

    inputBox.value('Write your anxious thoughts here'); // reset input field
  } else {
    console.log("Can not submit an empty text")
  }
}
