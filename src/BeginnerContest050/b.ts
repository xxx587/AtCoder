import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : '/dev/stdin';
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const input: number[] = stdInput.trim().split(/\s+/).map(Number);

	const N = input[0];
	const T = input.slice(1, N + 1);
	const M = input[N + 1];
	let totalSum: number = 0;
	let result: string = '';

	for (let i = 0; i < N; i++) {
		totalSum += T[i];
	}

	let drinkIndex = N + 2;

	for (let i = 0; i < M; i++) {
		const P = input[drinkIndex + i * 2];
		const X = input[drinkIndex + i * 2 + 1];

		const originalTime = T[P - 1];
		const newSum = totalSum - originalTime + X;

		result += newSum.toString() + '\n';
	}

	console.log(result.trim());
};

main();
