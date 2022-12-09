"use strict";
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
})();
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            var currentPointer = this.head;
            while (currentPointer.next !== null)
                currentPointer = currentPointer.next;
            currentPointer.next = new Node(data);
        }
    };
    LinkedList.prototype["delete"] = function (data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var prevPointer = this.head;
        var currentPointer = this.head.next;
        while (currentPointer) {
            if (currentPointer.data === data) currentPointer = null;
            else {
                prevPointer = currentPointer;
                currentPointer = currentPointer.next;
            }
        }
    };
    LinkedList.prototype.printData = function () {
        if (!this.head) return;
        var current = this.head;
        var temp = [];
        while (current) {
            temp.push(current.data);
            current = current.next;
        }
        console.log(temp);
    };
    return LinkedList;
})();
var BNode = /** @class */ (function () {
    function BNode(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
    return BNode;
})();
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.contain = function (data) {
        return this.containData(data, this.root);
    };
    BinarySearchTree.prototype.add = function (data) {
        if (this.contain(data)) return false;
        this.root = this.addToNode(data, this.root);
        return true;
    };
    BinarySearchTree.prototype.containData = function (data, node) {
        if (node === null) return false;
        if (data > node.data) return this.containData(data, node.right);
        else if (data < node.data) return this.containData(data, node.left);
        else return true;
    };
    BinarySearchTree.prototype.addToNode = function (data, node) {
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
    };
    return BinarySearchTree;
})();
var listItem = new LinkedList();
var inputElement = document.querySelector("#search-bar");
var emptyListElement = document.querySelector(".empty-list");
var listElement = document.querySelector(".list");
inputElement === null || inputElement === void 0
    ? void 0
    : inputElement.addEventListener("keyup", function (event) {
          if (event.key !== "Enter") return;
          if (!inputElement.value) return;
          listItem.append(inputElement.value);
          inputElement.value = "";
          listItem.printData();
      });
console.log(Number("12.34"));
