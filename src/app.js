const originalOneSection = document.querySelector('section.originals div.original-container')
const copiesSection = document.querySelector('div.copy-container')

const originalOneTemplate = `  <div><p>one</p></div>`
const originalTwoTemplate = `  <div><p>two</p></div>`

function addTemplateOne() {
    originalsection = document.querySelector('.div.original-container')
    copiesSection.insertAdjacentHTML('afterbegin', 'test')
    console.log(originalsection)
}

originalOneSection.addEventListener('click',addTemplateOne)



console.log(originalOneSection.firstChild)

//Deletes the copies
const btn = document.querySelector('.copies')

function clearlist() {
    copiesSection.removeChild(copiesSection.firstChild)
  }

btn.addEventListener('click', clearlist)