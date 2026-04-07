import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input: string[] = stdInput.trim().split(/\s+/);
	if (input.length < 3) return;

	let a = input[0];
	let b = input[1];
	let c = input[2];

	let turn = 'a';

	while (true) {
		if (turn === 'a') {
			if (a.length === 0) {
				console.log('A');
				return;
			}
			turn = a[0];
			a = a.substring(1);
		} else if (turn === 'b') {
			if (b.length === 0) {
				console.log('B');
				return;
			}
			turn = b[0];
			b = b.substring(1);
		} else if (turn === 'c') {
			if (c.length === 0) {
				console.log('C');
				return;
			}
			turn = c[0];
			c = c.substring(1);
		}
	}
};

main();
