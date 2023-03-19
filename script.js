const container = document.getElementById('container');
function makeGrid() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        container.appendChild(box).className = 'box';
        box.addEventListener('mouseover', () => 
            box.style.backgroundColor = 'green');
    }
}
makeGrid();