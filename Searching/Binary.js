console.log('binary')
var count = 0

// Function to clear all colors and reset bars to default
function clearColors(array) {
    array.forEach((bar) => {
        bar.style.background = 'white'
        bar.style.color = 'black'
    })
}

// Function to highlight the search region in blue
function highlightRegion(array, low, high) {
    for (let i = low; i <= high; i++) {
        if (i < array.length) {
            array[i].style.background = '#48cae4'  // Blue color for search region
            array[i].style.color = 'black'
        }
    }
}

async function binarySearch(array, n, val) {
    let low = 0, high = n - 1;
    
    // Initially highlight the entire array as search region
    highlightRegion(array, low, high);
    await waitcount(delay);
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        console.log(mid)
        console.log(val)
        
        // Highlight current mid element being checked
        array[mid].style.background ='#fb8500'
        array[mid].style.color = 'white'
        await waitcount(delay)
        
        if (array[mid].innerHTML == val) {
            // Found the element
            array[mid].style.background = 'green'
            array[mid].style.color = '#fcfcfc'
            findedAudio.play()
            findingAudio.pause()
            count++
            console.log(count)
            const step = document.querySelector('.step')
            step.innerHTML = `${count}`
            return mid;
        }
        
        // if val is greater than array[mid].. shrink the left part of the array
        if (val > array[mid].innerHTML) {
            findingAudio.play()
            count++
            low = mid + 1;
            
            // Clear all colors and highlight new search region (right side)
            if (low <= high) {
                await waitcount(delay);
                clearColors(array);
                highlightRegion(array, low, high);
            } else {
                clearColors(array);
            }
        }
        else {
            high = mid - 1;
            findingAudio.play()
            count++
            
            // Clear all colors and highlight new search region (left side)
            if (low <= high) {
                await waitcount(delay);
                clearColors(array);
                highlightRegion(array, low, high);
            } else {
                clearColors(array);
            }
        }
        
        await waitcount(delay)
    }
    
    findingAudio.pause()
    return -1
}

//sorting before binary sort
async function sorting(array) {
    array.sort((a, b) => {
        return a.innerHTML - b.innerHTML
    })
    return array
}

async function Arrange(Array) {
    const body = document.querySelector('#mainbody')
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    for (let i = 0; i < Array.length; i++) {
        body.appendChild(Array[i])
    }
}

async function descriptionText() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_java')
    // console.log(code.innerHTML)
    code.innerHTML = `

int binarySearch(vector<int>& nums, int target) {
    int n = nums.size(); //size of the array
    int low = 0, high = n - 1;

    // Perform the steps:
    while (low <= high) {
        int mid = (low + high) / 2;
        if (nums[mid] == target) return mid;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}


`
    const time = document.querySelector('#time')
    time.innerHTML = `
> Best-case complexity = The best-case time complexity  would be O(1)
when the central index would directly match the desired value.
> Worst-case complexity = O(log n) in the worst case. 
> Average complexity = The average case time complexity 
of the binary search algorithm is O(log n)
`

    const space = document.querySelector('#space')
    space.innerHTML = `Binary Search will be an O(log n) space complex
in a recursive implementation.
Binary Search will be executed iteratively so that the 
space complexity is O(1).
Two variables are required to keep track of the number 
of elements that need to be checked... 
Additional data is not necessary.`
}

const binary = document.querySelector('#binary_Search').addEventListener('click', async () => {
    console.log('clicked')
    
    mouseclick.play()
    const array1 = document.querySelectorAll('.bars')
    // console.log(array1) provide nodelist

    // Reset all bars to default color
    clearColors(array1)

    count=0 
    
    let Array = []
    array1.forEach((element) => {
        Array.push(element)
    })
    // console.log(Array)

    const val = document.querySelector('#searchingVal').value
    if (val != '') {
        searchText.innerHTML=`Binary Searching..`
        await sorting(Array)
        await Arrange(Array)
        // console.log(Array)
        console.log(parseInt(val))

        await descriptionText()
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        var ind = await binarySearch(Array, Array.length, parseInt(val))
        // console.log(ind)
        const index = document.querySelector('.index')
        if (ind != -1) {
            searchText.innerHTML=`Searching Complete`
            index.innerHTML = `${val} is present at index no. ${ind} `
        }
        else {
            searchText.innerHTML=`Not Found!!`
            index.innerHTML = `${val} is not present in the array!!`
        }

    }
    else {
        alert('Pleae put Searching Value first!!😕😕')
    }
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})
