// bio object
var bio = {
"name": "Theo Berta",
"role": "Front End Apprentice",
"contacts": {
	"mobile": "011-100101",
	"email": "theoberta@berta.com",
	"github": "theoberta",
	"twitter": "notwitt",
	"location": "Here"
	},
"welcomeMessage": "Welcome to my resume",
"skills": ["HTML", "CSS", "Javascript Basics"],
"biopic": "images/hund.jpg"
};

// encapsulated display function
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedName, formattedRole);
	$("#header").append(formattedBioPic, formattedWelcome);

	// append skills
	var skillLen = bio.skills.length;
	if(skillLen > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < skillLen; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}

	// loop over contact info and declare vars and append to header and footer
	for (var item in bio.contacts) {
		var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", item).replace("%data%", bio.contacts[item]);
		$("#topContacts").append(formattedContactGeneric);
		$("#footerContacts").append(formattedContactGeneric);
	}
};

// education object
var education = {
	"schools": [{
		"name": "University of Bertram",
		"location": "Bertram, TX",
		"degree": "Bachelor of Arts",
		"majors": "Theobertology",
		"dates": 2003
		// "url": "Univercity.be" info added according to P2 project discription but url for school not defined in helpers
	},
	{
		"name": "University of Bertangles",
		"location": "Bertangles",
		"degree": "Master of Arts",
		"majors": "Theobertology",
		"dates": 2005
		// "url": "Univercity.be" info added according to P2 project discription but url for school not defined in helpers
	}],
	"onlineCourses": [{
		"title": "CS 101",
		"school": "Coursera",
		"date": 2014,
		"url": "coursera.org"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": 2015,
		"url": "Udacity.com"
	}]
};

// encapsulated display function
education.display = function() {
	// append div work-entry
	$("#education").append(HTMLschoolStart);

	// loop over objects in schools array
	var schoolNumber = education.schools.length;
	for (var i = 0; i < schoolNumber; i++) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
		}

	// append h3
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	// loop over objects in onlineCourses array
	var onlineNumber = education.onlineCourses.length;
	for (var i = 0; i < onlineNumber; i++) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
		}
};

// work object
var work = {
	"jobs": [{
	"employer": "Theo's",
	"title": "Theobertologist",
	"location": "Bherta, India",
	"dates": "2017-2019",
	"description": "Lorem ipsum dolor sit amet, nibh et turpis turpis et phasellus eros, aliquam nonummy sit eros, lobortis libero, enim ut duis commodo lacus a dui, diam vel vel libero integer habitasse tempus."
	},
	{
	"employer": "Bert's",
	"title": "Theobertologian",
	"location": "Abertamy",
	"dates": "2020-2023",
	"description": "Nam quisque vitae suscipit ut massa, nisl ultrices mauris dignissim sed fringilla porta, vitae vivamus non sem ut nascetur. Porta laoreet pellentesque urna amet sem in, eros pede integer. Rerum sodales quis nulla, amet sed interdum, ac magna luctus aliquam vel sed. Neque urna quam sapien eget nisi penatibus."
	}
]};

// encapsulated display function
work.display = function() {

	// append div work-entry
	$("#workExperience").append(HTMLworkStart);

	// loop over jobs array and append info
	var workNumber = work.jobs.length;
	for (var i = 0; i < workNumber; i++) {
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle,  formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
		}
};

// projects object
var projects = {
	"projects": [{
		"title": "Project 1",
		"dates": "2014",
		"description": "Dolor id praesent sit, erat aliquam leo, neque enim donec non feugiat. Risus vitae, vitae ullamcorper velit, pulvinar mi quis wisi dictum, curabitur tempor quis accumsan hendrerit id.",
		"images": "images/197x148.gif"
		},
		{
		"title": "project 2",
		"dates": "2015",
		"description": "Turpis mauris pellentesque, faucibus eget pellentesque. In sed volutpat, leo lacus, amet diam sem tristique nec molestie velit.",
		"images": "images/197x148.gif"
		}]
};

// encapsulated display function
projects.display = function() {

	// append div project-entry
	$("#projects").append(HTMLprojectStart);
	// loop over projects array and append info

	var projectNumber = projects.projects.length;
	for (var i = 0; i < projectNumber; i++) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);

		$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
		}
};

// call display functions
bio.display();
education.display();
work.display();
projects.display();

// append map and button
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);