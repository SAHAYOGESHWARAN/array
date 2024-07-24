
function findElement(N, X, A) {
    for (let i = 0; i < N; i++) {
        if (A[i] === X) {
            return i; 
        }
    }
    return -1; 
}


let input = `5 3
1 2 3 4 5`;

let lines = input.split('\n');


let [N, X] = lines[0].split(' ').map(Number);


let A = lines[1].split(' ').map(Number);


let result = findElement(N, X, A);
console.log(result);
