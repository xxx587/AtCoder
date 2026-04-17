import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: number[] = stdInput.trim().split(/\s/).map(Number);
	if (input[0] > input[1]) {
		console.log('GREATER');
	} else if (input[0] < input[1]) {
		console.log('LESS');
	} else {
		console.log('EQUAL');
	}
};

main();
