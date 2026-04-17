import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: string[] = stdInput.trim().split(/\s/);
	const first: boolean = input[0].charAt(input[0].length - 1) === input[1].charAt(0);
	const second: boolean = input[1].charAt(input[1].length - 1) === input[2].charAt(0);
	console.log(first && second ? 'YES' : 'NO');
};

main();
