import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(inputPath, 'utf-8');

const Main = () => {
	const input: number[] = stdInput.trim().split(/\s+/).map(Number).splice(1);
	let avg: number = 0;

	for (let i = 0; i < input.length; i++) {
		avg += input[i];
	}

	avg = Math.round(avg / input.length);
	let result: number = 0;

	for (let i = 0; i < input.length; i++) {
		result += Math.pow(input[i], 2) - 2 * input[i] * avg + Math.pow(avg, 2);
	}
	console.log(result);
};
Main();
