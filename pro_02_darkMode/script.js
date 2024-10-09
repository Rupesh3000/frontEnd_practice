
const moonImg = document.getElementById('moon');
const changeColor = () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        moonImg.src = "sun.png";
    } else {
        moonImg.src = "moon.png"
    }
}
moonImg.addEventListener('click',changeColor)