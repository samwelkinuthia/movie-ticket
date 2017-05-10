// //busines logic
function Ticket(movie, viewtime, release, age) {
  this.movie= movie;
  this.viewtime = viewtime;
  this.release = release;
  this.age = age;
  this.price = "";
}

Ticket.prototype.ticketPrice = function() {
  return this.movie + this.viewtime + this.release - this.age;
}

//user interface logic
$(document).ready(function() {
  $("form#movies").submit(function(event) {
    event.preventDefault();
    var movie=parseInt($("#movie").val())
    var release = parseInt($("#release").val());
    var viewtime = parseInt($("#viewtime").val());
    var age = parseInt($("#age").val());
    var newTicket = new Ticket(movie, release, viewtime, age);
    $("#reveal-price").show();
    $("#price").text(newTicket.ticketPrice());
  });

});
