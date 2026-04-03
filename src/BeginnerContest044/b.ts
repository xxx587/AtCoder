import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const Main = () => {
    const input: string[] = stdInput.trim().split('');

    for (let i: number = 0; i < input.length; i++) {
        let count: number = 0;
        for (let j: number = 0; j < input.length; j++) {
            if (input[i] === input[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            console.log('No');
            return;
        }
    }
    console.log('Yes');
}

Main();