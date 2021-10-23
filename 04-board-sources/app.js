const board = document.querySelector('#board')
const colors = ['#3aef7e', '#84fab0', '#ff85e4', '#ec8cd7', '#dc1b90',
    '#5f37ee', '#957ee8', '#3799d9', '#70bbec', '#12cece', '#9be8e8', '#29db69',
    '#84e8a8', '#dfee19', '#e3e899']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)


    square.addEventListener('mouseleave', removeColor)


    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    //element.style.boxShadow = `0 0 2px ${color} - оставляем границы если убрать
//0 0 10px ${color}` - светящийся эффект
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
    // const index = Math.floor(Math.random() * colors.length)
    //   return colors[index]
}

