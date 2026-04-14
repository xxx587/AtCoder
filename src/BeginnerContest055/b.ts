import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: bigint = BigInt(stdInput.trim());
	let power: bigint = 1n;
	const remainder: bigint = 1000000007n;

	for (let i = 1n; i <= input; i++) {
		power = (power * i) % remainder;
	}

	console.log(power.toString());
};

main();
