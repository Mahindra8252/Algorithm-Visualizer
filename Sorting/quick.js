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
    // enableSortingBtn();
    // enableSizeSlider();
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
#include <bits/stdc++.h>
using namespace std;

int partition(vector<int> &vec, int low, int high) {

    // Selecting last element as the pivot
    int pivot = vec[high];

    // Index of elemment just before the last element
    // It is used for swapping
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {

        // If current element is smaller than or
        // equal to pivot
        if (vec[j] <= pivot) {
            i++;
            swap(vec[i], vec[j]);
        }
    }

    // Put pivot to its position
    swap(vec[i + 1], vec[high]);

    // Return the point of partition
    return (i + 1);
}

void quickSort(vector<int> &vec, int low, int high) {

    // Base case: This part will be executed till the starting
    // index low is lesser than the ending index high
    if (low < high) {

        // pi is Partitioning Index, arr[p] is now at
        // right place
        int pi = partition(vec, low, high);

        // Separately sort elements before and after the
        // Partition Index pi
        quickSort(vec, low, pi - 1);
        quickSort(vec, pi + 1, high);
    }
}

int main() {
    vector<int> vec = {10, 7, 8, 9, 1, 5};
    int n = vec.size();
    
      // Calling quicksort for the vector vec
    quickSort(vec, 0, n - 1);

    for (auto i : vec) {
        cout << i << " ";
    }
    return 0;
}


`
    const time = document.querySelector('#time')
    time.innerHTML = `Worst Case: The worst case occurs when the partition process always picks the greatest or smallest element as the pivot.
If we consider the above partition strategy where the last element is always picked as a pivot, the worst case would occur when the array is already sorted in increasing or decreasing order. 
Following is recurrence for the worst case.  

Best Case:
The best case occurs when the partition process always picks the middle element as the pivot. 
The following is recurrence for the best case.

Average Case: 
To do average case analysis, we need to consider all possible permutation of array and calculate time taken by every permutation which doesn’t look easy. 
We can get an idea of average case by considering the case when partition puts O(n/9) elements in one set and O(9n/10) elements in other set. 
Following is recurrence for this case.
`

    const space = document.querySelector('#space')
    space.innerHTML = `Space cmplexity : O(N)

as we are not creating any container other then given array therefore Space complexity will be in order of N
     `
}


async function partition(element, low, high) {
    beep.play();
    let i = low - 1;
    element[high].style.background = 'red';
    for (let j = low; j <= high - 1; j++) {
        beep.play();
        element[j].style.background = 'yellow';
        await waitforme(delay);

        if (parseInt(element[j].style.height) < parseInt(element[high].style.height)) {
            beep.play();
            i++;
            swapping(element[i], element[j]);

            element[i].style.background = 'orange';
            if (i != j) element[j].style.background = 'orange';

            await waitforme(delay);
        }
        else {
            beep.play();
            element[j].style.background = 'pink';
        }
    }
    i++;

    await waitforme(delay);
    swapping(element[i], element[high]);

    element[high].style.background = 'pink';
    element[i].style.background = 'green';
    element[i].style.color = 'white';


    await waitforme(delay);


    for (let k = 0; k < element.length; k++) {
        beep.play();
        if (element[k].style.background != 'green')
            element[k].style.background = 'cyan';
    }

    return i;
}



async function quickSort(element, low, high) {
    if (low < high) {
        beep.play();
        let pivot_index = await partition(element, low, high);
        await quickSort(element, low, pivot_index - 1);
        await quickSort(element, pivot_index + 1, high);
    }
    else {

        if (low >= 0 && high >= 0 && low < element.length && high < element.length) {
            beep.play();
            element[high].style.background = 'green';
            element[low].style.background = 'green';
            element[high].style.color = 'white';
            element[low].style.color = 'white';
        }
    }
}