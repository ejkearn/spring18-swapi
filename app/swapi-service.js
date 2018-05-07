console.log(1);
function SwapiService() {
  console.log("MEEEE!!!!", 7);
  //private

  //public

this.getWorld = function getWorld(url, cb){
  if (typeof cb != "function") {
    return console.error("[getPeople] requires a callback", url, cb);
  }
  url = url || "https://swapi.co/api/people/";
  
  $.get(url).then(cb);

}

this.getWorld = function getShip(url, cb){
  if (typeof cb != "function") {
    return console.error("[getPeople] requires a callback", url, cb);
  }
  url = url || "https://swapi.co/api/people/";
  
  $.get(url).then(cb);

}
// this.getWorldName = function(url){
// var name;
// var test;
// test = $.get(url)
// name = test.name
// debugger
//   return name


  this.getPeople = function getPeople(url, cb) {
    if (typeof cb != "function") {
      return console.error("[getPeople] requires a callback", url, cb);
    }
    url = url || "https://swapi.co/api/people/";
    console.log(1);
    // @ts-ignore
    $.get(url).then(cb);
    console.log(2);
  };
}
console.log(2);
