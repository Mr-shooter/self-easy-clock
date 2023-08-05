const time = document.querySelector("h1")
const data = document.querySelector("h2")
const timezone= document.querySelector("p")
 function setTime(){
    const now = new Date()
    const now_time = now
    .toLocaleString({},{timeZoneName:"short"})
    .split(" ")
    time.innerHTML=now_time[1]
    data.innerHTML=now_time[0].slice(0, -1)
    timezone.innerHTML= now_time[2]
 }
 setInterval(setTime, 1000)
 setTime()