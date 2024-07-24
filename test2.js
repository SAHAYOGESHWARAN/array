
function processTestCases(input) {
    let lines = input.trim().split('\n');
    let T = parseInt(lines[0]);
    let index = 1;

    for (let t = 0; t < T; t++) {
        let N = parseInt(lines[index]);
        index++;
        let heights = [];
        
        for (let n = 0; n < N; n++) {
            heights.push(parseInt(lines[index]));
            index++;
        }

        
        console.log(`Test Case ${t + 1}: Heights = ${heights.join(', ')}`);
    }
}


let input = `2
3
100
200
300
2
400
500`;


processTestCases(input);



//output
// Test Case 1: Heights = 100, 200, 300
//Test Case 2: Heights = 400, 500