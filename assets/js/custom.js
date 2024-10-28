/*-------------- Site Loader & Popup --------------*/
$(window).on("load", function () {
    // Set a minimum delay of 1 seconds (3000ms)
    var minLoadTime = 1000;
    // Capture the time when the page starts loading
    var startTime = performance.now();
    // Check the current time after the page has loaded
    var loadTime = performance.now() - startTime;
    // Calculate the remaining time to complete the 3-second minimum delay
    var remainingTime = Math.max(0, minLoadTime - loadTime);
    // Add overflow hidden to body when the loader is visible
    $("body").css("overflow", "hidden");
    setTimeout(function () {
        $("#gi-overlay").fadeOut("slow", function () {
            $("body").css("overflow", "");
        });
    }, remainingTime);
});

/*-------------- CountDown Timer Script For The Launching Soon Page --------------*/
if (document.body.classList.contains("time-counter")) {
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