function DndService() {
  var bcw = '//bcw-getter.herokuapp.com/?url='
  var baseUrl = 'http://www.dnd5eapi.co/api/'

var myCharacter = {
  race: "none",
  class: "none"
}

this.addChar = function addRace(attribute, value, cb){
myCharacter[attribute] = value;
cb(myCharacter[attribute])
}



  this.getCollection = function getCollection(collection, cb) {
    $.get(bcw + baseUrl + collection)
      .then(data => {
        var res = JSON.parse(data).results
        cb(res)
      })
  }

  this.getDetails = function getDetails(url, cb) {
    $.get(bcw + url)
      .then(data => {
        var res = JSON.parse(data)
        cb(res)
      })
  }

}