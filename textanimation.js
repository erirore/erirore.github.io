var wss_i = 0;
var wss_array = [ "WELCOME TO BLESSED ESE",
                  "FURNITURE AND INTIRIOR DECORATION",
                  "WE GIVE THE BEST FINICHING  ",
                  "CUSTOMAR IS A KING ",
                  "WE DELIVER TO YOUR DOOR STEP",
                  "WE GIVE BEST QUALITY AND PROFECTIONA ITERIOR DECOR",];
var wss_elem;
function wssNext(){
   wss_i++;
   wss_elem.style.opacity = 0;
   if(wss_i > (wss_array.length -1)){
   wss_i = 0;
   }
   setTimeout('wssSlide()' , 2000);
}
function wssSlide(){
  wss_elem.innerHTML = wss_array[wss_i];
  wss_elem.style.opacity = 1;
  setTimeout('wssNext()' , 5000);
}
