var dates = new Date();
var day = dates.getDay();
if(day === 0){
      day = 'SunDay' ;
}else if(day === 1){
      day = 'MonDay' ;
}else if(day === 2){
      day = 'TuesDay' ;
}else if(day === 3){
      day = 'WednesDay' ;
}else if(day === 4){
        day = 'ThurseDay';
}else if(day === 5){
        day = 'FriDay';
}else if(day === 6){
      day = 'SaturDay' ;
}
document.querySelector('.dd').textContent = day;


//for date
dat();
function dat(){
      var dates = new Date();
      var dd = dates.getDay() - 1;
      var mm = dates.getMonth() + 1;
      var yy = dates.getFullYear();
      dd < 10 ? dd = '0' + dd: dd;
      mm < 10 ? mm = '0' + mm : mm;
      var  date =   dd + '-' + mm + '-' + yy;
      document.querySelector('.dating').textContent = date;
      setTimeout(dat, 1000);
}



//for display time
timer();
function timer(){
      var dates = new Date();
      var hh = dates.getHours();
      var min = dates.getMinutes();
      var ss = dates.getSeconds();
      hh < 10 ? hh = '0' + hh : hh;
      min < 10 ? min = '0'+ min : min;
      ss < 10 ? ss = '0' + ss : ss;
      var time = hh + ':' + min + ':' + ss;
      if(hh >= 13){
            time = time + ' PM' ;
      } else{
            time = time+ ' AM'
      }
      document.querySelector('.times').innerHTML = time;
      setTimeout (timer, 1000);
}

//document.querySelector('.day').textContent += new Date().toLocaleDateString();
//document.querySelector('.date').innerHTML += hh + '-' + min + '-' + ss;
//new Date().toLocaleTimeString(); //dd + '-' + mm + '-' + yy;