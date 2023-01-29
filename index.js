const btn = document.querySelectorAll('span')
const value = document.querySelector('#value')

for (let i = 0; i < btn.length; i++) {
    const clickedBtn = btn[i]
    let total = value

    clickedBtn.addEventListener('click', function() {
        if (this.innerHTML  == '=') {
            value.innerHTML = eval(value.innerHTML)
        } else {
            if (this.innerHTML == 'C') {
                value.innerHTML = ''
            }else if (this.ariaLabel === 'del') {
                value.innerHTML = value.innerHTML.substring(0, value.innerHTML.length - 1)
            } else {
                if (this.className === 'operator') {
                    value.innerHTML += this.ariaLabel
                } else if (this.className === 'number') {
                    value.innerHTML += this.innerHTML
                }
            }
        }
    })

}