const originalSection = document.querySelectorAll('section.originals div.original-container div') 
const copiesSection = document.querySelector('div.copy-container')


function addTemplateOne() {

    const innerText = this.querySelector("p").textContent; //.textContent returns the specified node and all of the decendants //'this' refers to the indexed array
    copiesSection.insertAdjacentHTML('afterbegin', `<p>${innerText}</p>`);
}

originalSection[0].addEventListener('click', addTemplateOne); // array of elements accessed through indexing
originalSection[1].addEventListener('click', addTemplateOne);



//Deletes the copy
const btn = document.querySelector('.copies')

function clearlist() {
    copiesSection.removeChild(copiesSection.firstChild)
  }

btn.addEventListener('click', clearlist)