function LogoutCheck(){
	document.getElementById("modal").style.visibility = "visible";
	document.getElementById("mask").style.visibility  = "visible";

}

function BtnEvent(action) {
	msg = "";
	if(action == "yes") {
		window.location.href = "login.html";
	} 
	document.getElementById("modal").style.visibility = "hidden";
	document.getElementById("mask").style.visibility  = "hidden";
}
