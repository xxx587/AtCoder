import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(inputPath, 'utf-8');

const Main = () => {
	const input: number = Number(stdInput.trim());
	let result: number = 0;

	for (let i: number = 1; i <= input; i++) {
		result += i;
	}
	console.log(result);
};

Main();
