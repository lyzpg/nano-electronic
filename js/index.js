/* Fungsi Untuk Load Header*/
function loadHeader()
{
	fetch(location.href.replace("index.html", "") + "master_header.html")
		.then(response => response.text())
		.then(data => document.querySelectorAll(".header")[0].innerHTML = data);
}