var projType = 0;
var showProj = 0;

//  Scroll Text Function
function scrollText(){    
    window.addEventListener('scroll', function(ev) {
        var scrollText = document.getElementById('scrollText')
        var someDiv = document.getElementById('hero-belowmain');
        var distanceToTop = someDiv.getBoundingClientRect().top;
        if(distanceToTop < 1324){
            scrollText.classList.add("hidden");
        }
        else{
            scrollText.classList.remove("hidden");
        }
    }
)};

//  Update Project Grid Function
function updateProjType(int){
    let updateTo = int;
    let oldProjElement = document.getElementById(projType);
    oldProjElement.classList.add("inactive");
    projType = updateTo;
    let newProjElement = document.getElementById(projType);
    newProjElement.classList.remove("inactive");
}

//  Display Projects Function
function displayProj(projtype){

    let currentProj = document.getElementById(projtype);
    let numProjects = projArray[projType].length;
    let fillHTML = '';

    for (i=0; i<numProjects; i++){
        fillHTML += '<a class="projimgcontainer" href="workSingle.html" onclick="storeProject(' + i + ')"><img class="projimg" src="' + projArray[projtype][i].file + '"/> <p class="projtext">' + projArray[projtype][i].title + '</p> </a>';
    }
    currentProj.innerHTML = fillHTML;
}

// Work Showcase Page Function
function storeProject(whichProj){
    projIndex = whichProj;
    localStorage.setItem("projIndexStorage", projIndex);
    localStorage.setItem("projTypeStorage", projType);
}

function openProjPage(){
    let projectType = localStorage.getItem("projTypeStorage");
    let projectIndex =  localStorage.getItem("projIndexStorage");

    let imgContainer = document.getElementById("imagesHere");
    imgContainer.innerHTML = '<img src="' + projArray[projectType][projectIndex].file + '" class="work-img"/>';
    
    if (projArray[projectType][projectIndex].imgs != null){
        for(i=0; i < (projArray[projectType][projectIndex].imgs).length; i++){
            if(projArray[projectType][projectIndex].imgs[i].includes(".mp4")){
                imgContainer.innerHTML += '<video width="95%" height="500vh" style="padding: 2rem 1rem;" autoplay loop muted> <source src="' + projArray[projectType][projectIndex].imgs[i] + '" type="video/mp4"> Your browser does not support the video tag." class="work-vid"/></video> ';
            }
            else
                imgContainer.innerHTML += '<img src="' + projArray[projectType][projectIndex].imgs[i] + '" class="work-img"/>';
        }
    }

    let textContainer = document.getElementById("textHere");
    textContainer.innerHTML = projArray[projectType][projectIndex].Description + '<hr> <div class="otherProjects"><a href="#projects" onclick="prevProjPage()" class="arrows"><i class="fa-solid fa-arrow-left"></i> Last Project </a> <a href="index.html#projnav" class="arrows">Back to All Projects</a> <a href="#projects" onclick="nextProjPage()" class="arrows"> Next Project <i class="fa-solid fa-arrow-right"></i></a></div>';
}

function nextProjPage(){
    let projectType = Number(localStorage.getItem("projTypeStorage"));
    let projectIndex =  Number(localStorage.getItem("projIndexStorage"))

    if (projectIndex + 1 <  projArray[projectType].length) {
        projectIndex += 1;
    }
    else if (projectType + 1 <  projArray.length){
        projectType += 1;
        projectIndex = 0;
    }
    else{
        projectType = 0;
        projectIndex = 0;
    }
    localStorage.setItem("projIndexStorage", projectIndex);
    localStorage.setItem("projTypeStorage", projectType);
    openProjPage();
}

function prevProjPage(){
    let projectType = Number(localStorage.getItem("projTypeStorage"));
    let projectIndex =  Number(localStorage.getItem("projIndexStorage"))

    if (projectIndex - 1 >  -1) {
        projectIndex -= 1;
    }
    else if (projectType - 1 > -1){
        projectType -= 1;
        projectIndex = projArray[projectType].length - 1;
    }
    else{
        projectType = projArray.length - 1;
        projectIndex = projArray[projectType].length - 1;
    }
    localStorage.setItem("projIndexStorage", projectIndex);
    localStorage.setItem("projTypeStorage", projectType);
    openProjPage();
}