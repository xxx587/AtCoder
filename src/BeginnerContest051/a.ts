import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const input: string = stdInput.trim();
	console.log(input.replaceAll(',', ' '));
};

main();
