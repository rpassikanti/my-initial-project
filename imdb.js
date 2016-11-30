$(document).ready(function(){
    console.log(Date());
    $('.lead').text(Date());
    var movies=
 {
  "0": {
    "movieName": "D-Day",
    "movieid": 16461,
    "actor": "Arjun Rampal,Huma Qureshi,Shruti Haasan,Irrfan Khan,Rishi Kapoor,Nassar,Sandeep Kulkarni,KK Raina,Chandan Roy Sanyal,Aakash Daahiya,Shriswara,Wali Khan's wife,Dwij,Wali Khan's son,Imran Hasnee,Nissar Khan,Maryam Zakaria",
    "releaseyear": "2013",
    "description": "A team of experts dispatched to bring in The Most Wanted Man in India almost achieves the unthinkable ... until something goes horribly wrong.",
    "duration": "2:29:45",
    "genre": "Thriller",
    "director": "Nikhil Advani",
    "imdbRating": 4.5,
    "rating": 3,
    "musicDirector": "Shankar-Ehsaan-Loy",
    "downloadUrl": "http://akamai1.bigflix.com/vault/videoclips/movies/D-Day_BigFlix_964.mp4",
    "downloadUrl2": "null",
    "downloadUrl3": "null",
    "downloadUrl4": "http://akamai1.bigflix.com/vault/videoclips/movies/D-Day_BigFlix_620.mp4",
    "imageUrl": "http://akamai.bigflix.com//images/vod/movies/160X100/dday.jpg",
    "imageUrl_200X280": "http://akamai.bigflix.com/images/vod/movies/200X280/d-day.jpg",
    "imageUrl_210X210": "",
    "imageUrl_420X420": "",
    "imageUrl_430X210": "",
    "imageUrl_430X550": "",
    "imageUrl_480X600": "http://akamai.bigflix.com/images/vod/movies/480X600/D-Day_480x600_a.jpg"
  },
  "status": "success",
  "powerdBy": "devru"
};
$("#imdbDiv").hide();
 
      var output;
/*$('#titleId').text(movies.title);
$('#yearId').text(movies.year);
$('#releasedId').text(movies.released);
$('#genresId').text(movies.genres);
$('#castId').text(movies.cast.directors);
$('#actorsId').text(movies.cast.actors);
$('#plotId').text(movies.plot);
$('#posterId').text(movies.poster);

$('#imdbRatingId').text(movies.imdbRating); 
console.log(movies.cast.writers);

$('#enterID').on('click', function(){
$("#imdbDiv").show();
});

$('#moviename').on('input',function(){

      var inputname=$("#moviename").val();
      if(inputname.length>0){
          $("#enterID").removeAttr("disabled");
      }
      else{
         $("#enterID").attr("disabled", true);
         $("#imdbDiv").hide();
      }
       });*/
      console.log(...movies[0]);
      	/*$.ajax({
         url: "https://imdb-api.p.mashape.com/item?imdbid="+inputname,
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('X-Mashape-Key', 'DZtFLVDn7mmshkG201aXtaHe8vUrp1uVWGNjsnfwEV6jtvhBdL');},
         success: function(data) { 
           
          $('#titleId').text(data.title);
		  $('#yearId').text(data.year);
		 $('#releasedId').text(data.released);
		 $('#genresId').text(data.genres);
		 $('#castId').text(data.cast.directors);
		 $('#actorsId').text(data.cast.actors);
		 $('#plotId').text(data.plot);
		 $('#posterId').text(data.poster);

		 $('#imdbRatingId').text(data.imdbRating);
}
});*/
      
 




});