import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf-8');

const main = () => {
	const [K, S] = stdInput.trim().split(' ').map(Number);
	let count = 0;

	for (let i = 0; i <= K; i++) {
		for (let j = 0; j <= K; j++) {
			const k = S - i - j;
			if (k >= 0 && k <= K) {
				count++;
			}
		}
	}
	console.log(count);
};

main();
