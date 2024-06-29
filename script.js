const navList = document.querySelectorAll('.nav ul li');
const pathName= window.location.pathname.split('/').pop();
const active =''

navList.forEach(singleNav=>{
    singleNav.addEventListener('click',function(){
    document.querySelector('.active').classList.remove('active');       
        this.classList.add('active');
        console.log(this);
    })
})

