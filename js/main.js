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
alert('success');
}

function myErrorListener(xhr, ajaxOptions, thrownError)
{
alert(thrownError);

}

});

