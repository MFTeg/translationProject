document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("sidenav");

  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
