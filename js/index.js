$(document).ready(function() {
  var lat;
  var long;
  var kTemp;
  var cTemp;
  var fTemp;
  var weatherIcon;
  var weatherIconSrc;
  var icon;

  /* if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position){
       long = position.coords.longitude;
       lat = position.coords.latitude;      
       $("#data").html("latitude" + lat + "longitude " + long);
     });    
   }*/

  var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=38.7880143&lon=-90.5163405&appid=e5dda729165a9966cbd718dc9676b938';
  $.getJSON(apiUrl, function(data) {
    
    var city = data.name;
    var weather = data.weather[0].main;
    var weatherType = data.weather[0].description;
     console.log(data);
    kTemp = data.main.temp;
    
    fTemp = (kTemp) * (9 / 5) - 459.67;
    fTemp = Math.ceil(fTemp * 10) / 10;
    
    cTemp = kTemp - 273;
    cTemp = Math.ceil(cTemp * 10) / 10;
   //// console.log(cTemp);
    $("#city").html(city);
    $("#weather").html(weather);
    $("#weatherType").html(weatherType);
    $("#temp").html(fTemp);
      icon = data.weather[0].icon ;
    weatherIcon = "http://openweathermap.org/img/w/" +icon+ ".png";
    weatherIconSrc ="<img src ="+ weatherIcon + ">";    
    //  console.log(weatherIcon);
    $("#weatherIcon").html(weatherIconSrc);
    
    switch(icon){
      case "02d":
        $(".container-fluid").css({"background-image":
"url(http://freebigpictures.com/wp-content/uploads/2009/09/sky-clouds.jpg)"});
      break; 
      case "09d":
         $(".container-fluid").css({"background-image":
"url(http://images.all-free-download.com/images/graphiclarge/free_rain_vector_background_277874.jpg)"});
     break;
      case "10d":
         $(".container-fluid").css({"background-image":
"url(http://images.all-free-download.com/images/graphiclarge/raining_185540.jpg)"});
        break;
    case "01d":
         $(".container-fluid").css({"background-image":
"url(https://cdn.cloudpix.co/images/sunny/sunny-day-wallpapers-hd-pulse-wallpaper-sunny-spring-day-in-the-field-desktop-background-direct-hd-download-for-iphone-ipad-borders-free-naruto-mobile-wallpaper-c50cbab87884248d9173b8c1f8e85f83-large-1261613.jpg)"});
        break;
         case "11d":
         $(".container-fluid").css({"background-image":
"url(https://simplygratefulhousewife.files.wordpress.com/2014/04/dscf0543.jpg)"});
        break;
      default:
        $(".container-fluid").css({"background-image":
"url(https://3.bp.blogspot.com/-3yQf0hvBTwk/UPFy0yoCUTI/AAAAAAAACJY/qSca838_kZ8/s1600/%C4%91%C6%B0%E1%BB%9Dng+s%E1%BA%AFt+t%C3%ACnh+y%C3%AAu+Uraina.jpg)"});
        
        
        
    }
  });
});