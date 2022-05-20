 //localStorage

 localStorage.setItem('story-1a', 'Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion." I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked like this: <br> <img src="images/story1-img2.png">');
 localStorage.setItem('story-1b', 'I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them. But they answered: "Frighten? Why should any one be frightened by a hat?" My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant. But since the grown-ups were not able to understand it, I made another drawing: I drew the inside of the boa constrictor, so that the grown-ups could see it clearly. They always need to have things explained. My Drawing Number Two looked like this: <br> <img src="images/story1-img2.png">');
 localStorage.setItem('story-1a-m', 'Suatu ketika ketika saya berumur enam tahun, saya melihat gambar yang indah dalam sebuah buku, yang disebut Kisah Benar dari Alam, tentang hutan purba. Ia adalah gambar seekor boa constrictor dalam tindakan menelan haiwan. Berikut adalah salinan lukisan tersebut. Dalam buku itu ia berkata: "Boa constrictors menelan mangsa mereka keseluruhan, tanpa mengunyahnya. Selepas itu mereka tidak dapat bergerak, dan mereka tidur melalui enam bulan yang mereka perlukan untuk penghadaman." Saya merenung sedalam-dalamnya, tentang pengembaraan hutan. Dan selepas beberapa kerja dengan pensel warna saya berjaya membuat lukisan pertama saya. Lukisan Saya Nombor Satu. Ia kelihatan seperti ini:');
 localStorage.setItem('story-1b-m', 'Saya menunjukkan karya agung saya kepada orang dewasa, dan bertanya kepada mereka sama ada lukisan itu menakutkan mereka. Tetapi mereka menjawab: "Takut? Mengapa ada orang yang takut dengan topi?" Lukisan saya bukan gambar topi. Ia adalah gambar seekor boa constrictor sedang mencerna seekor gajah. Tetapi kerana orang dewasa tidak dapat memahaminya, saya membuat lukisan lain: Saya melukis bahagian dalam boa constrictor, supaya orang dewasa dapat melihatnya dengan jelas. Mereka sentiasa perlu menjelaskan sesuatu. Lukisan Nombor Dua Saya kelihatan seperti ini:');

// Story 1 variables
var s1_p1_en = localStorage.getItem("story-1a");
var s1_p1_mal = localStorage.getItem("story-1a-m");


  // Declare variables
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var stopButton = document.getElementById("stop-button");
var voiceSelect = document.getElementById("voice-select");
var synth = window.speechSynthesis;
var langSelect = document.getElementById("lang-select");
var text;
var pageOne;

// Current Story variables
var currentStoryEN;
var currentStoryMAL;

function storyLoad() {
  if (langSelect.value === "english") {
    document.getElementById("content1").innerHTML = s1_p1_en;
  } else if (langSelect.value === "malay") {
    document.getElementById("content1").innerHTML = s1_p1_mal;
  }
  text = document.getElementById("content1").innerText;
  pageOne = new SpeechSynthesisUtterance(text);
}


function changeLang() {
  if (langSelect.value === "english") {
    document.getElementById("content1").innerHTML = s1_p1_en;
  } else if (langSelect.value === "malay") {
    document.getElementById("content1").innerHTML = s1_p1_mal;
  }
  text = document.getElementById("content1").innerText;
  pageOne = new SpeechSynthesisUtterance(text);
}

function nextPage() {
document.getElementById("story1").innerHTML = localStorage.getItem("story-1b");
}
// Get Story text




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

function playText() {
  text = document.getElementById("content1").innerText;
  console.log(text);
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

// -----------Save Voice & Language----------
var inputVoice = document.getElementById("voice-select");
var inputLang = document.getElementById("lang-select");
    
  if (localStorage['voice-select']) {
    inputVoice.value = localStorage['voice-select'];
  }

  if (localStorage['lang-select']) {
  inputLang.value = localStorage['lang-select'];
  }

function saveVoice() {
 localStorage['voice-select'] = inputVoice.value;
 localStorage['lang-select'] = inputLang.value;
}


// -----------Reset Voice-----------
function resetVoice() {
  voiceSelect.selectedIndex = 0;
  langSelect.selectedIndex = 0;
  localStorage.removeItem('voice-select');
  localStorage.removeItem('lang-select');
}
