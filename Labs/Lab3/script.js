// This function is called when the user clicks the Submit button.
function result() {
  var firstN = document.getElementById("firstName").value;
  var lastN = document.getElementById("lastName").value;
// Retrieve the value of the selected gender radio button.
  var gend = document.querySelector('input[name="gender"]:checked').value;
  var country = document.getElementById("country").value;
  document.getElementById("first-n").innerHTML = firstN;
  document.getElementById("last-n").innerHTML = lastN;
  document.getElementById("gend").innerHTML = gend;
  document.getElementById("c").innerHTML = country;
}
/**
a) The preventDefault() method is used to prevent the default action of an element from happening.
For example, it can prevent a link from following the URL or a form from submitting.

b) Since I am using type="button" for the submit button, the page won't reload, and previous data will stay.
If using a 'submit' button, you'd add an event listener for the form's 'submit' event and call preventDefault() there.
Example: document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault();
result();
});

**/