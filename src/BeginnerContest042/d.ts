import * as fs from 'fs';

const inputPath = process.platform === 'win32' ? 'c:\\dev\\code\\typescript\\src\\input.txt' : 0;
const stdInput: string = fs.readFileSync(inputPath, 'utf-8');

const MOD: bigint = 1000000007n;

const MAX = 200005;
const fact = new BigUint64Array(MAX);
const invFact = new BigUint64Array(MAX);

const power = (a: bigint, b: bigint): bigint => {
    let res = 1n;
    a %= MOD;
    while (b > 0n) {
        if (b % 2n === 1n) res = (res * a) % MOD;
        a = (a * a) % MOD;
        b /= 2n;
    }
    return res;
};

const prepare = () => {
    fact[0] = 1n;
    for (let i = 1; i < MAX; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD;

    invFact[MAX - 1] = power(fact[MAX - 1], MOD - 2n);
    for (let i = MAX - 2; i >= 0; i--) invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
};

const nCr = (n: number, r: number): bigint => {
    if (r < 0 || r > n) return 0n;
    return (((fact[n] * invFact[r]) % MOD) * invFact[n - r]) % MOD;
};

const Main = () => {
    const [H, W, A, B] = stdInput.trim().split(/\s+/).map(Number);
    prepare();

    let ans = 0n;

    for (let i = B; i < W; i++) {
        const way1 = nCr((H - A - 1) + i, i);
        const way2 = nCr((A - 1) + (W - i - 1), A - 1);
        ans = (ans + (way1 * way2) % MOD) % MOD;
    }

    console.log(ans.toString());
};

Main();