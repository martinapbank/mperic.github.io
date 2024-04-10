document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Molimo ispunite sva polja!");
        return;
    }

    alert("Poruka je uspješno poslana!\nIme: " + name + "\nEmail: " + email + "\nPoruka: " + message);
});