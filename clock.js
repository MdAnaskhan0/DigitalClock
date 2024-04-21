function startTime(){
     //Function to start displaying current time

     //Get  the current date and time
     const date = new Date();
     const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const dayArr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

     
     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();
     let am_pm = "AM";
     

     

     if (h >= 12) {
          if (h > 12) h -= 12;
          am_pm = "PM";
     } else if (h == 0) {
          h = 12;
          am_pm = "AM";
     }

     m = checkTime(m);
     s = checkTime(s);
     h = checkTime(h);

     setTimeout(startTime, 1000);

     document.getElementById("txt").innerHTML = h + ":" + m + ":" + s + " " + am_pm;
     document.getElementById("day").innerHTML = `${dayArr[date.getDay()]} <br> ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

}

function checkTime(i){
     if(i < 10){
          i =  "0" + i; 
     }
     return i;
}
