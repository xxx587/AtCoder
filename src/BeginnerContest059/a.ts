import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: string[] = stdInput
		.trim()
		.split(/\s+/)
		.map((input) => input.charAt(0).toUpperCase());
	console.log(input.join(''));
};

main();
