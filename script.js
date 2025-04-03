const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn');
const count = document.querySelector('.Count')
const changeby = document.querySelector('#changeby')
const reset = document.querySelector('#reset-btn')



minusBtn.addEventListener('click', () => {
    const counter = parseInt(count.innerText)
    const changebyValue = parseInt(changeby.value)
    count.innerText = counter - changebyValue;

})

plusBtn.addEventListener('click', () => {
    const counter = parseInt(count.innerText)
    const changebyValue = parseInt(changeby.value)
    count.innerText = counter + changebyValue;
})

reset.addEventListener('click', ()=>{
    count.innerText=0;
})


