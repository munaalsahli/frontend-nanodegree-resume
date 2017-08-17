
var bio = {
	"name" : "Muna Alsahli",
	"role" : "Web Developer",
	"contacts" :
  {
    "Email" : "monamuhammed70@gmail.com",
	 "Mobile" : "559655925",
	 "Github" : "https://github.com/munaalsahli",
	 "location" : ["Riyadh"]
 },
	"WelcomeMessage" : "Welcome To Muna's Resume",
	"skills" : ["HTML" , "C++", "JAVA", "C#", "Matlab", "SQL/PLSQL"],
	"bioPic" : "http://www.io42.co.uk/images/AimeeTacchi.jpg"
};


var education = {
	"schools" : [
		{
			"name" : "Princess Nora bint Abdurrahman University ",
			"city" : "Riyadh",
			"degree" : "Bachelor",
			"majors" : "COMPUTER SCIENCE",
			"date" : "2010-2015",
			"url" : ""
		}

	],
	"onlineCourses" : [
	{
		"title" : "Front End Nano Degree",
		"school" : "Udacty",
		"date" : "Jul,2017 -- Present",
		"url" : "www.Udacty.com"
	}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Tata Company ",
			"title" : "Developer",
			"date" : "DEC,2015 - Present",
			"description": "Billing Configuration "

    }
    ]
  };

var projects = {
	"projects" : [
		{
			"title" : "KFMC app",
			"dates" : "2015",
			"description" : "I had work for KFMC applcation"
    }
	]

};


 bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedJob = HTMLheaderRole.replace("%data%", bio.role);
	var formattedNameRole = (formattedName + formattedJob);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

  /* top and footer contacts */

	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").prepend(formattedNameRole);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcome);

  /* for loop */

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i=0; i<8; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	for (var info=0; info<4; info++) {
		$("#topContacts").append(formattedContactInfo[info]);
		$("#footerContacts").append(formattedContactInfo[info]);
	}
 }

 bio.display();

 work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedYears = HTMLworkDates.replace("%data%",job.dates);
		$(".work-entry:last").append(formattedYears);
		var formattedCity = HTMLworkLocation.replace("%data%",job.location);
		$(".work-entry:last").append(formattedCity);
		var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
		$(".work-entry:last").append(formattedDescription);
	});
 }

 work.display();

 education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedNameDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedSchoolDate);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(formattedMajor);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);
		var formattedURL = HTMLonlineURL.replace("%data%", school.url);
		$(".education-entry:last").append(formattedURL);
	});

	$("#education").append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(internet) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", internet.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", internet.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDate = HTMLonlineDates.replace("%data%", internet.dates);
		$(".education-entry:last").append(formattedDate);
		var formattedURL = HTMLonlineURL.replace("%data%", internet.url);
		$(".education-entry:last").append(formattedURL);
	});
 }

 education.display();

 projects.display = function() {
	projects.projects.forEach(function(p) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", p.dates);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", p.images);
		$(".project-entry:last").append(formattedProjectImage);
	});
 }

 projects.display();

 $("#mapDiv").append(googleMap);
