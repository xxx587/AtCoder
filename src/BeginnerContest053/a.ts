import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const input: number = Number(stdInput.trim());
	console.log(input >= 1200 ? 'ARC' : 'ABC');
};

main();
