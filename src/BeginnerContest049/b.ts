import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [H, K, ...input]: string[] = stdInput.trim().split(/\s+/);
	let answer: string = '';

	for (let i = 0; i < input.length; i++) {
		answer = answer.concat(input[i] + '\n');
		answer = answer.concat(input[i] + '\n');
	}
	console.log(answer);
};

main();
