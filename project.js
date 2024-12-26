
changeicon=(icon)=>{
    document.querySelector('.lists').classList.toggle('header-lists');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}
/*-------------------------Education--------------------------*/
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) 
            entry.target.classList.add('educationanimation');
        else
            entry.target.classList.remove('educationanimation');
        });
});
const education = document.querySelectorAll('.econtainer_p');
education.forEach((educat) => observer2.observe(educat));

/*-------------------------Skills--------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const skillitems = document.querySelectorAll('.skill-items');
skillitems.forEach((el, index) => {
    if (index < 3) {
        el.classList.add('left'); // C, C++, HTML
    } else  {
        el.classList.add('right'); // CSS, JavaScript, MATLAB
    }
    observer.observe(el);
});
/*-------------------------Projects and Papers--------------------------*/   
function morefunc(param){
    let moreinner=document.getElementsByClassName("moreinner");
    let more=document.getElementsByClassName("more");
    moreinner[param].style.display="block";
    more[param].style.display="none";
}
function lessfunc(param){
    let moreinner=document.getElementsByClassName("moreinner");
    let more=document.getElementsByClassName("more");
    moreinner[param].style.display="none";
    more[param].style.display="block";
}
document.querySelectorAll('.content').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});
/*-------------------------Extra-curricular Activities--------------------------*/  
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('chessanimation');
        } else {
            entry.target.classList.remove('chessanimation');
        }
    });
});
const extraContent = document.querySelector('.chess-content');
    observer1.observe(extraContent);



