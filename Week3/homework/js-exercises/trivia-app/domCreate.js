function createAndAppend(name, parent, options = {}) { // A very useful function which I inherited from the previous js3 homework.
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.entries(options).forEach(([key, value]) => {
        if (key === "text") {
            elem.innerHTML = value;
        } else {
            elem.setAttribute(key, value);
        }
    });
    return elem;
}
