$( document ).ready(function() {
console.log( "ready!" );

	var requestURL = "https://sweetmelisssssa.github.io/my-portfolio/data.json";

	$.ajax({
	  method: "GET",
	  url: requestURL,
	  success: mySuccessListener,
	  error: myErrorListener,
	  dataType: 'json'

	});

		function mySuccessListener(data)
		{
		drawAllProject(data.projects);

		}

		function myErrorListener(xhr, ajaxOptions, thrownError)
		{
		console.log(thrownError);
		}


		$.urlParam = function(name){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
return results[1] || 0;
}


});
	
		function ()
		{

			
		}

		function ()
		{
		

		}

		
