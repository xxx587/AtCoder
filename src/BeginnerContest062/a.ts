import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const [X, Y] = stdInput.trim().split(/\s+/).map(Number);
	const arr1: number[] = [1, 3, 5, 7, 8, 10, 12];
	const arr2: number[] = [4, 6, 9, 11];

	if (X === 2 || Y === 2) {
		console.log('No');
		return;
	}

	if (arr1.includes(X) && arr1.includes(Y)) {
		console.log('Yes');
	} else if (arr2.includes(X) && arr2.includes(Y)) {
		console.log('Yes');
	} else {
		console.log('No');
	}
};

main();
