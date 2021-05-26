document.addEventListener('DOMContentLoaded',function(){
    var stop = document.getElementById('stopButton')
    var stopLight = document.getElementById('stopLight')
    stop.addEventListener('click', function(){
      var prev = document.querySelector('.stop')
      if (prev) {
        stopLight.className = "bulb"
        console.log("Stop bulb off")
      }else{
        stopLight.className += " stop"
      }
    })
    stop.addEventListener('mouseenter', e => {
      console.log("Entered Stop button ")
    })
    stop.addEventListener('mouseleave', e => {
      console.log("Left Stop button ")
    })



    var slow = document.getElementById('slowButton')
    var slowLight = document.getElementById('slowLight')
    slow.addEventListener('click', function(){
      var prev = document.querySelector('.slow')
      if (prev) {
        slowLight.className = "bulb"
      }else{
        slowLight.className += " slow"
      }
    })
    slow.addEventListener('mouseenter', e => {
      console.log("Entered Slow button ")
    })
    slow.addEventListener('mouseleave', e => {
      console.log("Left Slow button ")
    })



    var go = document.getElementById('goButton')
    var goLight = document.getElementById('goLight')
    go.addEventListener('click', function(){
      var prev = document.querySelector('.go')
      if (prev) {
        goLight.className = "bulb"
      }else{
        goLight.className += " go"
      }
    })
    go.addEventListener('mouseenter', e => {
      console.log("Entered Go button ")
    })
    go.addEventListener('mouseleave', e => {
      console.log("Left Go button ")
    })

  });