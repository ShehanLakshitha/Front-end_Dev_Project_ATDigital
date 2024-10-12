const faqItem = document.querySelectorAll('.faq-item');

faqItem.forEach(item => {
    const icon = item.querySelector('.faq-icon');

    icon.addEventListener('click', (event) =>{
        event.stopPropagation();
        faqItem.forEach(faq =>{
            if(faq !== item){
                faq.classList.remove('active');                
            }
        })       
        item.classList.toggle('active');
    })
})

let navbar = document.querySelector('.header .navbar')

document.querySelector('#nav-menu').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}