import * as fs from "fs";

const stdInput: string = fs.readFileSync("/dev/stdin", "utf8");

const Main = () => {
    const input: string[] = stdInput.trim().split(/\s+/);
    let num1: number = 0;
    let num2: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '5') {
            num1++;
        } else if (input[i] === '7') {
            num2++;
        }
    }
    if (num1 === 2 && num2 === 1) {
        console.log('YES');
    } else {
        console.log('NO');
    }
};

Main();