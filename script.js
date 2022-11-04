
const yearWS = fetch('https://vercel-backend-true.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   
    document.querySelector("#year").innerText += data.year
 });