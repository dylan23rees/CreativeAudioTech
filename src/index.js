import "./styles.css";
import * as Tone from "tone";

let synth = new Tone.MonoSynth().toDestination();

synth.volume.value = -12;

let timer = setInterval(myTimer, 1000); // declare a variable, assign the setInterval function supplying myTimer as the callback with a 1 second interval
function myTimer() {
  let d = new Date();
  document.getElementById("display").innerHTML = d.toLocaleTimeString();
}

function playSynth(event) {
  let buttonID = event.target.id;
  console.log(buttonID);
  switch (buttonID) {
    case "button1":
      synth.triggerAttackRelease("C1", "1.5");
      break;
    case "button2":
      synth.triggerAttackRelease("C2", "1.5");
      break;
    case "button3":
      synth.triggerAttackRelease("C3", "1.5");
      break;

    default:
      break;
  }
}

document.getElementById("button1").addEventListener("click", playSynth);
document.getElementById("button2").addEventListener("click", playSynth);
document.getElementById("button3").addEventListener("click", playSynth);
