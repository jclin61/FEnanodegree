/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Jerry");



var bio = {
    "name" : "Jerry Lin",
    "role" : "Front End Ninja",
    "contacts" : {
        "mobile" : "123-456-7890",
        "email" : "jerycwlin@hotmail.com",
        "github" : "jerryclin",
        "location" : "San Jose"
    }, 
    "picture_URL" : "images/profile.png",
    "welcome_message" : "Hello, I am an aspiring front end ninja",
    "skills" : ["javascript", "html", "css", "videography"]    //This is an array of string
};


var work = {
    "jobs" : [
        {
            "employer" : "Ninja Factory",
            "title" : "Front End Trainee",
            "location" : "Industrial Town",
            "date" : "Feb 14th, 2015",
            "description" : "Helps writing HTML & CSS"
        },
         {
            "employer" : "Video Factory",
            "title" : "Videographer",
            "location" : "San Jose",
            "date" : "Jan 14th, 2012",
            "description" : "Assist in videography"
        }
    ]
};

var education = {
    "schools" : [
        {   
            "name" : "UBC",
            "location" : "Vancouver",
            "degree" : "Master of Management",
            "major" : ["IT Management", "Operation", "Marketing"],
            "dates" : "August 2012",
            "url" : "http://www.ubc.ca"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Nanodegree",
            "school" : "Udacity",
            "dates" : "January 2016",
            "url" : "http://www.udacity.com"
        }
    ]

};

var projects = {
    "projects" : [
        {
            "title" : "Front End Resume",
            "dates" : "Jan 1st 2016",
            "description" : "Resume built using javascript, html and css",
            "images" : ["images/project_image.jpg", "images/project_image2.jpg"]
        },
        {
            "title" : "Rage Quit Game",
            "dates" : "Jan 1st 2014",
            "description" : "2D game built using javascript, html and css",
            "images" : ["images/project_image.jpg", "images/project_image2.jpg"]
        }
    ]

}

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// intro
$("#header").prepend(formattedName);
$("#header").append(formattedRole);



// bio // check if there are any skills in the bio object

if(Boolean(bio) === true){
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.picture_URL));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message));
    $("#header").append(HTMLskills.replace("%data%", bio.skills));
    $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
}


// work

for (job in work.jobs){
    if (work.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDate, formattedDescription);
    }
}

// project



projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (projects.projects[project].images.length > 0) {
           for (image in projects.projects[project].images) { 
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

// education

for (school in education.schools){
    if (education.schools.hasOwnProperty(school)) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);    
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolName, formattedschoolDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor); 
    }
}

for (course in education.onlineCourses){
    if (education.onlineCourses.hasOwnProperty(course)) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);    
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(HTMLonlineClasses, formattedonlineTitle, formattedonlineSchool, formattedonlineDates, formattedonlineURL); 
    }
}


function inName(name){
    var name_array = name.split(" ");
    var firstname = name_array[0].charAt(0).toUpperCase() + name_array[0].slice(1).toLowerCase();
    var secondname = name_array[1].toUpperCase();
    
    return firstname + " " + secondname;
}

$("#header").append(internationalizeButton);

$("#mapDiv").append(googleMap);

