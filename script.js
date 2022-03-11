// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            //sorting 
            let sortedAstronauts = response.sort(function(a, b) { return a.hoursInSpace - b.hoursInSpace });


            let container = document.getElementById('container');
            let allMyHtml = "";

            let mycount = `<h3> Astronaut count : ${sortedAstronauts.length}</h3>`;

            allMyHtml += mycount;

            sortedAstronauts.forEach(function(astronaut) {
                //style green for active using ternary operator another way
                // <li ${astronaut.active ? 'style="color:green"' :''}>Active: ${astronaut.active}</li>
                let myHtml = `
            <div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li ${astronaut.active ? 'class="green-text"' :''}>Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills.join(", ")}</li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>
         `;
                allMyHtml += myHtml;
            })
            container.innerHTML = allMyHtml;

        });
});