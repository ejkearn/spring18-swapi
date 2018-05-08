// console.log(3);
function SwapiController() {
  // console.log(6);
  var swService = new SwapiService();
  // console.log(8);
  //private

  function drawPeople(people) {
    var template = "";
    
    people.forEach(person => {
      // var planetName = swService.getWorldName(person.homeworld);
      template += `<div>
        <h5>Name: ${person.name}</h5> `
        // <h5>height: ${person.height}</h5>
        // <h5>Mass: ${person.mass}</h5>
        // <h5>Hair Color: ${person.hair_color}</h5>
        // <h5>Skin Color: ${person.skin_color}</h5>
        // <h5>Eye Color: ${person.eye_color}</h5>
        // <h5>Birth Year: ${person.birth_year}</h5>
        // <h5>Gender: ${person.gender}</h5>



      template += `<h5><button onclick="app.controllers.swapiController.getWorld('${person.homeworld}')">Get HomeWorld Info</button></h5>`


      template += `</div>`
    });
    document.getElementById("sw-people").innerHTML = template;
  }

  function drawWorld(res){
    
    var template = "";
    template += `<div>
    <h5>Name: ${res.name}</h5>
    <h5>Rotation Period: ${res.rotation_period}</h5>
    <h5>Orbital Period: ${res.orbital_period}</h5>
    <h5>Diameter: ${res.diameter}</h5>
    <h5>Climate: ${res.climate}</h5>
    <h5>Gravity: ${res.gravity}</h5>
    <h5>Terrain: ${res.terrain}</h5>
    <h5>Population: ${res.population}</h5>
    </div>`
    document.getElementById("sw-info").innerHTML = template;
  }




  function drawButtons(res) {
    var template = ''
    if (res.previous) {
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.previous}')">Previous</button>`
    }
    if (res.next) {
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.next}')">Next</button>`
    }
    
    document.getElementById('buttons').innerHTML = template
  }

  function handlePeopleResponse(res) {
    drawButtons(res);
    drawPeople(res.results);
  }
  function handleWorldResponse(res) {
  
var noUrl = {
  previous: "",
  next: "",
}
   drawButtons(noUrl)
    drawWorld(res);
  }

  //public
this.getWorld =function (url){

  swService.getWorld(url, handleWorldResponse);
}

  this.getPeople = function (url) {
    swService.getPeople(url, handlePeopleResponse);
  };

}

