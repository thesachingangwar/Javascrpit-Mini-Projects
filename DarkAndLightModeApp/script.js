const screenModeCheckbox = document.querySelector('#screen-dark-mode')
const containerModeCheckbox = document.querySelector('#container-dark-mode')
const boxContainer = document.querySelector('.box-container')

screenModeCheckbox.addEventListener('change', (e) => {
    if (screenModeCheckbox.checked) {
        document.body.classList.add('dark')
        localStorage.setItem('screenModeCheckbox', true)
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('screenModeCheckbox', false)
    }

    containerModeCheckbox.checked = screenModeCheckbox.checked
    changecontainerDarkMode();

})

function changecontainerDarkMode(){
    
    if (containerModeCheckbox.checked) {
        boxContainer.classList.add('dark')
        localStorage.setItem('containerModeCheckbox', true)
    } else {
        boxContainer.classList.remove('dark')
        localStorage.setItem('containerModeCheckbox', false)

    }
}

containerModeCheckbox.addEventListener('change', changecontainerDarkMode)