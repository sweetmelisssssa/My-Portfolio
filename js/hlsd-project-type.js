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
		drawAllProject(data.projectTypeList);

		}

		function myErrorListener(xhr, ajaxOptions, thrownError)
		{
		console.log(thrownError);
		}


		$.urlParam = function(typeName){
var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
return results[1] || 0;
}


});
	
		function drawAllProject(projectType)
		{

			var closeString = "</div><div class='row'>";
			var aux = 0;

			$("#hlsd-project-type-container").append("<div class='row'>");
			console.log("opening project")
			for( var i = 0; i < projectType.length; i++) {
				aux++;
				
				var projectString = drawProject(projectType[i], i);

				$("#hlsd-project-type-container").append(projectString);
				console.log("drawing project");


				if(aux==3)

				{
					aux = 0;
					$("#hlsd-project-type-container").append(closeString);
					console.log("closing/opening row")
				}

			}

			$("#hlsd-project-type-container").append("</div>");
			console.log("closing last row")
		}

		function drawProject(projectType, projectNumber)
		{
		
		var aux = '<div class="col-sm-4"><img class="hlsd-logo-list-page-img" src="'+projectType.thumb+'" width ="275px"><h3 class="logo-list-page-logo-name?id='+projectType+'">'+projectType.name+'</h3><p class="logo-list-page-description">'+projectType.description+'</p></div>';


		return aux;

		}
