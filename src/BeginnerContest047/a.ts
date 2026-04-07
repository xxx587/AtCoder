import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [A, B, C] = stdInput
		.trim()
		.split(/\s+/)
		.map(Number)
		.sort((a, b) => a - b);

	if (C === A + B) {
		console.log('Yes');
	} else {
		console.log('No');
	}
};

main();
