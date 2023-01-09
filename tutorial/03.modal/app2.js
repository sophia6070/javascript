const modal = document.querySelector('.modal')
const content = document.querySelector('.content')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        modal.classList.toggle('active')
        content.classList.toggle('active')
    })
})
