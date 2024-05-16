let whisky = document.getElementById('whisky')
let menuWhisky = document.getElementById('menuWhisky')

let vodka = document.getElementById('vodka')
let menuVodka = document.getElementById('menuVodka')

let gin = document.getElementById('gin')
let menuGin = document.getElementById('menuGin')

let licor = document.getElementById('licor')
let menuLicor = document.getElementById('menuLicor')

let espumante = document.getElementById('espumante')
let menuEspumante = document.getElementById('menuEspumante')

let vinho = document.getElementById('vinho')
let menuVinho = document.getElementById('menuVinho')

let champagne = document.getElementById('champagne')
let menuChampagne = document.getElementById('menuChampagne')

let rum = document.getElementById('rum')
let menuRum = document.getElementById('menuRum')

let kit = document.getElementById('kit')
let menuKit = document.getElementById('menuKit')


const openModalButton = document.querySelector('#btn_open_modal')
const closeModalButton = document.querySelector('.btn_fechar_bartender')
const modal = document.getElementById('modal')
const fade = document.getElementById('fade')

class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this. activeClass = 'active'

        this.handleClick = this.handleClick.bind(this);
    }


    animateLinks(){
        this.navLinks.forEach((link, index)=>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        })
    }


    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        } 
        return this;
    }
}



const mobileNavbar = new MobileNavbar(
    ".bi-list",
    ".links_nav",
    ".links_nav li"
);
mobileNavbar.init();


whisky.addEventListener('mouseover', ()=>{
    menuWhisky.classList.add('active')
    menuVodka.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active')
    menuVinho.classList.remove('active') 
    menuChampagne.classList.remove('active') 
    menuRum.classList.remove('active')
    menuKit.classList.remove('active')
})


vodka.addEventListener('mouseover', ()=>{
    menuVodka.classList.add('active')
    menuWhisky.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active')
    menuVinho.classList.remove('active')
    menuChampagne.classList.remove('active')
    menuRum.classList.remove('active')
    menuKit.classList.remove('active')
    
})

gin.addEventListener('mouseover', ()=>{
    menuGin.classList.add('active')
    menuVodka.classList.remove('active')
    menuWhisky.classList.remove('active')
    menuEspumante.classList.remove('active')  
    menuLicor.classList.remove('active')
    menuVinho.classList.remove('active')
    menuChampagne.classList.remove('active')
    menuRum.classList.remove('active')
    menuKit.classList.remove('active')
})

licor.addEventListener('mouseover', ()=>{
    menuLicor.classList.add('active')
    menuVodka.classList.remove('active')
    menuWhisky.classList.remove('active')
    menuGin.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuVinho.classList.remove('active')
    menuChampagne.classList.remove('active')
    menuRum.classList.remove('active')
    menuKit.classList.remove('active')
    
})

espumante.addEventListener('mouseover', ()=>{
    menuEspumante.classList.add('active')
    menuVodka.classList.remove('active')
    menuWhisky.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active') 
    menuVinho.classList.remove('active')  
    menuChampagne.classList.remove('active')
    menuRum.classList.remove('active')
    menuKit.classList.remove('active')
})

vinho.addEventListener('mouseover', ()=>{
    menuVinho.classList.add('active')
    menuVodka.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active')
    menuWhisky.classList.remove('active')  
    menuChampagne.classList.remove('active')
    menuRum.classList.remove('active')
    menuKit.classList.remove('active')
})

champagne.addEventListener('mouseover', ()=>{
    menuChampagne.classList.add('active')
    menuVodka.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active')
    menuVinho.classList.remove('active') 
    menuWhisky.classList.remove('active')
    menuRum.classList.remove('active') 
    menuKit.classList.remove('active')
    menuKit.classList.remove('active')
})

rum.addEventListener('mouseover', ()=>{
    menuRum.classList.add('active')
    menuVodka.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active')
    menuVinho.classList.remove('active') 
    menuChampagne.classList.remove('active') 
    menuWhisky.classList.remove('active')
    menuKit.classList.remove('active')
})

kit.addEventListener('mouseover', ()=>{
    menuKit.classList.add('active')
    menuVodka.classList.remove('active')
    menuEspumante.classList.remove('active')
    menuGin.classList.remove('active')
    menuLicor.classList.remove('active')
    menuVinho.classList.remove('active') 
    menuChampagne.classList.remove('active') 
    menuRum.classList.remove('active')
    menuWhisky.classList.remove('active')
})



 openModalButton.addEventListener('click', ()=>{
     toggleModal()
 })

 closeModalButton.addEventListener('click', ()=>{
    toggleModal()
})

fade.addEventListener('click', ()=>{
    toggleModal()
})

const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}




openModalButtonContrate.addEventListener('click', ()=>{
    toggleModal()
})

closeModalButtonContrate.addEventListener('click', ()=>{
   toggleModal()
})

fadeContrate.addEventListener('click', ()=>{
   toggleModal()
})

const toggleModalContrate = () => {
   modalContrate.classList.toggle('hide')
   fadeContrate.classList.toggle('hide')
}









