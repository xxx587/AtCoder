import * as fs from 'fs';

const filePath = process.platform === 'win32' ? 'C:\\dev\\code\\GitHub\\atcoder\\src\\input.txt' : 0;
const stdInput = fs.readFileSync(filePath, 'utf8');

const main = () => {
	const lines: string[] = stdInput.trim().split(/\r?\n/);
	const [N, M]: number[] = lines[0].split(/\s+/).map(Number);
	const students: number[][] = lines.slice(1, N + 1).map((line) => line.split(/\s+/).map(Number));
	const checkpoints: number[][] = lines.slice(N + 1).map((line) => line.split(/\s+/).map(Number));

	for (let i = 0; i < N; i++) {
		const [studentX, studentY] = students[i];
		let minDistance = Infinity;
		let targetCheckpoint = -1;

		for (let j = 0; j < M; j++) {
			const [checkX, checkY] = checkpoints[j];
			const distance = Math.abs(studentX - checkX) + Math.abs(studentY - checkY);

			if (distance < minDistance) {
				minDistance = distance;
				targetCheckpoint = j + 1;
			}
		}

		console.log(targetCheckpoint);
	}
};

main();
