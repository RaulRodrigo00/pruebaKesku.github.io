// SCROLL DE PATHS
const svgPaths = document.querySelectorAll('.kesku-paths');

const circles = document.querySelectorAll('.kesku-circles');

const keskuLogo = document.querySelector('#kesku-svg-logo');
const keskuApiPath = document.querySelector('#kesku-api-path');

/*const parrafo = document.querySelector('.pprueba');
const offset = document.querySelector('.offset');
const offsetslice = document.querySelector('.offsetslice');

//parrafo.textContent="prueba9";
*/
const keskuTriang = document.getElementById('keskuTriang');
keskuTriang.style.visibility='visible';


window.addEventListener('DOMContentLoaded', function() {
  svgPaths.forEach(svg => {
    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;
    keskuTriang.classList.remove('triangAnimation')




    window.addEventListener('scroll', function() {
      svgPaths.forEach(svg => {
        const length = svg.getTotalLength();
      
        svg.style.strokeDasharray = length;
      
        svg.style.strokeDashoffset = length;
    
        var scrollpercent = ((document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) +.1 ;
        if(scrollpercent === 1.1){
          scrollpercent = 1;
        }
        if(scrollpercent === .1){
          scrollpercent = 0;
        }
        //  console.log(scrollpercent)
        const draw = length * scrollpercent;
    
        svg.style.strokeDashoffset = length - draw;
    
        //offset.textContent=svg.style.strokeDashoffset;
        //offsetslice.textContent=svg.style.strokeDashoffset.slice(0, -2);
    
        //console.log("el dashoffset", svg.style.strokeDashoffset);
        //console.log("el slice es: ", svg.style.strokeDashoffset.slice(0, -2));
    
        if(svg.style.strokeDashoffset <= 100 || svg.style.strokeDashoffset.slice(0, -2) <= 100) {
          keskuApiPath.classList.add('show');
        } else {
          keskuApiPath.classList.remove('show');
        }
    
        if(svg.style.strokeDashoffset <= 150 || svg.style.strokeDashoffset.slice(0, -2) <= 150) {
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




    
  });
});
/*

*/
