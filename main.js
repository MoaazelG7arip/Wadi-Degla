

let card = document.querySelector('.three .right');
let img_animation = document.querySelector('.three .right div');



animateBackground = (event)=>{
    let newX = ((event.clientX - card.getBoundingClientRect().left) / card.offsetWidth) * 100;
    let newY = ((event.clientY - card.getBoundingClientRect().top) / card.offsetHeight) * 100;
    console.log(newX, newY);
    img_animation.style.cssText = `background-color: rgba(255, 255, 255, 0.358); clip-path: circle(150% at ${newX}% ${newY}%)`
}
stopAnimation = ()=>{
    img_animation.style.cssText = "background-color:transparent;clip-path: circle(0% at 50% 50%);"
}