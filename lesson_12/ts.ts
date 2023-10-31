let n: number | string = 12;
const str: string = 'asd';
const boll: boolean = true;
let und: undefined;
const nul: null = null;
n = 'str'

const arr: (string | number)[] = ['add', 12, '14', 'undefined', 'true'];
const arr1: Array<string> = ['add', '12', '14', 'undefined', 'true'];
const arr2: [number, string, boolean, boolean] = [12, 'str', true, false];
const arr4: any[] = ['add', 12, '14', 'undefined', 'true', true, [], {}];

let bn: bigint = 12312434234234423423n;

export enum Car {
    Toyota = 'Toyota',
    Nissan = 'Nissan',
    Honda = 'Honda',
}

console.log(Car.Honda);

function add(n: number, n1: number, n2?: number): number {
    return n + n;
}

console.log(add(12, 12))

function addStr(n: string, n1: string): string {
    return n + n;
}

function addVoid(n: string, n1: string): void {
    n + n;
}

async function minus(n: string, n1: string): Promise<string> {
    return n + n
}

add(12, 12);

function multiply<T,D>(n1: T, n2: D): (T|D)[] {
    return [n1, n2];
}

console.log(multiply(12, 12));
console.log(multiply('12', '12'));
console.log(multiply('12', '12'));
console.log(multiply('12', 12));
