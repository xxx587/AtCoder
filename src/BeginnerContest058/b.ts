import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [O, E]: string[] = stdInput.trim().split(/\r?\n/);
	let result: string = '';

	for (let i = 0; i < O.length; i++) {
		result += O[i];

		if (i < E.length) {
			result += E[i];
		}
	}
	console.log(result);
};

main();
