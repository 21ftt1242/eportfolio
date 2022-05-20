 //localStorage

 localStorage.setItem('story-1a', 'Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it. After that they are not able to move, and they sleep through the six months that they need for digestion." I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. It looked like this: <img src="images/story1-img2.png">');
 localStorage.setItem('story-1b', 'I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them. But they answered: "Frighten? Why should any one be frightened by a hat?" My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant. But since the grown-ups were not able to understand it, I made another drawing: I drew the inside of the boa constrictor, so that the grown-ups could see it clearly. They always need to have things explained. My Drawing Number Two looked like this: <br> <img src="images/story1-img2.png">');
 localStorage.setItem('story-1c', 'The grown-ups\' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic and grammar. That is why, at the age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them.');
 localStorage.setItem('story-1d', 'So then I chose another profession, and learned to pilot airplanes. I have flown a little over all parts of the world; and it is true that geography has been very useful to me. At a glance I can distinguish China from Arizona. If one gets lost in the night, such knowledge is valuable. In the course of this life I have had a great many encounters with a great many people who have been concerned with matters of consequence. I have lived a great deal among grown-ups. I have seen them intimately, close at hand. And that hasn\'t much improved my opinion of them. Whenever I met one of them who seemed to me at all clear-sighted, I tried the experiment of showing him my Drawing Number One, which I have always kept. I would try to find out, so, if this was a person of true understanding. But, whoever it was, he, or she, would always say: "That is a hat."Then I would never talk to that person about boa constrictors, or primeval forests, or stars. I would bring myself down to his level. I would talk to him about bridge, and golf, and politics, and neckties. And the grown-up would be greatly pleased to have met such a sensible man.');
 localStorage.setItem('story-1a-m', 'Suatu ketika ketika saya berumur enam tahun, saya melihat gambar yang indah dalam sebuah buku, yang disebut Kisah Benar dari Alam, tentang hutan purba. Ia adalah gambar seekor boa constrictor dalam tindakan menelan haiwan. Berikut adalah salinan lukisan tersebut. Dalam buku itu ia berkata: "Boa constrictors menelan mangsa mereka keseluruhan, tanpa mengunyahnya. Selepas itu mereka tidak dapat bergerak, dan mereka tidur melalui enam bulan yang mereka perlukan untuk penghadaman." Saya merenung sedalam-dalamnya, tentang pengembaraan hutan. Dan selepas beberapa kerja dengan pensel warna saya berjaya membuat lukisan pertama saya. Lukisan Saya Nombor Satu. Ia kelihatan seperti ini:');
 localStorage.setItem('story-1b-m', 'Saya menunjukkan karya agung saya kepada orang dewasa, dan bertanya kepada mereka sama ada lukisan itu menakutkan mereka. Tetapi mereka menjawab: "Takut? Mengapa ada orang yang takut dengan topi?" Lukisan saya bukan gambar topi. Ia adalah gambar seekor boa constrictor sedang mencerna seekor gajah. Tetapi kerana orang dewasa tidak dapat memahaminya, saya membuat lukisan lain: Saya melukis bahagian dalam boa constrictor, supaya orang dewasa dapat melihatnya dengan jelas. Mereka sentiasa perlu menjelaskan sesuatu. Lukisan Nombor Dua Saya kelihatan seperti ini:');

// Story 1 variables
var s1_p1a_en = localStorage.getItem("story-1a");
var s1_p1b_en = localStorage.getItem("story-1b");
var s1_p2a_en = localStorage.getItem("story-1c");
var s1_p2b_en = localStorage.getItem("story-1d");
var s1_p1a_mal = localStorage.getItem("story-1a-m");
var s1_p1b_mal = localStorage.getItem("story-1b-m");


  // Declare variables
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var stopButton = document.getElementById("stop-button");
var voiceSelect = document.getElementById("voice-select");
var synth = window.speechSynthesis;
var langSelect = document.getElementById("lang-select");
var text;
var text2;
var text3;
var pageOne;
var pageNum = localStorage.getItem('page');
var saveFont;

// Current Story variables
var currentStoryEN_1;
var currentStoryEN_2;
var currentStoryMAL_1;
var currentStoryMAL_2;

function storyLoad() {
  switch (pageNum) {
    case '1': 
    currentStoryEN_1 = s1_p1a_en;
    currentStoryEN_2 = s1_p1b_en;
    currentStoryMAL_1 = s1_p1a_mal;
    currentStoryMAL_2 = s1_p1b_mal;
    console.log("hey test");
    break;

    case '2':
    currentStoryEN_1 = s1_p2a_en;
    currentStoryEN_2 = s1_p2b_en;
    //currentStoryMAL_1 = s1_p1a_mal;
    //currentStoryMAL_2 = s1_p1b_mal; 
    console.log("hey testtttttt");
    break;
  }
  changeLang()
}


function changeLang() {
  if (langSelect.value === "english") {
    document.getElementById("content1").innerHTML = currentStoryEN_1;
    document.getElementById("content2").innerHTML = currentStoryEN_2;
  } else if (langSelect.value === "malay") {
    document.getElementById("content1").innerHTML = s1_p1a_mal;
    document.getElementById("content2").innerHTML = s1_p1b_mal;
  }
  text = document.getElementById("content1").innerText;
  text2 = document.getElementById("content2").innerText;
  text3 = text + text2;
  pageOne = new SpeechSynthesisUtterance(text3);
}


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
  localStorage.removeItem('size');
}

function toSmall() {
  localStorage.setItem('size', 'small')
  var text1 = document.getElementById("content1");
  var text2 = document.getElementById("content2");
  text1.style.fontSize = "0.5em";
  text2.style.fontSize = "0.5em";
}

function toMedium() {
  localStorage.setItem('size', 'medium')
  var text1 = document.getElementById("content1");
  var text2 = document.getElementById("content2");
  text1.style.fontSize = "1em";
  text2.style.fontSize = "1em";
}

function toLarge() {
  localStorage.setItem('size', 'large')
  var text1 = document.getElementById("content1");
  var text2 = document.getElementById("content2");
  text1.style.fontSize = "2em";
  text2.style.fontSize = "2em";
}
