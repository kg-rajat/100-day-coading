// Callback function
function changeColor(callback){
  setTimeout(()=>{
    callback();
  },100)
}

document.addEventListener('DOMContentLoaded', function(){
  const changeColorBtn = document.getElementById('changeColorBtn');
  const colorBox = document.getElementById('colorBox');

  changeColorBtn.addEventListener('click', function(){
    // change color callback function
    function changeColorCallback(){
      colorBox.style.backgroundColor = getRandomColor();
    }
    // call the function with the callback
    changeColor(changeColorCallback);
  });

});

//Function top generate random color
function getRandomColor(){
  const letters = '0123456789abcdefghijhlmno';
  let color = '#';
  for (let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}