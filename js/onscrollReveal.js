window.addEventListener("scroll",rev);
function rev(){
    let ele=document.querySelectorAll('.reveal');
    for(let i=0;i<ele.length;i++){
        let windowheight=window.innerHeight;
        let revealtop=ele[i].getBoundingClientRect().top;
        let revealpoint=120;
        if(revealtop<windowheight - revealpoint){
            ele[i].classList.add('active');

        }else{
            ele[i].classList.remove('active')
        }
    }
}
// rev();