/* Fungsi Untuk Load Header*/

function loadComponent()
{
	loadHeader();
	loadNavbar();
}

function loadHeader()
{
	fetch(location.href.replace("index.html", "") + "master_header.html")
		.then(response => response.text())
		.then(data => document.querySelectorAll(".header")[0].innerHTML = data);
}

function loadNavbar()
{
	fetch(location.href.replace("index.html", "") + "master_nav.html")
		.then(response => response.text())
		.then(data => document.querySelectorAll(".nav")[0].innerHTML = data);
}