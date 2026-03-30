import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'C:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(inputPath, 'utf8');

const Main = () => {
    const input: string[] = stdInput.trim().split(/\s+/);
    const [N, L] = input.slice(0, 2).map(Number);
    const word: string[] = input.slice(2);
    word.sort();
    const result = word.join('');
    console.log(result);
}

Main();