var logo=document.getElementsByClassName("logo");if(logo[0]&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){logo[0].classList.remove("animate__fadeInLeft");logo[0].classList.add("animate__bounceIn")}
function updateContent(langData){document.querySelectorAll('[data-i18n]').forEach(element=>{const key=element.getAttribute('data-i18n');element.innerHTML=langData[key]})}
function setLanguagePreference(lang){localStorage.setItem('language',lang);location.reload()}
async function fetchLanguageData(lang){const response=await fetch(`https://dimaggiosurgery.web.app/languages/${lang}.json`,{mode:'cors'});if(lang==='it'){document.getElementsByClassName("en-switch")[0].style.display="none";document.getElementsByClassName("it-switch")[0].style.display="block";var videoIT=document.getElementsByClassName("it-video")[0];var videoEN=document.getElementsByClassName("en-video")[0];if(videoIT||videoEN){videoIT.style.display="block";videoEN.style.display="none"}}else{document.getElementsByClassName("en-switch")[0].style.display="block";document.getElementsByClassName("it-switch")[0].style.display="none";var videoIT=document.getElementsByClassName("it-video")[0];var videoEN=document.getElementsByClassName("en-video")[0];if(videoIT||videoEN){videoIT.style.display="none";videoEN.style.display="block"}}
return response.json()}
async function changeLanguage(lang){await setLanguagePreference(lang);const langData=await fetchLanguageData(lang);updateContent(langData);toggleArabicStylesheet(lang);const url=new URL(window.location);const pathParts=url.pathname.split('/');pathParts[1]=lang==='en'?'en':'it';url.pathname=pathParts.join('/');window.history.replaceState({},'',url)}
window.addEventListener('DOMContentLoaded',async()=>{const userPreferredLanguage=localStorage.getItem('language')||'en';const langData=await fetchLanguageData(userPreferredLanguage);updateContent(langData);const pages=['curriculum','blog','chronic-heartburn'];const url=new URL(window.location);const pathPage=url.pathname.replace('/','');const pathParts=url.pathname.split('/');pathParts[1]=userPreferredLanguage==='en'?'en':'it';url.pathname=pathParts.join('/');if(pages.includes(pathPage)){window.history.replaceState({},'',`${url}/${pathPage}`)}else{window.history.replaceState({},'',url)}});function scrollToAbout(){document.getElementById('about').scrollIntoView({behavior:'smooth'})}
function scrollToContacts(){document.getElementById('contacts').scrollIntoView({behavior:'smooth'})}
function scrollToClinical(){document.getElementById('clinical').scrollIntoView({behavior:'smooth'})}
function scrollToProfessional(){document.getElementById('professional').scrollIntoView({behavior:'smooth'})}
function scrollToLocations(){document.getElementById('locations').scrollIntoView({behavior:'smooth'})}

// fetch('https://ipapi.co/country/')
//     .then(response => response.text())
//     .then(country => {
//       console.log('country', country)
//       if (country !== 'GB' &&
//           country !== 'IT' &&
//           country !== 'US' &&
//           country !== 'CA' &&
//           country !== 'AU' &&
//           country !== 'FR' &&
//           country !== 'DE' &&
//           country !== 'NL' &&
//           country !== 'ES' 
//       ) { 
//         document.getElementById('topDoctorsIframe').style.display = 'none';
//       }
//     });