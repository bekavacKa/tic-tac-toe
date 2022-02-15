let btn = document.querySelector('.btn');
btn.addEventListener('click', game);

function game(){
    let container = document.querySelector('.container');
    let winn = document.querySelector('.winn');
    let symbol = "O";
    createBox();
    winn.innerHTML = "";
    let cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => cube.addEventListener('click' , addSymbol));
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function addSymbol(){
        this.removeEventListener('click', addSymbol);

        if(symbol === "X"){
            symbol = "O";
            this.style.color = "red";
        }else{
            symbol = "X";
            this.style.color = "blue";
        }
        this.innerHTML = symbol;
        checkLines();
    };

    function checkLines(){
        lines.forEach(line => {
            let cube1 = cubes[line[0]];
            let cube2 = cubes[line[1]];
            let cube3 = cubes[line[2]];
            if(cube1.innerHTML === cube2.innerHTML && cube1.innerHTML === cube3.innerHTML && cube1.innerHTML !== ""){
                cube1.style.background = "greenyellow";
                cube2.style.background = "greenyellow";
                cube3.style.background = "greenyellow";
                let res = cube1.innerHTML;
                winner(res);
                endGame();
            }
        })
    };

    function endGame(){
        cubes.forEach(cube => cube.removeEventListener('click', addSymbol));
    }
    function winner(res){
        winn.innerHTML = "The winner is " + res;
        setTimeout(playAgain,500);
    }

    function createBox(){
        let text = "";
        for (let i = 0; i < 9; i++){
            text += '<div class ="cube"></div>';
        }
        container.innerHTML = text;
    }
}

function playAgain(){
    btn.innerHTML = "PLAY AGAIN";
}