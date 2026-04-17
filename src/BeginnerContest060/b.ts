import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: bigint[] = stdInput.trim().split(/\s/).map(BigInt);
	for (let i = 1n; i <= input[1]; i++) {
		if ((input[0] * i) % input[1] === input[2]) {
			console.log('YES');
			return;
		}
	}
	console.log('NO');
};

main();
