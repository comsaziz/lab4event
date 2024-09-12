let stop = document.getElementById('stopButton')
let slow = document.getElementById('slowButton')
let go = document.getElementById('goButton')
let stopLight = document.getElementById('stopLight')
let slowLight = document.getElementById('slowLight')
let goLight = document.getElementById('goLight')


stop.addEventListener("click", ()=>{
    stopLight.style.backgroundColor = "red"
    slowLight.style.backgroundColor = "black"
    goLight.style.backgroundColor = "black"
    // text.textContent = stopLight.value

})

slow.addEventListener("click", ()=>{
    slowLight.style.backgroundColor = "yellow"
  stopLight.style.backgroundColor = "black"
    goLight.style.backgroundColor = "black"
    // text.textContent = slowLight.value

})
go.addEventListener("click", ()=>{
    stopLight.style.backgroundColor = "black"
    slowLight.style.backgroundColor = "black"
    goLight.style.backgroundColor = "green"
    // text.textContent = goLight.value

})
