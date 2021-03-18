// Menu
function toggleMenu(e) {
  e.preventDefault()
  const menuOverlay = document.getElementById('menu-overlay')
  menuOverlay.classList.toggle('show')
}

function changeTheme(e) {
  e.preventDefault()

  const html = document.getElementsByTagName('html')[0]
  const themeBtn = document.getElementById('theme')

  html.classList.toggle('dark')

  if (html.classList.contains('dark')) {
    themeBtn.innerHTML = 'Theme <i class="fas fa-moon"></i>'
  } else {
    themeBtn.innerHTML = 'Theme <i class="fas fa-sun"></i>'
  }
}