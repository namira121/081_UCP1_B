$(document).ready(function(){
    $('.carousel').slick({
        prevArrow: $('.carousel-prev'),
        nextArrow: $('.carousel-next')
    });
});


function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    return hours;
}


function displayGreeting() {
    var time = getCurrentTime();
    var greeting = "";

    if (time < 10) {
        greeting = "Selamat Pagi";
    } else if (time < 15) {
        greeting = "Selamat Siang";
    } else if (time < 18) {
        greeting = "Selamat Sore";
    } else {
        greeting = "Selamat Malam";
    }

    document.getElementById("greeting").innerText = greeting;
}

// Panggil fungsi untuk menampilkan pesan salam saat halaman dimuat
displayGreeting();

function showAlert() {
    alert("Beri Kami Rating Bingtang 5");
}

