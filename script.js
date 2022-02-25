// SCROLL DE PATHS
const svgPaths = document.querySelectorAll('.kesku-paths');

const circles = document.querySelectorAll('.kesku-circles');

const keskuLogo = document.querySelector('#kesku-svg-logo');
const keskuApiPath = document.querySelector('#kesku-api-path');

const keskuTriang = document.getElementById('keskuTriang');
keskuTriang.style.visibility='visible';


window.addEventListener('DOMContentLoaded', function() {
  svgPaths.forEach(svg => {
    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;
    keskuTriang.classList.remove('triangAnimation')

  });
});

window.addEventListener('scroll', function() {
  svgPaths.forEach(svg => {
    const length = svg.getTotalLength();
  
    svg.style.strokeDasharray = length;
  
    svg.style.strokeDashoffset = length;

    const scrollpercent = ((document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));

    //  console.log(scrollpercent)
    const draw = length * scrollpercent;

    svg.style.strokeDashoffset = length - draw;


    console.log("prueba11");
    console.log("el dashoffset", svg.style.strokeDashoffset);
    //console.log("el slice es: ", svg.style.strokeDashoffset.slice(0, -2));

    if(svg.style.strokeDashoffset <= 150 || svg.style.strokeDashoffset.slice(0, -2) <= 150) {
      keskuApiPath.classList.add('show');

    } else {
      keskuApiPath.classList.remove('show');

    }

    if(svg.style.strokeDashoffset <= 200 || svg.style.strokeDashoffset.slice(0, -2) <= 200) {
      keskuLogo.classList.add('animated');
      keskuTriang.classList.add('triangAnimation');
    } else {
      keskuLogo.classList.remove('animated');
      keskuTriang.classList.remove('triangAnimation');
    }


  });

  circles.forEach(circle => {
    let circleTop = circle.getBoundingClientRect().top;

    if(circleTop - 250 < this.window.scrollY) {
      circle.classList.add('show');
    } else {
      circle.classList.remove('show');
    }
  });
});