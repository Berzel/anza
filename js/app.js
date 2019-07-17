(async function () {
  let navLinks = document.getElementById('navLinks')
  let navToggle = document.getElementById('navToggle')

  window.onclick = function (e) {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.toggle('open')
    }
  }

  navToggle.addEventListener('click',  function (e) {
    e.preventDefault()
    e.stopPropagation()
    navLinks.classList.toggle('open')
  })
}())