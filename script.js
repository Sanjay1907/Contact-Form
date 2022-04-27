function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "imsanju1907@gmail.com",
        Password : "cfjbqmnoynilbwtg",
        To : document.getElementById("email").value,
        From : 'imsanju1907@gmail.com',
        Subject : "New contact enquiry form",
        Body : "Hi" + document.getElementById("name").value +","
        +"<br> Thank you for connecting with me. I like to hear more from you."
        +"<br> Best regards"
        +"<br> Sanjay.A",
    }).then(
      message => alert("Message sent succesfully")
    );
}
