function PokeController() {
    var pokeService = new PokeService
    //Private
    function pokeHandler(res) {
        drawPokemon(res.results);
        drawButtons(res);
    }
    function drawPokemon(mons) {
        // console.log(mons);
        var template = '<ul>'
        for (var i = 0; i < mons.length; i++) {
            var mon = mons[i]
            template += `<li><div onclick="app.controllers.pokeController.getDetails('${mon.url}')">${mon.name}: </div><button onclick="app.controllers.pokeController.addToTeam('${mon.name}')">add</button></li>`
        }
        template += `</ul>`
        document.getElementById('pokemon').innerHTML = template
    }

    function drawButtons(res) {
        var template = ''
        if (res.previous) {
            template += `<button onclick="app.controllers.pokeController.getPokemon('${res.previous}')">Previous</button>`
        }
        if (res.next) {
            template += `<button onclick="app.controllers.pokeController.getPokemon('${res.next}')">Next</button>`
        }

        document.getElementById('poke-buttons').innerHTML = template
    }

    function drawDetails(res) {
        var template = ''
        template += 'Abilities <ul>'
        // debugger
        for (var i = 0; i < res.abilities.length; i++) {
            template += `<li>${res.abilities[i].ability.name}</li>`
        }
        template += `</ul>`
        template += 'Base Stats <ul>'
        for (var i=0; i<res.stats.length; i++){
            template += `<li>${res.stats[i].stat.name}: ${res.stats[i].base_stat}`
        }
        template += `</ul>`
        document.getElementById('poke-details').innerHTML = template
    }

    function drawTeam(team){
        var template = ``
        for (var i=0; i<team.length;i++){
        template += `<div>${team[i]}<button onclick="app.controllers.pokeController.removeTeam('${i}')">Remove</button></div>`
        }
        document.getElementById('poke-team').innerHTML = template
    }
    //Public

    this.removeTeam = function removeTeam(index){
        pokeService.removeTeam(index, drawTeam)
    }

this.addToTeam = function addToTeam(name){
pokeService.addToTeam(name, drawTeam)
}

    this.getDetails = function getDetails(url) {

        pokeService.getDetails(url, drawDetails);
    }

    this.getPokemon = function getPokemon(url) {

        pokeService.getPokemon(url, pokeHandler)
    }

}