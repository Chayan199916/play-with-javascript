// console.log('running');
showText();
function showText() {
    textList = localStorage.getItem('text');
    div1 = document.getElementById('target-div');
    if (textList != null) {
        textList = JSON.parse(textList);
        html = "";
        textList.forEach(function (txtElement, index) {
            note = txtElement;
            html += `<div class="card my-card mr-3 mb-3" style="width: 16rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p id = "${index}" class="card-text">${note}</p>
                <a href="#" onclick = "deleteNote(${index})" class="btn btn-danger" id="delBtn">Delete Note</a>
            </div>
        </div>`

        });
        div1.innerHTML = html;
    }
    else {
        div1.innerHTML = `<h6>No notes yet ! Click on "Add Note" to create a note.</h6>`;
    }
}

btn1 = document.getElementById('addBtn');
btn1.addEventListener('click', function () {
    text = document.getElementById('addText');
    note = text.value;
    textList = localStorage.getItem('text');
    if (textList != null) {
        textList = JSON.parse(textList);
        textList.push(note);
        textList = JSON.stringify(textList);
        localStorage.setItem('text', textList);
        showText();
    }
    else {
        textList = [];
        textList.push(note);
        textList = JSON.stringify(textList);
        localStorage.setItem('text', textList);
        showText();
    }
    text.value = "";
    text.focus();
})

function deleteNote(index) {
    textList = localStorage.getItem('text');
    textList = JSON.parse(textList);
    textList.splice(index, 1);
    textList = JSON.stringify(textList);
    if (textList != "[]") {
        localStorage.setItem('text', textList);
        showText();
    }
    else {
        localStorage.clear();
        div1 = document.getElementById('target-div');
        div1.innerHTML = `<h6>No notes yet ! Click on "Add Note" to create a note.</h6>`;
    }
}
search = document.getElementById("searchTxt");
search.addEventListener('input', function () {
    searchText = search.value;
    // console.log(searchText);
    cardsList = document.getElementsByClassName('my-card');
    Array.from(cardsList).forEach(function (element) {
        note = element.getElementsByTagName('p')[0].innerText;
        if (note.includes(searchText)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})