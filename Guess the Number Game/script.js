const userInput = document.querySelector('.input')
const form = document.querySelector('form')
const InputMsg = document.querySelector('.input-msg')
const Result = document.querySelector('.result')
const SubmitBtn = document.querySelector('.submit-btn')
const RestartBtn = document.querySelector(".restart-btn")

function secure() {
    const allGuess = []

    let RandomNumber = Math.random() * 100
    RandomNumber = Math.round(RandomNumber);

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const UserInputValue = parseInt(userInput.value)
        if (RandomNumber == UserInputValue) {

            Result.innerText = ' Result : Congrates, You Guess Right Number !!'
            SubmitBtn.disabled = true
            RestartBtn.disabled = false



        } else if (RandomNumber > UserInputValue) {
            Result.innerText = 'Result : Oh, Try a Big Number!!'
            RestartBtn.disabled = true


        } else if (UserInputValue > 100) {
            Result.innerText = 'Plz Guess Between 0 to 100'
            RestartBtn.disabled = true
        }

        else {
            Result.innerText = ' Result : Oh, Try A Small Number!!'
            RestartBtn.disabled = true
        }

        allGuess.push(UserInputValue);
        // allGuessResult = allGuess.join(',')
        InputMsg.innerText = 'Your Guess :' + allGuess.join(',')
        // console.log(allGuessResult)
        form.reset()
    })


    RestartBtn.addEventListener('click', () => {
        Result.innerText = 'Result :'
        InputMsg.innerText = ' Your Guess'
        SubmitBtn.disabled = false
        RestartBtn.disabled = true
        RandomNumber = Math.round(Math.random() * 100);
        allGuess = []
    }
    )
}
secure();
