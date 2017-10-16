/* Fungsi Untuk Load Header*/

function loadComponent()
{
	loadHeader();
	loadNavbar();
	loadFooter();
}

function loadHeader()
{
	/**
	 * Surrond with try catch because it have chance of Networking problem.
	 */
	try
	{
		fetch("master_header.html")
			.then(response => response.text())
			.then(data => document.querySelectorAll(".header")[0].innerHTML = data);
	}
	catch (exception)
	{ }
}

function loadNavbar()
{
	/**
	 * Surrond with try catch because it have chance of Networking problem.
	 */
  	try
  	{
		/**
		 * Load The Navbar
	  	 */
		var navbar = fetch("master_nav.html")
			.then(response => response.text())
			.then(data => document.querySelectorAll(".nav")[0].innerHTML = data);

		/**
		 * Set Active Tab
		 */
		Promise.resolve(navbar)
			.then(() => activePage());
	}
	catch (exception)
	{ }
}

function loadFooter()
{
	/**
	 * Surrond with try catch because it have chance of Networking problem.
	 */
	try
	{
		fetch("master_footer.html")
				.then(response => response.text())
				.then(data => document.querySelectorAll(".footer")[0].innerHTML = data);
	}
	catch (exception)
	{ }
}

function activePage()
{
	var page = document.querySelectorAll("meta[name=active-page]")[0].getAttribute("content");
	try
	{
		document.getElementById(page).classList.add("active");
	}
	catch (exception) { }
}

function validateLoginInput()
{
	var error = false;

	var inputs = document.querySelectorAll("input");

	for (var i = 0; i < inputs.length; i++)
	{
		var element = document.querySelectorAll("h4")[i];
		var elementName = inputs[i].getAttribute("for");

		if (inputs[i].value == "")
		{
			element.innerHTML = elementName + " can't be empty!";
			element.style.color = "#A94442";
			error = true;
		}
		else
		{
			element.innerHTML = elementName;
			element.style.color = "#8B8787";
		}
	}
	return error;
}

function login()
{
	if (!validateLoginInput())
	{
		alert("Login Berhasil!");
	}
}

function validateRegister()
{
	var inputs = document.querySelectorAll("input");
	var inputTitle = document.querySelectorAll("h4");
	var genderChecked = false;

	for (var i = 0; i < inputs.length; i++)
	{
		if (inputs[i].type == "text" ||
			inputs[i].type == "email" ||
			inputs[i].type == "password")
		{
			if (inputs[i].value == "")
			{
				inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder") + " can't be empty!";
				inputTitle[i].style.color = "#A94442";
				error = true;
			}
			else if (inputs[i].name == "input-username")
			{
				var pattern = /(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/;

				if (inputs[i].value.length < 5)
				{
					inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder") + " must contain at least 6 characters!";
					inputTitle[i].style.color = "#A94442";
					error = true;
				}
				else if (!pattern.test(inputs[i].value))
				{
					inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder") + " must contain characters and numbers!";
					inputTitle[i].style.color = "#A94442";
					error = true;
				}
				else
				{
					inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder");
					inputTitle[i].style.color = "#383838";
					error = false;
				}
			}
			else if (inputs[i].type == "email")
			{
				/**
				 * Validate Basic Email Pattern
				 */
				var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
				if (!pattern.test(inputs[i].value))
				{
					inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder") + " is not valid!";
					inputTitle[i].style.color = "#A94442";
					error = true;
				}
				else
				{
					inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder");
					inputTitle[i].style.color = "#383838";
					error = false;
				}
			}
			else
			{
				inputTitle[i].innerHTML = inputs[i].getAttribute("placeholder");
				inputTitle[i].style.color = "#383838";
				error = false;
			}
		}

		/**
		 * Validate Birthday
		 */
		if (inputs[i].type == "date")
		{	
			var pattern = /([0-9])+\/+([0-9])+\/+([0-9])+/;

			if (inputs[i].value == "")
			{
				inputTitle[5].innerHTML = "Birthday input is invalid format!";
				inputTitle[5].style.color = "#A94442";
				error = true;
			}
			// else if (!pattern.test(inputs[i].value))
			// {
			// 	inputTitle[5].innerHTML = "Birthday ";
			// 	inputTitle[5].style.color = "#A94442";
			// 	error = true;
			// }
			else
			{
				inputTitle[5].innerHTML = "Birthday";
				inputTitle[5].style.color = "#383838";
				error = false;
			}
		}

		if (inputs[i].type == "radio")
		{
			if (inputs[i].checked)
			{
				genderChecked = true;
				error = false;
			}
		}
	}

	/**
	 * Validate Address
	 */
	var addressTitle = document.querySelectorAll("h4")[6];
	var textarea = document.querySelectorAll("textarea")[0];
	if (textarea.value == "")
	{
		addressTitle.innerHTML = textarea.getAttribute("placeholder") + " can't be empty!";
		addressTitle.style.color = "#A94442";
		error = true;
	}
	else if (textarea.value.toLowerCase().indexOf("jalan") < 0)
	{
		addressTitle.innerHTML = textarea.getAttribute("placeholder") + " must contain word \"Jalan\"!";
		addressTitle.style.color = "#A94442";
		error = true;
	}
	else
	{
		addressTitle.innerHTML = textarea.getAttribute("placeholder");
		addressTitle.style.color = "#383838";
		error = false;
	}

	/**
	 * Validate Gender
	 */
	var genderTitle = document.querySelectorAll("h4")[4];
	if (!genderChecked)
	{
		genderTitle.innerHTML = "Gender must be selected at least one!";
		genderTitle.style.color = "#A94442";
		error = true;
	}
	else
	{
		genderTitle.innerHTML = "Gender";
		genderTitle.style.color = "#383838";
		error = false;
	}

	for (var i = 0; i < inputTitle.length; i++)
	{
		console.log(inputTitle[i].style.color);
		if (inputTitle[i].style.color == "rgb(169, 68, 66)")
		{
			return false;
		}
	}

	return true;
}

function register()
{
	if (validateRegister())
	{
		setTimeout(() =>
		{
			alert("Registrasi Berhasil!");
		}, 500);
	}
}