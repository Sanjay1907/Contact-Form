function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "imsanju1907@gmail.com",
        Password : "cfjbqmnoynilbwtg",
        To : 'tamil.sanjukhoushi02@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact enquiry form",
        Body : "Name : " + document.getElementById("name").value
        +"<br> Email : " + document.getElementById("email").value
        +"<br> Message : " + document.getElementById("message").value,
    }).then(
      message => alert("Message sent succesfully")
    );
}