
console.log('hellooo');

const teamoption = document.querySelector('#teamoption');
const teamselected = document.querySelector('.teamselected');

teamoption.addEventListener("change", setTeam);

function setTeam(){
    const choice = teamoption.value;

    if(choice==="heat"){
        teamselected.textContent = "IDK how they are even good tbh"
        teamselected.classList.toggle("teamentrance");
    }

    else if(choice==="suns"){
        teamselected.textContent = "KD and DBook are pretty good I guess"
        teamselected.classList.toggle("teamentrance");
    }

    else if(choice==="nuggets"){
        teamselected.textContent = "Jokic is really good at basketball"
        teamselected.classList.toggle("teamentrance");
    }
    else{
        teamselected.textContent = "";
        teamselected.classList.toggle("teamentrance");
    }
}


