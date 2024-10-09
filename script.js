const sideMenu = document.getElementById('sideMenu');
const navbar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
const e = document.getElementsByClassName('extras');
const showBtn = document.getElementById('showBtn')




function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent')
    }
    else{
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent')
    }
})


// light mode and dark mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

 
  function toggleMode(){
    document.documentElement.classList.toggle('dark');

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark' 
    }
    else{
        localStorage.theme = 'light'    
    }
  }


  showBtn.addEventListener('click', (event)=>{

    Array.from(e).forEach((x) =>{
        if( x.style.display === 'none'){
            x.style.display = 'block';
            showBtn.innerHTML = 'Show Less'
        }
        else{
            x.style.display = 'none';
            showBtn.innerHTML = 'Show More'

        }

    })

  })

  
