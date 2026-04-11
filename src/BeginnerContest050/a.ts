import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const [A, op, B] = stdInput.trim().split(' ');
	if (op === '+') {
		console.log(Number(A) + Number(B));
	} else {
		console.log(Number(A) - Number(B));
	}
};

main();
