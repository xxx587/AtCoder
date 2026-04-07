import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: string[] = stdInput.trim().split(/\s+/);

	const deleteSame = [...new Set(input)];
	console.log(deleteSame.length);
};

main();
