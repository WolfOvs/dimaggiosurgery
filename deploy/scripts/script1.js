



// var map2 = L.map('map2').setView([51.51758067913786, -0.05947181640764378], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map2);

// var marker2 = L.marker([51.51758067913786, -0.05947181640764378]).addTo(map2);

// marker2.bindPopup("<b>The Royal London Hospital");

// setTimeout(function () { map2.invalidateSize() }, 3000);

// animare query

var logo = document.getElementsByClassName("logo");

var psw = localStorage.getItem("psw");

if(psw === "Forzamilan") {
  if (psw == "Forzamilan") {
    document.getElementsByTagName("main")[0].style.display = "block";
    document.getElementsByTagName("header")[0].style.display = "block";
    document.getElementsByTagName("footer")[0].style.display = "block";
    if(document.getElementsByClassName("form")[0]) {
      document.getElementsByClassName("form")[0].style.display = "none";
    }

    setTimeout(function () {
      console.log("resize")
      window.dispatchEvent(new Event("resize"));
   }, 500);
}
}

if(logo[0] && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    logo[0].classList.remove("animate__fadeInLeft");
    logo[0].classList.add("animate__bounceIn");
  }


  var psw = document.getElementById("psw");
  var submit = document.getElementById("submit");
  
  if(submit) {
    submit.addEventListener("click", function() {
      var pswValue = psw.value;
      if (pswValue === "Forzamilan") {
          displayDate(pswValue);
          localStorage.setItem("psw", pswValue);
      }
  });
  }
   
   function displayDate(psw) {
       if (psw == "Forzamilan") {
           document.getElementsByTagName("main")[0].style.display = "block";
           document.getElementsByTagName("header")[0].style.display = "block";
           document.getElementsByTagName("footer")[0].style.display = "block";
           document.getElementsByClassName("form")[0].style.display = "none";

           setTimeout(function () {
             console.log("resize")
             window.dispatchEvent(new Event("resize"));
          }, 500);
       }
   }

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.innerHTML = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`/languages/${lang}.json`);
  if(lang === 'it') {
    document.getElementsByClassName("en-switch")[0].style.display = "none";
    document.getElementsByClassName("it-switch")[0].style.display = "block";

    var videoIT = document.getElementsByClassName("it-video")[0];
    var videoEN = document.getElementsByClassName("en-video")[0];
    if (videoIT || videoEN) {
        videoIT.style.display = "block";
        videoEN.style.display = "none";
    }
} else {
    document.getElementsByClassName("en-switch")[0].style.display = "block";
    document.getElementsByClassName("it-switch")[0].style.display = "none";

    var videoIT = document.getElementsByClassName("it-video")[0];
    var videoEN = document.getElementsByClassName("en-video")[0];
    console.log(videoIT, videoEN)
    if (videoIT || videoEN) {
      videoIT.style.display = "none";
      videoEN.style.display = "block";
    }
}
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
  toggleArabicStylesheet(lang);

  // Update query string with language preference
  const url = new URL(window.location);
  const pathParts = url.pathname.split('/');
  pathParts[1] = lang === 'en' ? 'en' : 'it';
  url.pathname = pathParts.join('/');
  window.history.replaceState({}, '', url);
}

window.addEventListener('DOMContentLoaded', async () => {
  const userPreferredLanguage = localStorage.getItem('language') || 'en';
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);

  // Update query string with language preference
  const url = new URL(window.location);
  const pathParts = url.pathname.split('/');
  console.log('path', pathParts);
  pathParts[1] = userPreferredLanguage === 'en' ? 'en' : 'it';
  console.log('path1', pathParts);
  url.pathname = pathParts.join('/');
  console.log('URL', url)
  window.history.replaceState({}, '', url);
});


function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContacts() {
  document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
}

function scrollToClinical() {
  document.getElementById('clinical').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProfessional() {
  document.getElementById('professional').scrollIntoView({ behavior: 'smooth' });
}

function scrollToLocations() {
  document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
}
