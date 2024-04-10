document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Sprječava podnošenje obrasca

    // Validacija forme
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Molimo ispunite sva polja!");
        return;
    }

    // Ovdje bi se obično slao obrazac putem AJAX-a ili nekog drugog postupka
    // Za ovaj primjer jednostavno ćemo prikazati poruku o uspješnom slanju
    alert("Poruka je uspješno poslana!\nIme: " + name + "\nEmail: " + email + "\nPoruka: " + message);
});
