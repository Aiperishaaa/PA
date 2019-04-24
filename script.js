window.onload = function () {  
  // document.getElementsByClassName('buttonSubmit').onclick = function () {
    // var inputName= document.getElementById("name");
    // localStorage.setItem("name", inputName.value);
  // }
}

function SubmitForm (event) {
  event.preventDefault();

  var formValues = Array.from(document.getElementsByClassName('form-control'));
  var requests = JSON.parse(localStorage.getItem('requests')) || [];
  var newRequest = {};

  for (var i = 0; i < formValues.length; i++) {
    var formValue = formValues[i];
    newRequest[formValue.name] = formValue.value;
  }

  requests.push(newRequest);

  localStorage.setItem('requests', JSON.stringify(requests));

  setTimeout(function() {
    location.reload();
  }, 2000);

  alert('Спасибо большое! Ваша заявка принята');
}

















