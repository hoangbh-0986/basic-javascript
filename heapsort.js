function sort( arr)
{
    var N = arr.length;

    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

function heapify(arr, N, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}

/* A utility function to print array of size n */
function printArray(arr)
{
    var N = arr.length;
    for (var i = 0; i < N; ++i)
        document.write(arr[i] + " ");
     
}


var arr = [12, 11, 13, 5, 6, 7];
var N = arr.length;

sort(arr);

document.write( "Sorted array is");
printArray(arr, N);