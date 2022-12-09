type T = string | number;

class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    private head: Node<T> | null = null;

    public append(data: T): void {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let currentPointer: Node<T> = this.head;

            while (currentPointer.next !== null)
                currentPointer = currentPointer.next;

            currentPointer.next = new Node(data);
        }
    }

    public delete(data: T): void {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let prevPointer: Node<T> = this.head;
        let currentPointer: Node<T> = this.head.next;

        while (currentPointer) {
            if (currentPointer.data === data) currentPointer = null;
            else {
                prevPointer = currentPointer;
                currentPointer = currentPointer.next;
            }
        }
    }

    public printData(): void {
        if (!this.head) return;
        let current: Node<T> = this.head;
        let temp: T[] = [];

        while (current) {
            temp.push(current.data);
            current = current.next;
        }
        console.log(temp);
    }

    public addToTree(tree: BinarySearchTree): void {
        if (!this.head) return;

        let current: Node<T> = this.head;
        while (current) {
            if (this.isNumber(current.data)) tree.add(Number(current.data));
        }
    }

    private isNumber(data: T): boolean {
        return !Number.isNaN(Number(data));
    }
}

class BNode {
    data: number;
    public left: BNode | null = null;
    public right: BNode | null = null;

    constructor(data: number) {
        this.data = data;
    }
}

class BinarySearchTree {
    private root: BNode | null = null;

    public contain(data: number): boolean {
        return this.containData(data, this.root);
    }

    public add(data: number): boolean {
        if (this.contain(data)) return false;
        this.root = this.addToNode(data, this.root);
        return true;
    }

    private containData(data: number, node: BNode): boolean {
        if (node === null) return false;

        if (data > node.data) return this.containData(data, node.right);
        else if (data < node.data) return this.containData(data, node.left);
        else return true;
    }

    private addToNode(data: number, node: BNode): BNode {
        if (node === null) {
            node = new BNode(data);
        } else {
            if (data > node.data) {
                node.right = this.addToNode(data, node.right);
            } else {
                node.left = this.addToNode(data, node.left);
            }
        }
        return node;
    }
}

const listItem: LinkedList<T> = new LinkedList();
const tree: BinarySearchTree = new BinarySearchTree();

const inputElement: HTMLInputElement = document.querySelector("#search-bar");
const emptyListElement = document.querySelector(".empty-list");
const listElement = document.querySelector(".list");

inputElement?.addEventListener("keyup", (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
    if (!inputElement.value) return;

    listItem.append(inputElement.value);
    inputElement.value = "";
    listItem.printData();
});

listItem.addToTree(tree);

export {};
