function ClassesController() {
  //private
  var dndService = new DndService();

  function drawClasses(arr) {
    var template = "<ul>";
    for (let i = 0; i < arr.length; i++) {
      const cl = arr[i];
      template += `
        <li><div onclick="app.controllers.classesController.getDetails('${cl.url}')">${cl.name}</div><button onclick="app.controllers.classesController.addClass('${cl.name}')">add</button></li>
      `;
    }
    template += "</ul>";
    document.getElementById("classes-data").innerHTML = template;
  }
  function drawChar(myClass){
    var template = ''
    template += `Class: ${myClass}`
    document.getElementById('my-class').innerHTML = template
      }

  function drawDetails(details) {
    var template = `
      <h3>Hit Die: ${details.hit_die}</h3>
      <h3>Saving Throws</h3>
      <ul>
    `
    for (let i = 0; i < details.saving_throws.length; i++) {
      const st = details.saving_throws[i];
      template += `<li>${st.name}</li>`
    }
    template += '</ul>'
    document.getElementById('active-data').innerHTML = template
  }

  this.addClass = function addClass(myClass){ 
    dndService.addChar('class', myClass, drawChar)}
   
    

  this.getDetails = function getDetails(url) {
    dndService.getDetails(url, drawDetails)
  }

  dndService.getCollection("classes", drawClasses);
}
