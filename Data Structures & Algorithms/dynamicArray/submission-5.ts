class DynamicArray {
    private array: Array<any>;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i] ?? null;
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        if(i <= this.getCapacity()) {
            this.array[i] = n;
        }
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        const size = this.getSize();
        if(size === this.getCapacity()) {
            this.resize();
        }
        this.set(size, n);
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const lastIndex = this.getSize() - 1;
        const lastEl = this.get(lastIndex);
        this.set(lastIndex, undefined);
        return lastEl;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newArray = new Array(this.getCapacity());
        this.array = this.array.concat(newArray);
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.array.reduce((acc, cur) => cur !== undefined ? acc+=1 : acc, 0);
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.array.length;
    }
}
