class Stack<T> {
    private items: T[] = [];

    public push(item: T) {
        this.items.push(item);
    }

    public pop(): T {
        return this.items.pop();
    }
}

// Usage
let stack = new Stack<string>();
stack.push("a");
let a = stack.pop();