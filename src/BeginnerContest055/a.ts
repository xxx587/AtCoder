import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: number = parseInt(stdInput.trim());
	const a = 800 * input;
	const b = input >= 15 ? Math.floor(input / 15) : 0;
	console.log(a - b * 200);
};

main();
