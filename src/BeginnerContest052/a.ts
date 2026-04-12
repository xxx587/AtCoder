import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const [A, B, C, D] = stdInput.trim().split(/\s+/).map(Number);
	console.log(A * B > C * D ? A * B : C * D);
};

main();
