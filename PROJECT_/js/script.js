
function changeBack(){
    let myRandomColor;
    document.body.style.backgroundColor = myRandomColor;
     myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(myRandomColor);
    }

