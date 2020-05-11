// console.log('running');
// w = window.document.all
// console.log(w);
// Array.from(w).forEach(function(element){
//     console.log(element);
// });
// document.clear();
 links = document.links;
 Array.from(links).forEach(function(element){
//     if(element.innerText === 'chayan')
//     {
//         console.log(element.href);
    console.log(element.href);
    if(element.href.includes('python')){
        console.log(element.href);
    }
    else{
        console.log('no such href');
    }
    })

// })
// container = document.querySelector('.container');
// // console.log(container.childNodes);
// // console.log(container.children[0].children[0].children[0].children[0].children[1].innerText);
// // console.log(container.children[0].children[1].children[0].children[0].children[1].innerText);
// console.log(container.firstElementChild);
// console.log(container.lastChild)
// document.querySelector('h1').addEventListener('click', function(){
//     location.href = "//wikipedia.org";
// })