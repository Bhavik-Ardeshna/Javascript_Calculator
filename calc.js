let calcscreen = document.getElementById('txt');
let buttons = document.querySelectorAll('button');
let screenValue = "";
for(items of buttons){
  items.addEventListener('click', function(e) {
    btnText = e.target.innerText;
    console.log(btnText);
    if(btnText == 'X')
    {
      btnText = '*';
      screenValue += btnText;
      calcscreen.value = screenValue;
    }
    else if (btnText == 'C') {
      screenValue = "";
      calcscreen.value = screenValue;
    }
    else if (btnText == '=') {
      calcscreen.value = eval(screenValue);
    }
    else {
      screenValue += btnText;
      calcscreen.value = screenValue;
    }
  })
}
