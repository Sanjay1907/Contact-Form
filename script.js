function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "imsanju1907@gmail.com",
        Password : "cfjbqmnoynilbwtg",
        To : document.getElementById("email").value,
        From : 'imsanju1907@gmail.com',
        Subject : "New contact enquiry form",
        Body : "Name : " + document.getElementById("name").value
        +"<br> Email : " + document.getElementById("email").value
        +"<br> Message : " + document.getElementById("message").value,
    }).then(
      message => alert("Message sent succesfully")
    );
}
