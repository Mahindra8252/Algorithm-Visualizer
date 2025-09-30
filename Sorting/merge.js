//Merged sort is basically based on DIVIDE AND CONQUER RULE
// First we have to divide the whole array into smaller parts.
//a. si --> mid and another one is b. mid+1 --> ei
//Then we have to follow this steps until we get a single elements
//then we have to sort that indivitual arrays
//then put it into an empty array which is a merged array and a sorted array too
//this is the conquer step and thus we can easily do the merge sort



var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')
const MergeSortButton = document.querySelector(".MergeSort");

MergeSortButton.addEventListener('click', async function () {
   // headingchange1.textContent = "Merge Sort";
   selectText.innerHTML = `Merge Sort..`
   mouseclick.play()
   const description = document.querySelector('#description')
   description.style.display = 'flex'
   const section = document.querySelector('#fullbody')
   section.style.height = '184vh'

   await descriptionText_merge();
   let element = document.querySelectorAll('.bar');
   let si = 0;
   let ei = parseInt(element.length) - 1;
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();

   await MergeSort(element, si, ei);
   selectText.innerHTML=`Sorting Complete!`
   done.play();
   enableSortingBtn();
   enableSizeSlider();
   enableNewArrayBtn();

});



async function descriptionText_merge() {
   const section = document.querySelector('#fullbody')
   section.style.height = `184vh`

   const description = document.querySelector('#description')
   description.style.display = 'flex'

   const code = document.querySelector('.language-java')
   // console.log(code.innerHTML)
   code.innerHTML = `// C++ program for the implementation of merge sort
class Solution {
  public:
  
    void merge(vector<int>&arr, int low,int mid,int heigh){
        vector<int>temp;
        int left=low;
        int right=mid+1;
        
        while(left<=mid && right<=heigh){
            if(arr[left]<=arr[right]){
                temp.push_back(arr[left]);
                left++;
            }else{
                temp.push_back(arr[right]);
                right++;
            }
        }
        while(left<=mid){
            temp.push_back(arr[left]);
                left++;
        }
        while(right<=heigh){
            temp.push_back(arr[right]);
                right++;
        }
        
        for(int i=low; i<=heigh;i++){
            arr[i]=temp[i-low];
        }
        
    }
    void mergeSort(vector<int>& arr, int low, int heigh ) {
        // code here
        if(low>=heigh)return;
        int mid=(low+heigh)/2;
        mergeSort(arr,low,mid);
        mergeSort(arr, mid+1,heigh);
        
        merge(arr,low,mid,heigh);
        
    }
};


`
   const time = document.querySelector('#time')
   time.innerHTML = `Time Complexity: Best: O(N log N), Average: O(N log N), Worst: O(N log N)`

   const space = document.querySelector('#space')
   space.innerHTML = `Space Complexity: O(N)`


}
// Divide
async function MergeSort(element, si, ei) {
   if (si >= ei) {
      return;
   }

   const mid = Math.floor((si + ei) / 2);

   await MergeSort(element, si, mid);
   await MergeSort(element, mid + 1, ei);

   await Merge(element, si, mid, ei);
}

// Conquer
async function Merge(element, low, mid, high) {
   let temp = [];
   let left = low;
   let right = mid + 1;

   // merge logic (like your C++ code)
   while (left <= mid && right <= high) {
      await waitforme(delay);
      beep.play();

      if (parseInt(element[left].style.height) <= parseInt(element[right].style.height)) {
         temp.push({
            height: element[left].style.height,
            value: element[left].innerHTML
         });
         element[left].style.background = "red";
         left++;
      } else {
         temp.push({
            height: element[right].style.height,
            value: element[right].innerHTML
         });
         element[right].style.background = "yellow";
         right++;
      }
   }

   while (left <= mid) {
      await waitforme(delay);
      beep.play();
      temp.push({
         height: element[left].style.height,
         value: element[left].innerHTML
      });
      element[left].style.background = "red";
      left++;
   }

   while (right <= high) {
      await waitforme(delay);
      beep.play();
      temp.push({
         height: element[right].style.height,
         value: element[right].innerHTML
      });
      element[right].style.background = "yellow";
      right++;
   }

   // copy back into original array
   for (let i = low; i <= high; i++) {
      await waitforme(delay);
      beep.play();

      element[i].style.height = temp[i - low].height;
      element[i].innerHTML = temp[i - low].value;

      element[i].style.background =
         (high - low + 1 === element.length) ? "rgb(0,255,0)" : "lightgreen";
   }
}
