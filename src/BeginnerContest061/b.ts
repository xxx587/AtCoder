import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [N, M, ...input]: number[] = stdInput.trim().split(/\s+/).map(Number);
	let count: number[] = new Array(N + 1).fill(0);

	for (let i = 0; i < input.length; i++) {
		const city = input[i];
		count[city]++;
	}

	for (let i = 1; i <= N; i++) {
		console.log(count[i]);
	}
};

main();
