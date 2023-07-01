let themeBtn=document.getElementById('theme');
function changeTheme(){
    let root= document.documentElement;
    if(root.classList.contains('dark')){
        themeBtn.style.transform='rotate(180deg)';
        root.classList.remove('dark');
    }else{
        themeBtn.style.transform='rotate(0deg)';
        root.classList.toggle('dark');
    }
   
}
themeBtn.addEventListener('click',changeTheme);