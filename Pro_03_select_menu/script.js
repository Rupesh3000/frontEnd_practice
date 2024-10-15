
const selectFeild = document.getElementById('selectField')
const links = document.querySelectorAll('.links')
const socialLinks = document.getElementById('social-links')
const fieildHeading = document.getElementById('fieild-heading')
const rotate = document.getElementById('rotate-1')

selectFeild.addEventListener('click', () => {
    socialLinks.classList.toggle('hide')
    rotate.classList.toggle('rotate')
})

links.forEach((e) => {
    e.addEventListener('click', () => {
        fieildHeading.innerHTML = e.innerHTML;
        socialLinks.classList.toggle('hide')
        rotate.classList.toggle('rotate')
    })
})