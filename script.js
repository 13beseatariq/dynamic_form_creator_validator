var json = new Array(); //to store all the form objects
var names = new Array();
var passwords_names = new Array();
var buttons_names = new Array();
var textareas_names = new Array();
var fields_count =0;
var passwords_count =0;
var buttons_count =0;
var textareas_count =0;
var radios_count =0;
function addfield ()
{
	var form = document.getElementById("form");
	var field = document.createElement("input");
	field.setAttribute("type", "text");
	fields_count++;
	field.setAttribute("name", "field"+fields_count);
	names.push("field"+fields_count);
	var label = document.createElement("p");
	var label_input = prompt("Enter Label","");
	label.appendChild(document.createTextNode(""+label_input));
	form.appendChild(label); 
	form.appendChild(field); 
	if (typeof (Storage) !== "undefined") {
    var field = {
        "html": "text",
        "label": ""+label_input,
		"name":"field"+fields_count
    };
    localStorage.setItem("person",JSON.stringify(field));
	json.push(field);
}

}
function addpassword ()
{
	var form = document.getElementById("form");
	var field = document.createElement("input");
	field.setAttribute("type", "password");
	passwords_count++;
	field.setAttribute("name", "password"+passwords_count);
		names.push("password"+passwords_count);
	var label = document.createElement("p");
	var label_input = prompt("Enter Label","");
	label.appendChild(document.createTextNode(""+label_input));
	form.appendChild(label); 
	form.appendChild(field); 
    if (typeof (Storage) !== "undefined") {
    var field = {
        "html": "password",
        "label": ""+label_input,
		"name" :"password"+passwords_count
    };
    localStorage.setItem("person",JSON.stringify(field));
	json.push(field);
}
}


function addbutton ()
{
	var form = document.getElementById("form");
	var field = document.createElement("input");
	field.setAttribute("type", "button");
	buttons_count++;
	field.setAttribute("name", "button"+buttons_count);
	var label_input = prompt("Enter Label","");
	field.setAttribute("value", ""+label_input);
	form.appendChild(field);
    if (typeof (Storage) !== "undefined") {
    var field = {
        "html": "button",
        "label": ""+label_input,
		"name" :  "button"+buttons_count
    };
    localStorage.setItem("person",JSON.stringify(field));
	json.push(field);
} 
}
function addtextarea ()
{
	var form = document.getElementById("form");
	var field = document.createElement("textarea");
	field.setAttribute("rows", "10");
	field.setAttribute("cols", "50");
	textareas_count++;	
	field.setAttribute("name", "textarea"+textareas_count);
	names.push("textarea"+textareas_count);
	var label = document.createElement("p");
	var label_input = prompt("Enter Label","");
	label.appendChild(document.createTextNode(""+label_input));
	form.appendChild(label); 
	form.appendChild(field); 
	
	if (typeof (Storage) !== "undefined") {
    var field = {
        "html": "textarea",
		"label": ""+label_input,
		"name" : "textarea"+textareas_count
    };
    localStorage.setItem("person",JSON.stringify(field));
	json.push(field);
}
}
function addsubmitbutton ()
{
	var form = document.getElementById("form");
	var field = document.createElement("input");
	field.setAttribute("type", "submit");
	form.appendChild(field); 
	if (typeof (Storage) !== "undefined") {
    var field = {
        "html": "submit"
    };
    localStorage.setItem("person",JSON.stringify(field));
	json.push(field);
} 
}
function addradiobutton ()
{
	var form = document.getElementById("form");
	var field = document.createElement("input");
	field.setAttribute("type", "radio");
	radios_count++;
	field.setAttribute("id", "radio"+radios_count);
	field.setAttribute("name", "radio");
	names.push("radio");
	var label = document.createElement("label");
	label.setAttribute("for", "radio"+radios_count);
	var label_input = prompt("Enter Label","");
	label.appendChild(document.createTextNode(""+label_input));
	form.appendChild(label); 
	form.appendChild(field); 
    if (typeof (Storage) !== "undefined") {
    var field = {
        "html": "radio",
        "label": ""+label_input,
		"name" :"radio",
		"id" : "radio"+radios_count
    };
    localStorage.setItem("person",JSON.stringify(field));
	json.push(field);
} 
}








function printdata()
{
	var form = document.getElementById("form");
	var p = document.createElement("p");
	p.appendChild(document.createTextNode("New Retrieved Form"));
	form.appendChild(p);
	for (var i=0;i<json.length; i++)
	{
	   if (json[i].html=="textarea")
	   {
		    var form = document.getElementById("form");
			var field = document.createElement("textarea");
			field.setAttribute("rows", "10");
			field.setAttribute("cols", "50");
			field.setAttribute("name",json[i].name);
			var label = document.createElement("p");
			label.appendChild(document.createTextNode(""+json[i].label));
			form.appendChild(label); 
			form.appendChild(field); 	
	   }
	   else if (json[i].html=="submit")
	   {
		   	var form = document.getElementById("form");
			var field = document.createElement("input");
			field.setAttribute("type", "submit");
			form.appendChild(field);
			 
	    }
		else if (json[i].html="radio")
		{
			var form = document.getElementById("form");
			var field = document.createElement("input");
			field.setAttribute("type", "radio");
			radios_count++;
			field.setAttribute("id", ""+json[i].id);
			field.setAttribute("name", "radio");
			names.push("radio");
			var label = document.createElement("label");
			label.setAttribute("for", ""+json[i].id);
			var label_input = json[i].label;
			label.appendChild(document.createTextNode(""+label_input));
			form.appendChild(label); 
			form.appendChild(field); 
		}
    	else
		{
			var form = document.getElementById("form");
			var field = document.createElement("input");
			var label = document.createElement("p");
			if (json[i].html=="text")
			{		
			field.setAttribute("type", "text");
			field.setAttribute("name",json[i].name);
			label.appendChild(document.createTextNode(""+json[i].label));
			}
			else if  (json[i].html=="password")
			{
				field.setAttribute("type", "password");
				field.setAttribute("name",json[i].name);
				label.appendChild(document.createTextNode(""+json[i].label));
			}
			else if  (json[i].html=="button")
			{
				field.setAttribute("name",json[i].name);
				field.setAttribute("type", "button");
				field.setAttribute("value", ""+json[i].label);
			}
						
			form.appendChild(label); 
			form.appendChild(field); 
		}
		
	}//main for loop ends here
	
}//print data ends here
function validateForm() 
{
	var check=true;
	var redio_check=false;
	for (var i=0; i<names.length; i++)
	{
		if (names[i][0]=='f')
		{
			var x = document.forms["dynamic_form"][""+names[i]].value;
			
			if (!(x == null || x == ""))//if name field is not black move inside for further check
			{
				if (x.lenght<5)
				{
					alert("Your Text field should have at least 5 Character");
					check=false;
				}
				else
				{
					for (var j=0; j<x.length;j++)
					{
						if (!((x.charCodeAt(j)==32||(x.charCodeAt(j)>=65 && x.charCodeAt(j)<=90)||(x.charCodeAt(j)>=97 && x.charCodeAt(j)<=122))))
						{
							alert("You Cannot Use Specail Characters Or Numbers In Text Field");
							check=false;
							break;
						}	
					}
				}
			}
			else
			{
				alert("You Cannot Leave Text Field Empty");
						check=false;
			}
			
		}//field if closes here
		else if (names[i][0]=='p')
		{
			var x = document.forms["dynamic_form"][""+names[i]].value;
			
			if (!(x == null || x == ""))//if name field is not black move inside for further check
			{
				if (x.lenght<8)
				{
					alert("Your password field should have at least 5 Character");
					check=false;
				}
				else
				{
					for (var j=0; j<x.length;j++)
					{
						if (x.charCodeAt(j)==32)
						{
							alert("You Cannot Use spaces in password field");
							check=false;
							break;
						}	
					}
				}
			}
			else
			{
				alert("You Cannot Leave Password Field Empty");
						check=false;
			}
			
		}//password if closes here
		else if (names[i][0]=='t')
		{
			var x = document.forms["dynamic_form"][""+names[i]].value;
			
			if (!(x == null || x == ""))//if name field is not black move inside for further check
			{
				if (x.lenght<50)
				{
					alert("Your text area should have at least 50 Character");
					check=false;
				}
				
			}
			else
			{
				alert("You Cannot Leave Text area Empty");
						check=false;
			}
			
		}//textarea if closes here 
		else if (names[i][0]=='r')
		{
			var x = document.getElementById(""+json[i].id);
			if (x.checked)
			{
				redio_check=true;
			}
		}//textarea if closes here 
	}//main for loop ends here
		
	if (redio_check==false)
	{
		check=false;
		alert ("Please Select At Least One Radio Button")
	}
/*		]
		
		if (x == null || x == "") 
		{
			alert(names[i]+" must be filled out");
			check = false;
		}
		*/
	
	
	if(check==false)
		return false;
}