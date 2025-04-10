const InputBox = document.querySelector('input')
const LowerCase = document.querySelector('#lowercase span')
const UpperCase = document.querySelector('#uppercase span')
const CamelCase = document.querySelector('#camelcase span')
const PascalCase = document.querySelector('#pascalcase span')
const SnakeCase = document.querySelector('#snakecase span')
const KebabCase = document.querySelector('#kebabcase span')
const TrimCase = document.querySelector('#trimcase span')




function CapitalizeString(str) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1, str.lenght)
}

function toCamelCase(string) {
    const lowerString = string.toLowerCase();
    const WordArray = lowerString.split(' ')

    const FinalArray = WordArray.map((word, i) => {

        if (i === 0) return word;
        return CapitalizeString(word)
    })

    return FinalArray.join('')

}


function toPascalCase(string) {
    const lowerString = string.toLowerCase();
    const WordArray = lowerString.split(' ')

    const FinalArray = WordArray.map((word, i) => {

        return CapitalizeString(word)
    })

    return FinalArray.join('')

}


function toSnakeCase(string) {
    // const lowerString = string.toLowerCase();
    const WordArray = string.split(' ')

    // const FinalArray = WordArray.map((word, i) => {

    //     return CapitalizeString(word)
    // })

    return WordArray.join('_')

}

function tokebabCase(string) {
    const lowerString = string.toLowerCase();
    const WordArray = lowerString.split(' ')

    return WordArray.join('-')

}

function totrimCase(string) {
    // const lowerString = string.toLowerCase();
    const WordArray = string.split(' ')

    return WordArray.join('')

}



function UpdateScreen() {

    LowerCase.innerText = InputBox.value.toLowerCase()
    UpperCase.innerText = InputBox.value.toUpperCase()
    CamelCase.innerText = toCamelCase(InputBox.value)
    PascalCase.innerText = toPascalCase(InputBox.value)
    SnakeCase.innerText = toSnakeCase(InputBox.value)
    KebabCase.innerText = tokebabCase(InputBox.value)
    TrimCase.innerText = totrimCase(InputBox.value)



}

InputBox.addEventListener('input', UpdateScreen)




