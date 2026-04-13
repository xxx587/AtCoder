import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\AtCoder\\src\\input.txt' : '/dev/stdin';
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const input = stdInput.trim().split(/\r?\n/);
	const [N, M] = input[0].split(/\s+/).map(Number);
	const imgA = input.slice(1, N + 1);
	const imgB = input.slice(N + 1);

	for (let i = 0; i <= N - M; i++) {
		for (let j = 0; j <= imgA.length - imgB.length; j++) {
			let match: boolean = true;

			for (let k = 0; k < M; k++) {
				for (let l = 0; l < M; l++) {
					if (imgA[i + k][j + l] !== imgB[k][l]) {
						match = false;
						break;
					}
				}
				if (!match) {
					break;
				}
			}

			if (match) {
				console.log('Yes');
				return;
			}
		}
	}
	console.log('No');
};

main();
