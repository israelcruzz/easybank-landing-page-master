let menuNavbar = document.querySelector('#hamb');
let menuActive = document.querySelector('#act');
let exitMenu = document.querySelector('#exit');

menuNavbar.addEventListener('click', () => {
  menuActive.classList.toggle('hidden');
  exitMenu.classList.toggle('hidden');
  menuNavbar.style.display = "none"
});

exitMenu.addEventListener('click', () =>{
    menuActive.classList.toggle('hidden');
    exitMenu.classList.toggle('hidden')
    menuNavbar.style.display = "block"
})