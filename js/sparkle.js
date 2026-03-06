
const titles=document.querySelectorAll('.sparkle-title')

titles.forEach(title=>{

setInterval(()=>{

const sparkle=document.createElement('span')
sparkle.classList.add('sparkle')
sparkle.innerHTML='✦'

sparkle.style.left=Math.random()*100+'%'

title.appendChild(sparkle)

setTimeout(()=>{
sparkle.remove()
},1200)

},900)

})
