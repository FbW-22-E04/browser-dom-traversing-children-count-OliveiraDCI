"use strict";

const wrapper = document.getElementById("wrapper");
console.log("HTMLCollection ==> ", wrapper.children);
console.log("Length ==> ", wrapper.children.length);
console.log("Length ==> ", wrapper.childElementCount);

[...wrapper.children].forEach((el) => {
  console.log("el ==> ", el);
});

const getElementWithMostClasses = (list) => {
  let el = null;
  let maxLength = 0;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.classList.length > maxLength) {
      maxLength = element.classList.length;
      el = element;
    }
  }

  return {
    element: el,
    numberOfClasses: maxLength,
  };
};

console.log(getElementWithMostClasses(wrapper.children));
