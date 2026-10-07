(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("enquiry-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var pickup = document.getElementById("pickup").value.trim();
    var drop = document.getElementById("drop").value.trim();
    var car = document.getElementById("car").value;
    var date = document.getElementById("date").value;
    var note = document.getElementById("note").value.trim();

    var text =
      "Hello Madurai Taxi Hire,%0A" +
      "Name: " + encodeURIComponent(name) + "%0A" +
      "Phone: " + encodeURIComponent(phone) + "%0A" +
      "Pickup: " + encodeURIComponent(pickup) + "%0A" +
      "Drop: " + encodeURIComponent(drop) + "%0A" +
      "Car: " + encodeURIComponent(car) + "%0A" +
      "Date: " + encodeURIComponent(date) + "%0A" +
      "Notes: " + encodeURIComponent(note);

    window.open("https://wa.me/919000000000?text=" + text, "_blank");
  });
})();
