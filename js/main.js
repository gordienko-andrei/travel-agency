$('.carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.popular-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');
burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  navList.classList.toggle('open');
})
document.addEventListener('scroll', function(){
  if ( window.scrollY > 5 && navList.classList.contains('open') && burger.classList.contains('active')){
    navList.classList.remove('open');
    burger.classList.remove('active');
  }
})

const header = document.querySelector('.header');
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const currentPos = window.scrollY;
  if (currentPos > lastScrollTop) {
    header.style.top = '-100px';
  } else {
    header.style.top = '0';
    header.style.transition = 'all ease 200ms';
  }
  lastScrollTop = currentPos;
})


const date = document.getElementById('datepicker');
const label = document.getElementById('depart__label');
let currentDate = new Date();
let dateArr = [];
const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sept", "Oct", "Nov", "Dec"
];
date.addEventListener('focus', function (){
    let firstDate = date.value;
    if( firstDate === 0){
        const month = monthNames[currentDate.getMonth()];
        firstDate = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}`;
        dateArr = [firstDate];
        date.value = dateArr[0];
        
    }
});
date.addEventListener('change', () => {
    let secondDate = date.value;
    dateArr.push(secondDate);
    date.value = dateArr.join('-');
    console.log(dateArr);
    if (dateArr.length === 2){
        label.style.width = '280px';
        date.style.width = '280px';

    }
    
}); 


const logo = document.querySelector('.logo');
const smallLogo = document.querySelector('.logo__small');

document.addEventListener('scroll', function () {
  if (window.scrollY > 0){
    navList.style.padding = "10px 0 10px 0";
    logo.classList.add('logo__small');
  }else {
    navList.style.padding = "20px 0 20px 0"; 
    logo.classList.remove('logo__small');
  }
})


 

const bangladesh = document.getElementById('bangladesh');
const bhutan = document.getElementById('bhutan');
const china = document.getElementById('china');
const india = document.getElementById('india');
const nepal = document.getElementById('nepal');
const tibet = document.getElementById('tibet');

const bangladeshRadio = document.getElementById('bangladesh__radio');
const bhutanRadio = document.getElementById('bhutan__radio');
const chinaRadio = document.getElementById('china__radio');
const indiaRadio = document.getElementById('india__radio');
const nepalRadio = document.getElementById('nepal__radio');
const tibetRadio = document.getElementById('tibet__radio');
const allCategory = document.getElementById('all');
const countriesMobile = document.getElementById('countries__mobile');

if (bangladeshRadio.checked) {
  bhutan.style.display = 'none';
  china.style.display = 'none';
  india.style.display = 'none';
  nepal.style.display = 'none';
  tibet.style.display = 'none';
  bangladesh.style.display = 'grid';
}

bangladeshRadio.addEventListener('change', function(){
  if (bangladeshRadio.checked) {
    bhutan.style.display = 'none';
    china.style.display = 'none';
    india.style.display = 'none';
    nepal.style.display = 'none';
    tibet.style.display = 'none';
    bangladesh.style.display = 'grid';
  }
});

bhutanRadio.addEventListener('change', function(){
  if (bhutanRadio.checked){
    bangladesh.style.display = 'none';
    china.style.display = 'none';
    india.style.display = 'none';
    nepal.style.display = 'none';
    tibet.style.display = 'none';
    bhutan.style.display = 'grid';
  }
});
  
chinaRadio.addEventListener('change', function(){
  if (chinaRadio.checked){
    bangladesh.style.display = 'none';
    bhutan.style.display = 'none';
    india.style.display = 'none';
    nepal.style.display = 'none';
    tibet.style.display = 'none';
    china.style.display = 'grid';
  }
}); 
indiaRadio.addEventListener('change', function(){
  if (indiaRadio.checked){
    bangladesh.style.display = 'none';
    bhutan.style.display = 'none';
    china.style.display = 'none';
    nepal.style.display = 'none';
    tibet.style.display = 'none';
    india.style.display = 'grid';
  }
})
nepalRadio.addEventListener('change', function(){
  if (nepalRadio.checked){
    bangladesh.style.display = 'none';
    bhutan.style.display = 'none';
    china.style.display = 'none';
    india.style.display = 'none';
    tibet.style.display = 'none';
    nepal.style.display = 'grid';
  }
})
tibetRadio.addEventListener('change', function(){
  if (tibetRadio.checked){
    bangladesh.style.display = 'none';
    bhutan.style.display = 'none';
    china.style.display = 'none';
    nepal.style.display = 'none';
    indiaRadio.style.display = 'none';
    tibet.style.display = 'grid';
  }
})
allCategory.addEventListener('change', function(){
  if (allCategory.checked ){
    bangladesh.style.display = 'grid';
    bhutan.style.display = 'grid';
    china.style.display = 'grid';
    nepal.style.display = 'grid';
    tibet.style.display = 'grid';
    india.style.display = 'grid';
  }
})

function adjustDisplay() {
  if (window.innerWidth <= 655) {
    bhutan.style.display = 'none';
    china.style.display = 'none';
    india.style.display = 'none';
    nepal.style.display = 'none';
    tibet.style.display = 'none';
    bangladesh.style.display = 'none';
    countriesMobile.style.display = 'grid';
  } else {
    bhutan.style.display = 'none';
    china.style.display = 'none';
    india.style.display = 'none';
    nepal.style.display = 'none';
    tibet.style.display = 'none';
    bangladesh.style.display = 'grid';
    countriesMobile.style.display = 'none';
    bangladeshRadio.checked = true;
  }
}

document.addEventListener('DOMContentLoaded', adjustDisplay);

window.addEventListener('resize', adjustDisplay);



const cardText = document.querySelectorAll('.card__descr__text');
const viewMore = document.querySelectorAll('.view__more');

const maxLength = 154;

for (let i = 0; i < cardText.length; i++) {
  const initialText = cardText[i].textContent;
  if (initialText.length > maxLength) {
    cardText[i].textContent = initialText.substring(0, maxLength) + "...";
    viewMore[i].textContent = 'view more...';
  }

  viewMore[i].addEventListener('click', function() {
    console.log(initialText.length);
    if (initialText.length > maxLength) {
      cardText[i].textContent = initialText.substring(0, maxLength) + "...";
      viewMore[i].textContent = 'view more...';
    } else {
      cardText[i].textContent = initialText[i];
      viewMore[i].textContent = 'view less...';
    }
  });
}


