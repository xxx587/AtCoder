import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = (): void => {
	const [A, B, C] = stdInput.trim().split(/\s+/).map(BigInt);

	let count = B / C - A / C;

	if (A % C === 0n) {
		count++;
	}

	console.log(count.toString());
};

main();
