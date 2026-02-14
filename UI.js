//import {board} from "./logic.js";

const b_q = document.createElement("img");
b_q.src = "/Pieces/b_queen_png_128px.png";
b_q.id = "piece";
const b_k = document.createElement("img");
b_k.src = "/Pieces/b_king_png_128px.png";
b_k.id = "piece";

const w_q = document.createElement("img");
w_q.src = "/Pieces/w_queen_png_128px.png";
w_q.id = "piece";
const w_k = document.createElement("img");
w_k.src = "/Pieces/w_king_png_128px.png";
w_k.id = "piece";

const Board_class = document.getElementById("Board_class");
// Drawing the black pieces
function b_drawpawn(file) {
  const b_p = document.createElement("img");
  b_p.src = "/Pieces/b_pawn_png_128px.png";
  b_p.id = "piece";
  file.appendChild(b_p);
}
function b_drawknight(file) {
  const b_r = document.createElement("img");
  b_r.src = "/Pieces/b_rook_png_128px.png";
  b_r.id = "piece";
  file.appendChild(b_r);
}
function b_drawrook(file) {
  const b_r = document.createElement("img");
  b_r.src = "/Pieces/b_rook_png_128px.png";
  b_r.id = "piece";
  file.appendChild(b_r);
}
function b_drawknight(file) {
  const b_n = document.createElement("img");
  b_n.src = "/Pieces/b_knight_png_128px.png";
  b_n.id = "piece";
  file.appendChild(b_n);
}
function b_drawbishop(file) {
  const b_b = document.createElement("img");
  b_b.src = "/Pieces/b_bishop_png_128px.png";
  b_b.id = "piece";
  file.appendChild(b_b);
}

//drawing while pieces

function w_drawpawn(file) {
  const w_p = document.createElement("img");
  w_p.src = "/Pieces/w_pawn_png_128px.png";
  w_p.id = "piece";
  file.appendChild(w_p);
}
function w_drawknight(file) {
  const w_r = document.createElement("img");
  w_r.src = "/Pieces/w_rook_png_128px.png";
  w_r.id = "piece";
  file.appendChild(w_r);
}
function w_drawrook(file) {
  const w_r = document.createElement("img");
  w_r.src = "/Pieces/w_rook_png_128px.png";
  w_r.id = "piece";
  file.appendChild(w_r);
}
function w_drawknight(file) {
  const w_n = document.createElement("img");
  w_n.src = "/Pieces/w_knight_png_128px.png";
  w_n.id = "piece";
  file.appendChild(w_n);
}
function w_drawbishop(file) {
  const w_b = document.createElement("img");
  w_b.src = "/Pieces/w_bishop_png_128px.png";
  w_b.id = "piece";
  file.appendChild(w_b);
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const file = document.createElement("div");
    file.classList.add("file");
    Board_class.appendChild(file);
    if((i+j)%2==0){
        file.style.background = "rgb(109, 143, 75)";
    }
    else{
        file.style.background = "rgb(238, 238, 210)";
    }
    
    if (window.board[i][j] === -1) {
      b_drawpawn(file);
    } else if (window.board[i][j] === -2) {
      b_drawrook(file);
    } else if (window.board[i][j] === -3) {
      b_drawknight(file);
    } else if (window.board[i][j] === -4) {
      b_drawbishop(file);
    } else if (window.board[i][j] === -5) {
      file.appendChild(b_q);
    } else if (window.board[i][j] === -6) {
      file.appendChild(b_k);
    }
    if (window.board[i][j] === 1) {
      w_drawpawn(file);
    } else if (window.board[i][j] === 2) {
      w_drawrook(file);
    } else if (window.board[i][j] === 3) {
      w_drawknight(file);
    } else if (window.board[i][j] === 4) {
      w_drawbishop(file);
    } else if (window.board[i][j] === 5) {
      file.appendChild(w_q);
    } else if (window.board[i][j] === 6) {
      file.appendChild(w_k);
    }
  }
}
