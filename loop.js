for (var i = 0; i <= 5; i++) {
  alert(i);
}

var message = "";

for (var i = 0; i <= 5; i++) {
  message += i + " ";
  
}

alert(message);

var message = "";

for (var i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    message += i + " ";
  }
}
alert(message);
