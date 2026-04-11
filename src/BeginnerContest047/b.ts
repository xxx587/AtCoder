import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'c:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(filePath, 'utf8');

const main = (): void => {
	const [W, H, N, ...queries] = stdInput.trim().split(/\s+/).map(Number);

	let minX = 0;
	let maxX = W;
	let minY = 0;
	let maxY = H;

	for (let i = 0; i < N; i++) {
		const x = queries[i * 3];
		const y = queries[i * 3 + 1];
		const a = queries[i * 3 + 2];

		if (a === 1) {
			minX = Math.max(minX, x);
		} else if (a === 2) {
			maxX = Math.min(maxX, x);
		} else if (a === 3) {
			minY = Math.max(minY, y);
		} else if (a === 4) {
			maxY = Math.min(maxY, y);
		}
	}
	const width = Math.max(0, maxX - minX);
	const height = Math.max(0, maxY - minY);

	console.log(width * height);
};

main();
