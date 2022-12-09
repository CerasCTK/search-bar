const listItem = [];
const inputElement = document.querySelector("#search-bar");

const emptyListElement = document.querySelector(".empty-list");
const listElement = document.querySelector(".list");

inputElement.addEventListener("keyup", ({ key }) => {
    if (key !== "Enter") return;
    if (!inputElement.value) return;

    listItem.push(inputElement.value);
    updateShowList();

    inputElement.value = "";
});

const updateShowList = () => {
    if (listItem.length === 0) {
        emptyListElement.style.display = "inline";
        listElement.style.display = "none";
    } else {
        emptyListElement.style.display = "none";
        listElement.style.display = "block";
    }
    listElement.innerHTML = generateList();
};

const generateList = () => {
    let htmlResult = "";
    for (let i = 0; i < listItem.length; i++) {
        htmlResult += generateItem(listItem[i]);
    }

    return htmlResult;
};

const generateItem = (itemValue) => {
    return `
    <div class="item-container">
        <div class="item-value">${itemValue}</div>
        <button class="item-remove-button" onClick="removeItem(event)">X</button>
    </div>`;
};

const removeItem = ({ target }) => {
    const itemContainerElement = target.parentNode;

    const itemIndex = getItemRemoveIndex(listElement, itemContainerElement);
    if (itemIndex === -1) return;

    listItem.splice(itemIndex, 1);
    updateShowList();
};

const getItemRemoveIndex = (parent, child) => {
    const allChild = parent.children;
    for (let i = 0; i < allChild.length; i++)
        if (child === allChild[i]) return i;
    return -1;
};
