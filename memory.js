const storage = [];
const twoMegabytes = 1024 * 1024 * 2;
while (true) {
    const array = new Uint8Array(twoMegabytes);
    for (let ii = 0; ii < twoMegabytes; ii += 4096) {
        array[ii] = 1; // we have to put something in the array to flush to real memory
    }
    storage.push(array);
    console.log("I've wasted " + (storage.length * 2) + 'MB');
}
