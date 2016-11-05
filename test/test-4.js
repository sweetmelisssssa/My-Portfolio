function getEmployees() {

var generatedEmployees = [

	{"name":"Melissa", "age":39},
	{"name":"Danielle", "age":26},
	{"name":"Santiago", "age":32},
	{"name":"Karen", "age":26},
	{"name":"Earle", "age":45},

];

return generatedEmployees;

}

function calculate(){

  var employees = getEmployees();
  var list = "";
  var sumOfAges = o;

    for (var i = 0; i < employees.length; i++) {

        var currentEmployee = employees[i];
        list = list + "<li>" + currentEmployee.name + "</li>";

        sumOfAges = sumOfAges + currentEmployee.age;

    }

    var newlist = "<ul>" + list + "</ul>";
    var average = sumOfAges / employees.length;

    var result = $("#result");
    result.html(newlist);

    var ageResult = $("#age-result");
    ageResult.html(average);

}

var myButton = $("#my-button");
myButton.click(calculate);
