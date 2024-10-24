const handleSubmit = () => {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const emailRegex = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,4}$/;
  document.getElementById("nameErr").style.display = "none";
  document.getElementById("emailErr").style.display = "none";
  let isValid = true;
  if (name.value.length < 1) {
    document.getElementById("nameErr").style.display = "block";
    isValid = false;
  }
  if (email.value.length < 1) {
    document.getElementById("emailErr").style.display = "block";
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    document.getElementById("emailErr").innerHTML = "Please Use Valid Email";
    document.getElementById("emailErr").style.display = "block";
    isValid = false;
  }
  if (isValid) {
    alert("Message Sent Successfully!");
    window.location.reload();
  }
};
