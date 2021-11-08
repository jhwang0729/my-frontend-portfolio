// sticky navbar
const navbar = document.querySelector('#header .nav-bar')
const scrollFunction = () => {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        navbar.style.padding = '0 10px'
    } else {
        navbar.style.padding = '45px 10px'
    }
}

window.addEventListener('scroll', () => {
    scrollFunction()
})
// end of sticky navbar

// modal
const modal = document.getElementById('my-modal')
const btn = document.getElementById('my-button')
const span = document.getElementsByClassName('close')[0]

btn.addEventListener('click', () => {
    modal.style.display = 'block'
})

span.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})
