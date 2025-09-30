var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')


const QuickSortbutton = document.querySelector(".QuickSort");
QuickSortbutton.addEventListener('click', async function () {
    selectText.innerHTML = `Quick Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_quick()
    let element = document.querySelectorAll('.bar');
    let low = 0;
    let high = element.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(element, low, high);
    selectText.innerHTML=`Sorting Complete!`
    done.play();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

async function descriptionText_quick() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `// C++ Program to demonstrate how to implement the quick
// sort algorithm

class Solution {
  public:
    void quickSort(vector<int>& arr, int low, int high) {
        if(low < high){
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

  public:
    int partition(vector<int>& arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for(int j = low; j < high; j++){
            if(arr[j] <= pivot){
                i++;
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        return i + 1;
    }
};
`

    const time = document.querySelector('#time')
    time.innerHTML = `Time Complexity: 
Best & Average Case: O(n log n)
Worst Case: O(n²)`

    const space = document.querySelector('#space')
    space.innerHTML = `Space Complexity: O(log n)`
}
// 🔥 swap function to move both height + value
function swapping(el1, el2) {
    let tempHeight = el1.style.height;
    let tempValue = el1.innerHTML;

    el1.style.height = el2.style.height;
    el1.innerHTML = el2.innerHTML;

    el2.style.height = tempHeight;
    el2.innerHTML = tempValue;
}

// Partition (C++ logic adapted)
async function partition(element, low, high) {
    let pivot = parseInt(element[high].style.height);
    let i = low - 1;

    element[high].style.background = "red"; // pivot

    for (let j = low; j < high; j++) {
        await waitforme(delay);
        beep.play();

        element[j].style.background = "yellow";

        if (parseInt(element[j].style.height) <= pivot) {
            i++;
            swapping(element[i], element[j]);

            element[i].style.background = "orange";
            if (i != j) element[j].style.background = "orange";
        } else {
            element[j].style.background = "pink";
        }
    }

    await waitforme(delay);

    swapping(element[i + 1], element[high]);  // pivot swap
    element[high].style.background = "pink";
    element[i + 1].style.background = "green";
    element[i + 1].style.color = "white";

    // reset others
    for (let k = 0; k < element.length; k++) {
        if (element[k].style.background != "green")
            element[k].style.background = "cyan";
    }

    return i + 1;
}

// QuickSort recursive (C++ style)
async function quickSort(element, low, high) {
    if (low < high) {
        let pi = await partition(element, low, high);

        await quickSort(element, low, pi - 1);
        await quickSort(element, pi + 1, high);
    } else {
        if (low >= 0 && high >= 0 && low < element.length && high < element.length) {
            element[low].style.background = "green";
            element[high].style.background = "green";
            element[low].style.color = "white";
            element[high].style.color = "white";
        }
    }
}
