import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [A, B]: string[] = stdInput.trim().split(/\s+/);

	if (A === B) {
		console.log('H');
	} else {
		console.log('D');
	}
};

main();
