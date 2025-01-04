document.addEventListener('DOMContentLoaded', () => {
    const currentHour = new Date().getHours();
    let greeting;
 if (currentHour < 12) {
     greeting = 'Good Morning!';
 } else if (currentHour < 18) {
     greeting = 'Good Afternoon!';
 } else {
     greeting = 'Good Evening!';
 }

     const aboutParagraph = document.querySelector('.about-me .about-text p');

     if (aboutParagraph) {
     aboutParagraph.innerHTML = `${greeting} ${aboutParagraph.innerHTML}`; // Prepend the greeting
 }
});
document.addEventListener('DOMContentLoaded', () => {
 const themeToggle = document.createElement('button'); 
 themeToggle.textContent = 'Switch to Dark Mode'; 
 themeToggle.style.cssText = `
     position: fixed;
     top: 1rem;
     right: 1rem;
     padding: 0.5rem 1rem;
     background-color: #0066cc;
     color: white;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     z-index: 1000;
 `; 
 document.body.appendChild(themeToggle); 
 themeToggle.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode'); 
 if (document.body.classList.contains('dark-mode')) {
     themeToggle.textContent = 'Switch to Light Mode'; 
  } 
  else {
     themeToggle.textContent = 'Switch to Dark Mode'; 
     }
 });
});
document.addEventListener('DOMContentLoaded', () => {
 const progressBar = document.createElement('div');
 progressBar.className = 'scroll-progress-bar';
   document.body.appendChild(progressBar);
     window.addEventListener('scroll', () => {
     const scrollTop = window.scrollY; 
     const docHeight = document.documentElement.scrollHeight - window.innerHeight; 
     const scrollPercent = (scrollTop / docHeight) * 100; 
     progressBar.style.width = `${scrollPercent}%`; 
 });
});
