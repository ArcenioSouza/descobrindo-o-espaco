function getApiApod() {
   var date = $("#date").val();
   $.ajax({
      type: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=1smXQq2I9HaJBSmVAQPc1yT7ylgQyXQEOuMGmUp4&date=${date}`,

      success: function (response) {
         console.log(response)
         var divExplanation = $('<img src="' +response.url +'"><div id="description"><h1>"' +
               response.title +
               '"</h1><p>"' +
               response.explanation +
               '"</p></div>'
         );

         $("#info-apod").html(divExplanation);
      },
   });
}
