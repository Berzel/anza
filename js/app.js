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

  let options = {
    strings: ['INNOVATIVE!', 'COHESSIVE!', 'ADVANCED!', 'EXCELLENT!', 'RESPONSIBLE!'],
    loopCount: Infinity,
    backDelay: 1000,
    backSpeed: 50,
    typeSpeed: 100,
    loop: true
  }

  new Typed('#typed', options);
}())