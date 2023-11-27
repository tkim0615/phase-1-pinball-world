
fetch('http://127.0.0.1:3000/games')
.then(resp => resp.json())
.then(gameList => {
    gameList.forEach(game => {

     const gameListElement = document.createElement('h5')
     const gameListNavElement = document.querySelector('.game-list')
        const manufacturer_name = game.manufacturer_name
     gameListElement.textContent = game.name + ` (${manufacturer_name})`
     gameListNavElement.appendChild(gameListElement)
    })
})

















































// let currentMovie
// fetch('http://127.0.0.1:3000/games')
// .then(resp => resp.json())
// .then(gamesList => {

//     gamesList.forEach(game => {

//         const gameListElement = document.querySelector('.game-list')
//         const hTag = document.createElement('h5')

//         hTag.textContent = game.name + ` (${game.manufacturer_name})`
//         gameListElement.appendChild(hTag)

//         hTag.addEventListener('click', e => {
//             displayDetail(game)
//         })

//     })
//     displayDetail(gamesList[0])



//     const scoreForm = document.getElementById('high-score-form')
//     scoreForm.addEventListener('submit', e => {
//         e.preventDefault()
//         const scoreInput = document.getElementById('score-input')
//         const scoreToAdd = Number(scoreInput.value)
//         const highScore = document.getElementById('detail-high-score')
        
//         currentMovie.high_score += Number(scoreInput.value)

//         highScore.textContent = currentMovie.high_score

//         scoreForm.reset()
//     })

// })

// function displayDetail(game){
//     currentMovie = game

//     const detailImage = document.getElementById('detail-image')
//     const detailName = document.getElementById('detail-title')
//     const detailHighScore = document.getElementById('detail-high-score')

//     detailImage.src = game.image
//     detailName.textContent = game.name
//     detailHighScore.textContent = game.high_score
// }

