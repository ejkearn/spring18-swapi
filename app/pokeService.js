function PokeService() {
    var pokeTeam = []
    this.addToTeam = function addToTeam(pokeId, cb) {
        if (pokeTeam.length < 6) {
            pokeTeam.push(pokeId)
        }
        cb(pokeTeam)

    }
    
    this.removeTeam = function removeTeam(index, cb){
        pokeTeam.splice(index,1)
        cb(pokeTeam)
    }

    this.getDetails = function getDetails(url, cb) {
        $.get(url)
            .then(data => {
                // debugger
                var res = data
                cb(res)
            })
    }



    this.getPokemon = function getPeople(url, cb) {

        // var url ="https://pokeapi.co/api/v2/pokemon/?limit=20";



        $.get(url)
            .then(function (data) {
                // console.log(data)
                var res = data
                cb(res)
            })

        // // @ts-ignore
        // $.get(url)
        //     .then(data =>{
        //     var res = JSON.parse(data).results
        //     cb(res)
        //     })
    }





}