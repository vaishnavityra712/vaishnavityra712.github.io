function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,

        message: document.getElementById("message").value,

        from_email: document.getElementById("fromemail").value,
    };
    emailjs.send('service_kg72bsk', 'template_199pgah', tempParams)
        .then(function(res) {
            console.log("success", res.status);
        })
}

function myFunc() {
    document.getElementById("myForm").reset();
}