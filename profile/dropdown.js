
const btn = document.querySelector('.dropbtn')
const drop = document.querySelector('.dropdown-content')

btn.addEventListener('click',()=>{
    drop.style.display = 'block'
})

























/*const dropdown = document.querySelectorAll('.dropdown-profile');

dropdown.forEach(dropdown =>{
    const select = document.querySelector('.select'); 
    const caret = document.querySelector('.caret'); 
    const menu = document.querySelector('.menu-profile'); 
    const options = document.querySelectorAll('.menu-profile li '); 
    const selected = document.querySelector('.selected'); 

    select.addEventListener('click', ()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-profile-open');
    })
    options.forEach(option =>{
        selected.innerText = option.innerText;
        
        selected.classList.add('text-fade-in')
        setTimeout(()=>{
            selected.classList.remove('text-fade-in')
        }, 300);
        
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-profile-open');

        options.forEach(option =>{
            option.classList.remove('on');
        });
        option.classList.add('on')
    }); 
    window.addEventListener('click', e =>{
        const size = dropdown.getBoundingClientRect();
        if(e.clientX < size.left || e.clientX < size.right || e.clientY < size.top|| e.clientY < size.bottom ){
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-profile-open'); 
        }   
    });
});

*/

