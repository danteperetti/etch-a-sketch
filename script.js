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
btn.addEventListener('click', function () {
    const btnClick = parseInt(prompt('Enter the number of squares per side',''));
    if (btnClick <= 100 && btnClick >= 0) {
        makeGrid(btnClick);
    } else {
        alert('Nah that\'s stinky.');
    }
});
makeGrid(16);