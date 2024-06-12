//  Scroll Text Function
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
 });

//  Update Project Grid Function
let projType = 0;

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
        fillHTML += '<a class="projimgcontainer"><img class="projimg" src="' + projArray[projtype][i].file + '"/> </a>';
    }
    currentProj.innerHTML = fillHTML;
}

function displayModal(){
    document.getElementById("main").classList.add("freeze");
}