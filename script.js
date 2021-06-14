let input = document.getElementById('input')
let checkbtn = document.getElementById('check')
let result = document.getElementById('result')

checkbtn.addEventListener('click', checkPalindrome)


function checkPalindrome() {
    let str = input.value

    if (!str.trim()) {
        result.innerText = "Ingresa un texto valido :("
    } else {
        let isPalindrome = true;
        let string = str.toLowerCase()
        let newString = string.replace(/[\W_]/g, '')
        let size = newString.length
        for (let i = 0; i < size; i++) {
            if (newString[i] !== newString[size - 1 - i]) {
                isPalindrome = false
            }
        }
        if (isPalindrome) {
            result.innerText = "El texto es palindromo :)"
        } else {
            result.innerText = "El texto no es palindromo :("
        }
    }
}