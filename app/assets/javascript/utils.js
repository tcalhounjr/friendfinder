function getCopyrightDate() {
    var copyright = document.getElementById('footer-text');
    var todaysDate = new Date();
    copyright.innerHTML = 'Copyright ' + todaysDate.getFullYear() + ' DHS';
}

function validateForm() {
    let isValid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "") {
            isValid = false;
        }
    });

    $(".chosen-select").each(function() {
        if ($(this).val() === "") {
            isValid = false;
        }
    });
    return isValid;
}

$("#submit").on("click", function(event) {
    event.preventDefault();

    if (validateForm()) {
        let newUser = {
            name: $("#name").val().trim(),
            photo:$("#photo").val().trim(),
            scores: []
        };

        $(".chosen-select").each(function() {
            newUser.scores.push($(this).val())
        });

        $.post("/api/complete", newUser,
            function(data) {
                console.log('this was returned from the api call ', data);
        });
    };
});