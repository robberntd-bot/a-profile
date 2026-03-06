
const titles=document.querySelectorAll('.sparkle-title')

titles.forEach(title=>{

setInterval(()=>{

const sparkle=document.createElement('span')
sparkle.innerHTML='✨'
sparkle.style.position='absolute'
sparkle.style.left=Math.random()*100+'%'
sparkle.style.animation='sparkle 1.5s linear infinite'

title.appendChild(sparkle)

setTimeout(()=>{sparkle.remove()},1500)

},500)

})
