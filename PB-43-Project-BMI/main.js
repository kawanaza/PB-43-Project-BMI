function myFunction() {
  let kg = document.getElementById("kg").value;
  let body = document.getElementById("bodyLength").value;
  document.getElementById("result").value = (kg / body / body).toFixed(2);
  if (body == "" || kg == "") {
    alert("Please Enter Your Body Length!");
  } else {
    return kg / body / body;
  }
}
