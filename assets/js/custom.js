/*-------------- Site Loader & Popup --------------*/
$(window).on("load", function() {
    $("#gi-overlay").fadeOut("slow");
});

// Add overflow hidden to the body when the page starts loading
document.body.style.overflow = "hidden";
// Remove the overflow hidden once the page is fully loaded
window.addEventListener("load", function() {
  document.body.style.overflow = "";
});

/*-------------- CountDown Timer Script For The Launching Soon Page --------------*/
if (document.body.classList.contains("launching-soon")) {
    // Set the countdown target date (8 days from now)
    const countdownTarget = new Date().getTime() + 8 * 24 * 60 * 60 * 1000;
    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownTarget - now;
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Update the HTML with the calculated values
        document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
        document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
        // Stop the countdown when it reaches zero
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            // Optionally, show some message when the countdown is over
            alert("Countdown finished!");
        }
    }, 1000);
}