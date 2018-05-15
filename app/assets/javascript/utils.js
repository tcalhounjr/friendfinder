function getCopyrightDate() {
    var copyright = document.getElementById('footer-text');
    var todaysDate = new Date();
    copyright.innerHTML = 'Copyright ' + todaysDate.getFullYear() + ' DHS';
}

$(".lameBtn").on("click", function(event) {
    event.preventDefault();

    $.get("/api/tables", newReservation,
        function(data) {});
});