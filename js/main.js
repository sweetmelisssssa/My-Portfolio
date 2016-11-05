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
});
	
		function drawAllProject(projects)
		{

		for( var i = 0; i < projects.length; i++) {
			
			var projectString = drawProject(projects[i]);
			$("#hlsd-project-container").append(projectString);
			alert(projectString);
		}
	
		}

function drawProject(project)
		{
		
		var aux = '<div class="col-sm-4"><img class="hlsd-index-img" src="'+project.thumb+'" width ="275px"><h3 id="hlsd-index-h3"><a href="#">Powerful Harvest</a></h3></div>';

		return aux;

		}
		
