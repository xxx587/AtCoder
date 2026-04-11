import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = (): void => {
	const arr: string[] = stdInput.trim().split(/\s+/);

	const A: string = arr[0].slice(0, 1);
	const B: string = arr[1].slice(0, 1);
	const C: string = arr[2].slice(0, 1);

	console.log(A + B + C);
};

main();
