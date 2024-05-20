let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let imgPlaceholder = document.querySelector(".imgPlaceholder");

btn.addEventListener('click', function(){
   let inputValue = input.value;
   imgPlaceholder.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    console.log(inputValue);
});