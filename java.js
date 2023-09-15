const form= document.getElementById("form")
const input=document.getElementById("input")
const button= document.getElementById('button')
const itemcontainer=document.getElementById('item-container')
let toData=[]

form.addEventListener('submit',(e)=>{
    e.preventDefault()

})

const getData=()=>{
    const storage = localStorage.setItem localStorage.getItem('local');
    if(storage){
    toData = JSON.parse(storage)
    console.log('ada loca', toData)    
}
    else{
        localStorage.setItem('local',JSON.stringfy)
    }
}