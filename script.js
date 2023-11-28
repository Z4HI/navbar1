
console.log('hellooo');

const teamoption = document.querySelector('#teamoption');
const teamselected = document.querySelector('#teamselected');

teamoption.addEventListener("change", setTeam);

function setTeam(){
    const choice = teamoption.value;

    if(choice==="heat"){
        teamselected.textContent = "You selected the miami heat!"
    }

    else if(choice==="suns"){
        teamselected.textContent = "You selected the Phoenix Suns!"
    }

    else if(choice==="nuggets"){
        teamselected.textContent = "You selected the Denver Nuggets!"
    }
}