var typed = new Typed(".text", {
    strings: ["Web Developer", "Student", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.rounded-video');
    if (video) {
        video.addEventListener('mouseover', function() {
            video.play();
        });
        video.addEventListener('mouseout', function() {
            video.pause();
        });
    }

});

document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const form = event.target;
        const formData = new FormData(form);

        try {
            
            const response = await fetch("https://getform.io/f/aejjmvgb", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Message sent successfully! Thank you for reaching out.");
                form.reset(); 
            } else {
                alert("Failed to send the message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred. Please try again.");
        }
    });

   
    