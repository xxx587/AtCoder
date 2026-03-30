import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const Main = () => {
    const [N, K, X, Y]: number[] = stdInput.trim().split(/\s+/).map(Number);
    if (N > K) {
        console.log((K * X) + ((N - K) * Y));
    } else {
        console.log(N * X);
    }
}

Main();