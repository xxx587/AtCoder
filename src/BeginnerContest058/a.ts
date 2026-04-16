import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [A, B, C]: number[] = stdInput.trim().split(/\s+/).map(Number);
	console.log(B - A === C - B ? 'YES' : 'NO');
};

main();
