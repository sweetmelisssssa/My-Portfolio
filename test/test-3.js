function calculate() {

var employees = [

	{"name":"Melissa"},
	{"name":"Danielle"},
	{"name":"Santiago"},
	{"name":"Karen"},
	{"name":"Earle"},

];

	var list = '';

    for (var i = 0; i < employees.length; i++) {

        var student = employees[i].name;
        list = list + "<li>" + student + "</li>";

    }

    var newList

    var result = $("#result");
    result.html(list);


}

var myButton = $("#my-button");
myButton.click(calculate);