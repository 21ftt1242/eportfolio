 //localStorage

 localStorage.setItem('story-1a', 'Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion." I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked like this: <br> <img src="images/story1-img2.png">');
 localStorage.setItem('story-1b', 'I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them. But they answered: "Frighten? Why should any one be frightened by a hat?" My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant. But since the grown-ups were not able to understand it, I made another drawing: I drew the inside of the boa constrictor, so that the grown-ups could see it clearly. They always need to have things explained. My Drawing Number Two looked like this:');

 document.getElementById("story1").innerHTML = localStorage.getItem("story-1a");


  // Declare variables
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var stopButton = document.getElementById("stop-button");
var voiceSelect = document.getElementById("voice-select");
var synth = window.speechSynthesis;

// Get Story text
var text = document.getElementById("story1").innerText;

function nextPage() {
document.getElementById("story1").innerHTML = localStorage.getItem("story-1b");
console.log(text);
}

// Get speak text
let pageOne = new SpeechSynthesisUtterance(text);

// Array of voices
let voices = [];

// ----------Call Populate Voice function----------
populateVoices();

// ----------Populate Voice function----------
function populateVoices() {
  voices = synth.getVoices();
  // Loop through voices and create option for each one
  voices.forEach(voice => {
  
    // Create option element
    let listItem = document.createElement('option');
  
    // Fill option with voice and language
    listItem.textContent = voice.name + '('+ voice.lang +')';

    // Set needed listItem attributes
    listItem.setAttribute('data-lang', voice.lang);
    listItem.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(listItem);
  });
};

if(synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoices;
}

// ----------Play Button----------

function playText(story1) {
  let selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

  voices.forEach((voice) => {
    if(voice.name === selectedVoice) {
    pageOne.voice = voice;
      }
    });

  synth.speak(pageOne);

  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
};

// ----------Pause Button----------

function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}

// ----------Stop Button----------

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}

var inputVoice = document.getElementById("voice-select")
    
  if (localStorage['voice-select']) {
    inputVoice.value = localStorage['voice-select'];
  }
  
function saveVoice() {
 localStorage['voice-select'] = inputVoice.value;
}

function resetVoice() {
  voiceSelect.selectedIndex = 0;
  localStorage.removeItem('voice-select');
}