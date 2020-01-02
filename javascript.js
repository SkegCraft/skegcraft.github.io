// Simple JS to copy the server address
function copy(elem) {

	// Create INPUT element
	var select = document.createElement("INPUT");
	select.type = "text";
	select.value = "skegcraft.duckdns.org";

	// Create element, select+copy, then delete it
	document.body.appendChild(select);
	select.select();
	document.execCommand("copy");
	document.body.removeChild(select);

	elem.innerHTML = "Copied!"

	setTimeout(function() {
		elem.innerHTML = "skegcraft.duckdns.org"
	}, 500)
}