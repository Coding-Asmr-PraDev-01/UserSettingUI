const toggleSwitch = document.querySelector('#checkbox');
const userBx = document.querySelector('.userBx');
const openMenuIcon = document.querySelector('.openMenuIcon');
const subContainer = document.querySelector('.subContainer');
const userImg = document.querySelector('.userBx .imgBx img');

let isMenuOpen = false;

const changeTheme = (event) => {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        userImg.src = './user-dark.png';
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        userImg.src = './user-light.png';
    }
}

const currentSetTheme = localStorage.getItem('theme') || null;
if(currentSetTheme){
    document.documentElement.setAttribute('data-theme', currentSetTheme);

    // Checked the toggleSwitch if the theme is dark
    if(currentSetTheme == 'dark'){
        toggleSwitch.checked = true;
        userImg.src = './user-dark.png';

    }else{
        toggleSwitch.checked = false;
        userImg.src = './user-light.png';
    }
}

toggleSwitch.addEventListener('click', changeTheme);

openMenuIcon.addEventListener('click', () => {
    if(!isMenuOpen){
        subContainer.style.opacity = 1;
    }else{
        subContainer.style.opacity = 0;
    }
    isMenuOpen = !isMenuOpen;
});