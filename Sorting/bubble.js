
var beep = new Audio('beep3.mp3');
var mouseclick = new Audio('Mouseclick.mp3');
var done = new Audio('wrong.mp3');

let originalArray = []; // Store original array for repeatable sorting

// Capture the original array whenever new array is generated
function captureOriginalArray() {
    const bars = document.querySelectorAll('.bar');
    originalArray = Array.from(bars).map(bar => parseInt(bar.style.height));
}

// Call this initially after creating bars
captureOriginalArray();

// Swapping two bars
function swapping(element1, element2) {
    // Swap heights
    let tempHeight = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = tempHeight;

    // Update displayed numbers based on new heights
    element1.innerHTML = `${parseInt(element1.style.height) / 4}`;
    element2.innerHTML = `${parseInt(element2.style.height) / 4}`;
}

// Reset bars to original array
function resetBars() {
    const element = document.querySelectorAll('.bar');
    element.forEach((bar, index) => {
        bar.style.height = `${originalArray[index]}px`;
        bar.innerHTML = `${originalArray[index] / 4}`;
        bar.style.background = 'cyan';
    });
}

// Disable / Enable buttons
function disableSortingBtn() {
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}
function enableSortingBtn() {
    document.querySelectorAll('button').forEach(btn => btn.disabled = false);
}
function disableSizeSlider() { document.querySelector("#size_slider").disabled = true; }
function enableSizeSlider() { document.querySelector("#size_slider").disabled = false; }
function disableNewArrayBtn() { document.querySelector("#generate").disabled = true; }
function enableNewArrayBtn() { document.querySelector("#generate").disabled = false; }

// Bubble Sort Button
const BubbleSortButton = document.querySelector(".BubbleSort");
BubbleSortButton.addEventListener('click', async function () {
    mouseclick.play();
    selectText.innerHTML = `Bubble Sort..`;
    document.querySelector('#description').style.display = 'flex';
    document.querySelector('#fullbody').style.height = '184vh';

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    resetBars(); // Reset bars to original array
    await BubbleSort();

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

// Wait helper
function waitforme(milisec) {
    return new Promise(resolve => setTimeout(resolve, milisec));
}

// Bubble Sort Implementation
async function BubbleSort() {
    const element = document.querySelectorAll('.bar');
    for (let i = 0; i < element.length - 1; i++) {
        for (let j = 0; j < element.length - i - 1; j++) {
            element[j].style.background = 'rgb(250, 5, 54)';
            element[j + 1].style.background = 'rgb(250, 5, 54)';

            if (parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                await waitforme(delay);
                swapping(element[j], element[j + 1]);
                beep.play();
            }

            // Reset colors after comparison
            element[j].style.background = 'cyan';
            element[j + 1].style.background = 'cyan';
        }
        element[element.length - 1 - i].style.background = 'rgb(0,255,0)';
    }
    element[0].style.background = 'rgb(0,255,0)';
    done.play();
    selectText.innerHTML = `Sorting Complete!`;
}

// ✅ New Array Button Handling (INSERTED CODE)
document.querySelector("#generate").addEventListener("click", function () {
    generateNewArray();      // create a new random array (make sure this function exists)
    captureOriginalArray();  // store the fresh unsorted array
});
