let currentSquare = null;

function ColorSwap(color) {
    if (currentSquare === null) {
        currentSquare = document.createElement('div');
        currentSquare.classList.add('square');
        currentSquare.style.borderColor = color;
        document.querySelector('.square-container').appendChild(currentSquare);

        setTimeout(() => {
            currentSquare.style.backgroundColor = color;
            currentSquare.style.opacity = 1;
            currentSquare.style.transform = 'translateY(0)';
        }, 50);
    } else {
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.borderColor = color;
        document.querySelector('.square-container').appendChild(newSquare);

        newSquare.style.transform = 'translateY(-100%)';
        newSquare.style.opacity = 0;
        newSquare.offsetHeight;

        currentSquare.style.transform = 'translateY(-100%)';
        currentSquare.style.opacity = 0;

        setTimeout(() => {
            newSquare.style.transform = 'translateY(0)';
            newSquare.style.opacity = 1;
        }, 50);

        setTimeout(() => {
            newSquare.style.backgroundColor = color;
        }, 500);

        setTimeout(() => {
            document.querySelector('.square-container').removeChild(currentSquare);
            currentSquare = newSquare;
        }, 1000);
    }
}
