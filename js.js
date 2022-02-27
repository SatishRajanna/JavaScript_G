let body=document.body
body.setAttribute('style','display:flex; align-items:center; flex-direction:column; justify-content:center;')

let h1=document.createElement('h1')
body.append(h1)
body.innerHTML='<h1>Animal Generator</h1>'
let div=document.createElement('div')
body.append(div)
div.setAttribute('style','width:500px; height:500px; background-color:red;')


let image=document.createElement('img')
div.append(image)
image.setAttribute('style','width:500px; height:500px;')
image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhgEdvLzosu8i0z546AnDpygQy0brKoA-2w&usqp=CAU'

let title =document.createElement('h3')
div.append(title)
title.setAttribute('style','text-align:center;')



let button =document.createElement('button')
button.innerText='Click'
div.append(button)
let btn=document.getElementsByTagName('button')[0]
btn.setAttribute('style','display:block; width:100%; height:50px; overflow:hidden; font-size:30px;')


let getAnimalData=async()=>{
    let data=await fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    let res=await data.json()
    let img=await res.image_link
    let name=await res.name
    image.src=img
    title.innerText=name
    console.log(res)  
}
btn.addEventListener('click',getAnimalData)
