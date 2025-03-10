
var logo = document.getElementsByClassName("logo");

if(logo[0] && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    logo[0].classList.remove("animate__fadeInLeft");
    logo[0].classList.add("animate__bounceIn");
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
  const response = await fetch(`https://dimaggiosurgery.web.app/languages/${lang}.json`, {
    mode: 'cors'
  });
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
  console.log('url', url.pathname);
  const pathParts = url.pathname.split('/');
  console.log('pathParts', pathParts);
  pathParts[1] = userPreferredLanguage === 'en' ? 'en' : 'it';
  url.pathname = pathParts.join('/');
  console.log('url2', url);
  window.history.replaceState({}, '', `${url}${pathParts[1]}`);
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
