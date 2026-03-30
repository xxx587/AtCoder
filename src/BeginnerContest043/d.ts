import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(inputPath, 'utf-8');

const Main = () => {
    const input: string[] = stdInput.trim().split('');
    let i: number = 0;

    while (i < input.length) {

        if (i + 1 < input.length && input[i] === input[i + 1]) {
            console.log(`${i + 1} ${i + 2}`);
            return;
        }

        if (i + 2 < input.length && input[i] === input[i + 2]) {
            console.log(`${i + 1} ${i + 3}`);
            return;
        }

        if (i === input.length - 1) {
            console.log('-1 -1');
            return;
        }

        i++;
    }
}

Main();