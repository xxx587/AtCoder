import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const strInput: string = fs.readFileSync(inputPath, 'utf-8');

const Main = () => {
    const input: string[] = strInput.trim().split('');
    const result: string[] = [];

    for (const i of input) {
        if (i === '0') {
            result.push('0');
        } else if (i === '1') {
            result.push('1');
        } else {
            result.pop();
        }
    }
    console.log(result.join(''));

}
Main();