/* Fungsi Untuk Load Header*/

function loadComponent()
{
	loadHeader();
	loadNavbar();
	loadFooter();
}

function loadHeader()
{
	fetch("master_header.html")
		.then(response => response.text())
		.then(data => document.querySelectorAll(".header")[0].innerHTML = data);
}

function loadNavbar()
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

function loadFooter()
{
	fetch("master_footer.html")
		.then(response => response.text())
		.then(data => document.querySelectorAll(".footer")[0].innerHTML = data);
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
