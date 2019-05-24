const navBar = document.querySelectorAll('a');

navBar.forEach(element => {
    element.addEventListener('click', (element) => { element.target.style.color = 'yellow' });
    element.addEventListener('mouseenter', (element) => { element.target.style.backgroundColor = 'lightBlue' });
    element.addEventListener('mouseleave', (element) => { element.target.style.backgroundColor = 'rgb(239, 233, 247)' });
});