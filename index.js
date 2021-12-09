function getApiApod(){
   var date = $('#date').val()
   $.ajax({
      type: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
      success: function (response) {
         var divExplanation = $('<p></p>').append(response.explanation)
         var imgEspaco = $('<img src="'+response.url+'">')
         $('#info-apod').append(imgEspaco)
        $('#info-apod').append(divExplanation); 
      }
   });
}