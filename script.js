const container = document.getElementById('container');
const btn = document.getElementById('btn');
function makeGrid(size) {
    const boxCount = size**2;
    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        container.appendChild(box).className = 'box';
        box.addEventListener('mouseover', () => 
            box.style.backgroundColor = 'green');
    }
}
makeGrid(16);