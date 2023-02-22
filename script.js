function drawSquares() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.strokeRect(50, 50, 50, 50);
    }

}

drawSquares();