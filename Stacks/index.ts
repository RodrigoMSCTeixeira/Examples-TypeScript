/*

Classe Pilha (Stack, em inglês)

    Métodos:
        1.	push() -> Adiciona um na pilha;
        2.	pop() -> Remove um elementos da pilha;
        3.	peek() -> Retorna o elemento que está no topo da pilha;
        4.	isEmpty() -> Verifica se a pilha está vazia;
        5.	size() -> Retorna o tamanho da pilha;
        6.	clear() -> Limpa os elementos da pilha.
        7.  showElements() -> Retorna todos os elementos da pilha;

*/

class Stack {

    private items: number []

    constructor() {
        this.items = []
    }

    push = (element: number) => {
        return this.items.push(element)
    }

    pop = () => {
        return this.items.pop()
    }

    peek = () => {
        return this.items[this.items.length - 1]
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length
    }

    clear = () => {
        this.items = []
    }

    showElements = () => {
        const lastIndex = this.items.length - 1

        const elements = this.items.map((item, index) => {
            let object = {}
            index === lastIndex ? 
            object = {
                index: index,
                value: item,
                warn: 'Esse é o último elemento adcionado na pilha!'
            }
            :
            object = {
                index: index,
                value: item, 
            }
      
            return object
        })

        return elements
    }
}