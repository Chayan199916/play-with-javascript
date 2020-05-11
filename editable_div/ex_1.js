// console.log('running');
let edit_div = document.getElementById('div1');
// console.log(edit_div);
let text = document.createElement('textarea');
text.setAttribute('id', 'div1')
text.setAttribute('class', 'add_me')

edit_div.addEventListener('click', function () {
    text.value = edit_div.innerText;
    edit_div.replaceWith(text);
    text.focus();
    text.onkeypress = function (event) {
        text.classList.add('keydowning');
        if (event.key == 'Enter') {
            text.replaceWith(edit_div);
            edit_div.innerHTML = `${text.value}`;
        }
        text.classList.remove('keydowning');
    }
    text.addEventListener('blur', function () {
        if(!text.classList.contains('keydowning')){
            text.replaceWith(edit_div);
            edit_div.innerHTML = `${text.value}`;
            // alert('blur event fired')
        }
    })
})