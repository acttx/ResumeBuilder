function courseHeader() {
	document.getElementById("p1").innerHTML = "<center><h1 class='head1'>Final Project<h1><h2 class='head2'><i>WEB115 - Section 0002</i></h2></center>";
}

function generateResume() {
	var validEmail = document.getElementById("email").value;
	var atSymbol = validEmail.indexOf("@");
	if (atSymbol < 1) {
		alert("Email is not valid!");
		return false;
	}else{
	
		var fullName = document.getElementById("fullName").value;
		var address = document.getElementById("address").value;
		var phone = document.getElementById("phone").value;
		var email = document.getElementById("email").value;
		var personalInfo = document.getElementById("personalInfo").value;
		var careerObj = document.getElementById("careerObj").value;
		var education = document.getElementById("education").value;
		var joiningDate = document.getElementById("joiningDate").value;
		var resignDate = document.getElementById("resignDate").value;
		var details = document.getElementById("details").value;
		var joiningDate1 = document.getElementById("joiningDate1").value;
		var resignDate1 = document.getElementById("resignDate1").value;
		var details1 = document.getElementById("details1").value;
		var joiningDate2 = document.getElementById("joiningDate2").value;
		var resignDate2 = document.getElementById("resignDate2").value;
		var details2 = document.getElementById("details2").value;
		var joiningDate3 = document.getElementById("joiningDate3").value;
		var resignDate3 = document.getElementById("resignDate3").value;
		var details3 = document.getElementById("details3").value;
		var business = document.getElementById("business").value;
		
		var resumePage = window.open("", "newWindow", "width=window.innerWidth,height=window.innerHeight"); 
	
		resumePage.document.write("<div><table style='width:100%;font-family:monospace;' cellpadding='5' cellspacing='5'><tr><td>" + fullName + "</tr></td>"
		+ "<tr><td>" + address + " / " + phone + " / " + email + "</tr></td>"
		+ "</table><hr\>"
		+ "<table style='width:100%' cellpadding='5' cellspacing='5'><tr><td><strong>Career Objective</strong></td><td>" + careerObj + "</td></tr>"
		+ "<tr><td><strong>Personal Data</strong></td><td>" + personalInfo + "</td></tr>"
		+ "<tr><td><strong>Education</td><td></strong>" + education + "</td></tr>"
		+ "<tr><td colspan='2'><strong>Employment Experience</strong></td></tr>"
		+ "<tr><td>" + joiningDate + " - " + resignDate + "</td><td>" + details + "</td></tr>"
		+ "<tr><td>" + joiningDate1 + " - " + resignDate1 + "</td><td>" + details1 + "</td></tr>"
		+ "<tr><td>" + joiningDate2 + " - " + resignDate2 + "</td><td>" + details2 + "</td></tr>"
		+ "<tr><td>" + joiningDate3 + " - " + resignDate3 + "</td><td>" + details3 + "</td></tr>"
		+ "<tr><td><strong>Business References</strong></td><td>" + business + "</td></tr>"
		+ "</table>");

	}
}