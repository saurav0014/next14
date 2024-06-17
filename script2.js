function moonClicked(){
  let launch=document.getElementById("launch")
  launch.style.transition='0.5s'
  launch.style.opacity=1;

  let nav=document.getElementById("navigation")
  nav.style.transition='0.5s'
  nav.style.opacity=0;

  let social=document.getElementById("socials")
  social.style.transition='0.5s'
  social.style.opacity=0;

  let desc=document.getElementById("desc")
  desc.style.transition='0.5s'
  desc.style.opacity=0;

  let moon=document.getElementById("moon")
  moon.style.transition='0.5s'

  setTimeout(() => {
  let inn=document.getElementById("inn")
  inn.style.transition='0.5s'
  inn.style.opacity=1;
  }, 500);
  console.log('c')
  
let m=document.getElementById('moon')
m.classList.add('animate')
m.style.animation='m 2s forwards';

let e=document.getElementById('earth')
e.classList.add('animate')
e.style.animation='e 2s forwards';
}

for (let i =0;i<=50;i++){
  const stars=document.createElement('div')
  const height=Math.floor(Math.random()*100)
  const width=Math.floor(Math.random()*100)
  stars.style.position='absolute'
  stars.style.height='2px'
  stars.style.width='2px'
  stars.style.borderRadius='50%'
  stars.style.backgroundColor='white'
  stars.style.left=height+"%"
  stars.style.top=width+"%"
  document.body.appendChild(stars)
}