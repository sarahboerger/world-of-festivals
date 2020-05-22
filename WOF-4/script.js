/* kontaktformular javascript*/
function validateForm() {

  // variabler
  var name =  document.getElementById('name').value;
  var email =  document.getElementById('email').value;
  var subject =  document.getElementById('subject').value;
  var message =  document.getElementById('message').value;

//Hvis ikke navn er udfyldt, beder formularen om at skrive dit navn
  if (name == "") {
      document.querySelector('.status').innerHTML = "Please type your name";
      style.border = "thick solid #0000FF";
      return false;
  } //Hvis ikke e-mail er udfyldt, beder formularen om at skrive din e-mail
  if (email == "") {
      document.querySelector('.status').innerHTML = "Please type your email";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){ //Hvis der ikke er brugt @, beder den om følgende besked
          document.querySelector('.status').innerHTML = "Please enter a valid email";
          return false;
      }
  }//Hvis ikke subject er udfyldt, beder formularen om at skrive subject
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Please write a subject";
      return false;
  }//Hvis ikke message er udfyldt, beder formularen om at skrive message
  if (message == "") {
      document.querySelector('.status').innerHTML = "Please write your message";
      return false;
  } //Hvis alt er udfyldt skal nednstående besked komme
  document.querySelector('.status').innerHTML = "Thank you for your message.";
}

document.getElementById('status').innerHTML = "Sending...";
formData = {
'name'     : $('input[name=name]').val(),
'email'    : $('input[name=email]').val(),
'subject'  : $('input[name=subject]').val(),
'message'  : $('textarea[name=message]').val()
};
