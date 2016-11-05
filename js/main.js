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
	
		function drawAllProject(projects)
		{

			var closeString = "</div><div class='row'>";
			var aux = 0;

			$("#hlsd-project-container").append("<div class='row'>");
			console.log("opening project")
			for( var i = 0; i < projects.length; i++) {
				aux++;
				
				var projectString = drawProject(projects[i]);

				$("#hlsd-project-container").append(projectString);
				console.log("drawing project");


				if(aux==3)

				{
					aux = 0;
					$("#hlsd-project-container").append(closeString);
					console.log("closing/opening row")
				}

			}

			$("#hlsd-project-container").append("</div>");
			console.log("closing last row")
		}

		function drawProject(project)
		{
		
		var aux = '<div class="col-sm-4"><img class="hlsd-index-img" src="'+project.thumb+'" width ="275px"><h3 id="hlsd-index-h3"><a href="#">Powerful Harvest</a></h3></div>';

		return aux;

		}

		function drawSpecificProject(project)
		{
		
		var specificProject = '<div class="Project1"><div class="row"><div class="col-sm-4"><h1>PowerFul Harvest</h1></div><div class="col-sm-8"><img width=300px src="img/newlimeco_logo-1024x1024.png"><p>Powerful Harvest is a tropical produce line from New Limeco, LLC specializing in the finest quality avocados, coconuts, papayas, and guavas. They promote the idea that being healthy starts from what you put into your body. For this reason, three of their four products carry the Non-GMO certification. With years of experience in the produce industry, New Limeco prides themselves with being able to provide consumers with top-of-the-line quality produce while utilizing state-of-the-art sanitary practices, equipment, and production techniques while still retaining their hands on “mom-and-pop company” values. When they came to us to brand their new Powerful Harvest line they already had their New Limeco logo, but, they needed a way to incorporate the new line of produce with their existing products. (All photography was done by Hey Little Sister Design.)</p><h3>Logo Inspiration</h3><img width=300px src="img/Powerful-Harvest-Mood-Board-1024x611.png"><h3>Logo Colors and Typeface</h3><img width=300px src="img/Powerful-Harvest_Colors-01.png"><h3>Different Produce Logos</h3><img width=300px src="img/Powerful-Harvest-Produce-Logo.png"><h3>Produce Logo</h3><img width=300px src="img/nlc-ph-avocado-label.jpg"> <h3 href="www.newlimeco.com">New Limeco Website</h3><img width=300px src="img/newlimeco_website_mockup-1024x683.png"></div></div></div>';

		return specificProject;

		}
		
