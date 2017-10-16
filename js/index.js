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