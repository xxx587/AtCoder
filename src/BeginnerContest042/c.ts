import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(inputPath, 'utf-8');

const Main = () => {
    const input: string[] = stdInput.trim().split(/\s+/);
    const [N, K] = input.slice(0, 2).map(Number);
    const index: string[] = input.slice(2);

    let result: number = N;

    while (true) {
        let hate: boolean = false;
        const currentStr: string = String(result);

        for (const i of index) {
            if (currentStr.includes(i)) {
                hate = true;
                break;
            }
        }

        if (!hate) {
            console.log(result);
            break;
        }

        result++;
    }
}

Main();