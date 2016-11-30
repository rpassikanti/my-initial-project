$(document).ready(function(){
    console.log(Date());
    $('.lead').text(Date());
/*var weatherData={  
   "coord":{  
      "lon":-0.13,
      "lat":51.51
   },
   "weather":[  
      {  
         "id":804,
         "main":"Clouds",
         "description":"overcast clouds",
         "icon":"04n"
      }
   ],
   "base":"cmc stations",
   "main":{  
      "temp":278.95,
      "pressure":1026,
      "humidity":70,
      "temp_min":277.85,
      "temp_max":280.15
   },
   "wind":{  
      "speed":2.6,
      "deg":40
   },
   "clouds":{  
      "all":88
   },
   "dt":1458348648,
   "sys":{  
      "type":1,
      "id":5091,
      "message":0.0151,
      "country":"GB",
      "sunrise":1458367477,
      "sunset":1458411157
   },
   "id":2643743,
   "name":"London",
   "cod":200
};*/

$("#weatherDiv").hide();
 
      var output;


var inputname ;

$('#enterID').on('click', function(){
$("#weatherDiv").show();
 inputname =$("#cityname").val();
$.ajax({
         url: "http://api.openweathermap.org/data/2.5/weather?q="+inputname+"&APPID=1d5768bc9a19804fc0dd59e35738c132",
         type: "GET",
         success: function(weatherData) { 
         $('#nameId').text(weatherData.name);
          $('#skyId').text(weatherData.weather[0].main);
          $('#tempId').text(weatherData.main.temp);
          $('#humidityId').text(weatherData.main.humidity);
          $('#pressureId').text(weatherData.main.pressure);
          $('#maxtempId').text(weatherData.main.temp_max);
          $('#mintempId').text(weatherData.main.temp_min);
          $('#speedId').text(weatherData.wind.speed); 
        
           var sunriseDate = new Date(1000*weatherData.sys.sunrise);
          $('#sunriseId').text(sunriseDate.toLocaleString());
          var sunsetDate= new Date(1000*weatherData.sys.sunset);
          $('#sunsetId').text(sunsetDate.toLocaleString()); 
          $('#weatherIcon').attr("src", "http://openweathermap.org/img/w/"+weatherData.weather[0].icon+".png");
      
          }

      });

});

$('#cityname').on('input',function(){
inputname =$("#cityname").val();
      
      if(inputname.length>0){
          $("#enterID").removeAttr("disabled");
      }
      else{
         $("#enterID").attr("disabled", true);
         $("#weatherDiv").hide();
      }
      

       });


});




