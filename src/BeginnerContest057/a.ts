import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [A, B]: number[] = stdInput.trim().split(/\s+/).map(Number);
	if (A + B >= 24) {
		console.log(A + B === 24 ? 0 : A + B - 24);
	} else {
		console.log(A + B);
	}
};

main();
