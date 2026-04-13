import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [A, B]: number[] = stdInput.trim().split(/\s+/).map(Number);
	if (A === 1 || B === 1) {
		if (A > B) {
			console.log('Bob');
		} else if (A < B) {
			console.log('Alice');
		} else {
			console.log('Draw');
		}
	} else {
		if (A > B) {
			console.log('Alice');
		} else if (A < B) {
			console.log('Bob');
		} else {
			console.log('Draw');
		}
	}
};

main();
