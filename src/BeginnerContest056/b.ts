import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [W, a, b]: number[] = stdInput.trim().split(/\s+/).map(Number);
	const distance = Math.abs(a - b);
	const result = distance <= W ? 0 : distance - W;

	console.log(result);
};

main();
