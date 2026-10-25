document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", e => {
        e.preventDefault();

        //client validation
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!name || !email || !password){
            message.textContent = "Please fill all the fields.";
            message.style.color = "red";
            return;
        }

        if(/^\S+@\S+\.\S+$/.test(email)){
            message.textContent ="Please enter a valid email";
            message.style.color = "red";
            return;
        }

        if (password.length < 8) {
            message.textContent= "Password must be at least 8 characters";
            message.style.color = "red";
        }

        message.textContent = "Thank you, the registration was successful.";
        message.style.color = "green";

        //clean the form
        form.requestFullscreen();
    })
    
})