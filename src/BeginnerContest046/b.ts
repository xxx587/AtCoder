import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [N, K] = stdInput.trim().split(/\s+/).map(Number);

	console.log(K * Math.pow(K - 1, N - 1));
};

main();
