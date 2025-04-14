const input = document.querySelector('#input-box');
let oldvalue = ''
let firstThree = ''


input.addEventListener('input', (e) => {
    let inputValue = e.target.value;

    console.log(oldvalue, inputValue)


    if (/\d+$/g.test(inputValue)) {
        input.value = inputValue;
    }else {
           
        input.value = inputValue.substring(0, inputValue.length - 1)

        
    }


    if (inputValue.length === 4 && oldvalue.length < inputValue.length) {
        firstThree = inputValue.substring(0, 3)

        input.value = `+(${firstThree}) - ${inputValue[inputValue.length - 1]}`
        // console.log(inputValue)

    } else if (inputValue.length === 9 && oldvalue.length > inputValue.length) {
        input.value = firstThree;
    }

    oldvalue = inputValue;
});
