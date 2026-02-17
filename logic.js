

//basic moves
const file = document.querySelectorAll('#board .file'); // all created file

file.forEach(cell => {
    cell.addEventListener('click', () => {
        const row = Number(file.dataset.row);
        const col = Number(file.dataset.col);
        console.log(`Clicked cell at row ${row}, col ${col}`);
    });
});
