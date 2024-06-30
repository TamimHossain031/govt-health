const navList = document.querySelectorAll('.nav ul li');
const contentBox = document.querySelector('.content__main');

navList.forEach(singleNav=>{
    singleNav.addEventListener('click',function(){
    document.querySelector('.active').classList.remove('active');       
        this.classList.add('active');
       let page = `./${singleNav.attributes[0].value}.html`;
        loadDocs(page);
        
    })
})

function loadDocs(page){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        contentBox.innerHTML = this.responseText;
    }
    xhttp.open('GET',page);
    xhttp.send();
}


