import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const Main = () => {
    const [N, A, ...cards]: number[] = stdInput.trim().split(/\s+/).map(Number);
    const b: number[] = cards.map(x => x - A);
    let counts: { [key: number]: number } = {0: 1};

    for (const x of b) {
        const nextCounts = {...counts};

        for (const i in counts) {
            const currentSum: number = Number(i);
            const nextSum: number = currentSum + x;
            nextCounts[nextSum] = (nextCounts[nextSum] || 0) + counts[currentSum];
        }
        counts = nextCounts;
    }
    console.log(counts[0] - 1);

}

Main();