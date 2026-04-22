import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [H, W, ...input]: string[] = stdInput.trim().split(/\s+/);
	const h: number = Number(H);
	const w: number = Number(W);
	let answer: string[] = new Array(h + 1).fill(0);

	for (let i = 0; i <= h + 1; i++) {
		switch (i === 0 || i === h + 1) {
			case true:
				answer[i] = '#'.repeat(w + 2);
				break;
			case false:
				answer[i] = '#' + input[i - 1] + '#';
				break;
		}
	}

	console.log(answer.join('\n'));
};

main();
