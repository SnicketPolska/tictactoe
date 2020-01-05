const Game = (()=>{
    let firstPlayersTurn = true;
    const start = (event)=>{
        event.preventDefault();
        event.target.classList.add("hidden");
        document.getElementById("board").classList.remove("hidden");
        Gameboard.render();
        player1 = playerFactory(event.target.firstName.value,"X");
        player2 = playerFactory(event.target.secondName.value,"O");
    }
    const turn = () =>{
        firstPlayersTurn === true ? firstPlayersTurn = false : firstPlayersTurn = true;
    }
    const win = () =>{
        document.getElementById("info").innerHTML = (firstPlayersTurn === true ? `${player1.name} has won!` : `${player2.name} has won!`);
    }
    const draw = () =>{
        document.getElementById("info").innerHTML = "Game ended with a draw!";
    }
    return {start,turn, win, draw, start};
})();


const Gameboard = (() =>{
 let board = ["X","O","X",
              "O","O","X",          
              "X","X","O"];
    const reset = () =>{
        for(let i = 0;i<9;i++){
            board[i] = "";
        }
    }     
    const render = () =>{
        for(let i = 0; i<9; i++){
            fields[i].innerHTML = board[i];
        }
    }     
    const changeSign = (index,sign) =>{
        board[index] = sign;
        render();
    }
    return {render,board,changeSign,reset};
})();


const playerFactory = (name, sign) => {
    return {name, sign,wins:0};
}


const fields = document.querySelectorAll(".field");

document.getElementById("setup").addEventListener('submit', Game.start);


