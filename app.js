const box = document.getElementById('board');
const image = document.createElement('img');
 image.src = "/Pieces/b_bishop_png_128px.png"
 image.style.height = "50px";
for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){

        const cell = document.createElement('div')
        cell.classList.add('cell');
        box.appendChild(cell);
        cell.appendChild(image)
        cell.addEventListener('click', () => {
            cell.classList.toggle('active');
        });
        
        
        
    }
}

