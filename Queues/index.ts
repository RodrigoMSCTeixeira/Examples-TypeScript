/*

Classe Queue (Fila, em inglês)

    Métodos:
        1.	enqueue() -> Adiciona um elemento na fila;
        2.	dequeue() -> Remove um elementos da fila;
        3.	peek() -> Retorna o primeiro elemento da fila;
        4.	isEmpty() -> Verifica se a fila está vazia;
        5.	size() -> Retorna o tamanho da fila;
        6.	clear() -> Limpa os elementos da fila.
        7.  toString() -> Exibe todos os elementos da fila;

*/

interface MyQueue {
    enqueue(item: string): void
    isEmpty(): boolean
    dequeue(): string | undefined
    peek(): string | undefined
    size(): number
    clear(): void
    toString(): string | undefined
}

interface Item  {
    [key: number]: string
}

class Queue implements MyQueue {

    private count: number;
    private lowestCount: number;
    private items: Item;

    constructor() {
        this.items = {};
        this.lowestCount = 0 ;
        this.count = 0;
    }

    enqueue = (element: string) => {
        this.items[this.count] = element;
        this.count++;
    };

    isEmpty = () => {
        return this.count - this.lowestCount === 0;
    };

    dequeue = () => {
        if (this.isEmpty()) {
        return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };

    peek = () => {
        if (this.isEmpty()) {
        return undefined;
        }
        return this.items[this.lowestCount];
    };

    size = () => {
        return this.count - this.lowestCount;
    };

    clear = () => {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };

    toString = () => {
        if (this.isEmpty()) {
        return undefined;
        }

        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
        }

        return objString;
    };
}
