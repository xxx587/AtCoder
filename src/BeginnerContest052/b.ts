import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : '/dev/stdin';
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const [A, S] = stdInput.trim().split(/\s+/);
	const N = Number(A);
	let sum: number = 0;
	let MAX: number = 0;

	for (let i = 0; i < N; i++) {
		if (S[i] === 'I') {
			++sum;
		} else {
			--sum;
		}

		MAX = Math.max(MAX, sum);
	}

	console.log(MAX);
};

main();
