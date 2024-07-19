const img = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");
let n=0;

function changeslide() {
     for(let i=0;i<img.length;i++) {
        img[i].style.display="none";
     }
     img[n].style.display="block";

}
changeslide();
prev_btn.addEventListener("click",(e)=> {
    if(n>0) {
        n--;
    }
    else {
        n=img.length-1;
    }
    changeslide();
})
next_btn.addEventListener("click",(e)=> {
    if(n <img.length-1) {
        n++;
    }
    else {
     n=0 ;
    }
    changeslide();
})
const scrollcontainer = document.querySelectorAll(".products");
for(const item of scrollcontainer) {
    item.addEventListener('wheel',(evt)=> {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
 } );
}