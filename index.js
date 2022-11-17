

function creatLabel (text, htmlFor){
    const label =document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function creatInput(id, value, name, type = 'text', placeholder =''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input

}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs')
 
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'
    newRow.style.marginTop = '1rem'

    const techNameLabel = creatLabel('Nome: ', 'techName-', + rowIndex)
    techNameLabel.style.marginRight = '6px'
    const techNameInput = creatInput('techName: ' + rowIndex, null, 'techName' )

   
    const expLabel = creatLabel('Experiência: ')
    expLabel.style.marginRight = '6px'
    expLabel.style.marginLeft = '6px'

    const id1 = 'expRadio-' + rowIndex + ' .1'
    const expRadio01 = creatInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = creatLabel('0-2 anos', id1)
    expRadio01.style.marginLeft = '4px'
    expRadio01.style.marginRight = '2px'
    expRadio01.style.boxShadow = 'none'

    

    const id2 = 'expRadio-' + rowIndex + ' .2'
    const expRadio02 = creatInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = creatLabel('3-4 anos', id2)
    expRadio02.style.marginLeft = '10px'
    expRadio02.style.marginRight = '2px'
    expRadio02.style.boxShadow = 'none'
   


    const id3 = 'expRadio-' + rowIndex + ' .3'
    const expRadio03 = creatInput(id3, '5+  anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = creatLabel('5+ anos', id3)
    expRadio03.style.marginLeft = '10px'
    expRadio03.style.marginRight = '2px'
    expRadio03.style.boxShadow = 'none'

    const removeRowBnt = document.createElement('button')
    removeRowBnt.type = 'button'
    removeRowBnt.innerText = 'Remover'
    removeRowBnt.style.borderRadius = '5px'
    removeRowBnt.style.width = '6rem'
    removeRowBnt.style.marginLeft = '14px'
    removeRowBnt.style.backgroundColor = 'rgb(44, 44, 85)'

    removeRowBnt.addEventListener('click', function (){
        stackInputs.removeChild(newRow)
    })
    
    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio01, expLabel1, 
        expRadio02, expLabel2, expRadio03, expLabel3, removeRowBnt
    )
        stackInputs.appendChild(newRow)
    })

    form.addEventListener('submit', function (ev){
        ev.preventDefault()
        
        const fullnameInput = document.getElementById('fullname')
        const inputRows = document.querySelectorAll('.inputRow')

        let technologies = []
        inputRows.forEach(function (row) {
            const techName  = document.querySelector('#' + row.id + 'input[name="techName"]')
            const techExp = document.querySelector('#' + row.id + 'input[type="radio"]:checked')
            technologies.push({name: techName, exp:techExp})
        })

        const newDev = {fullname: fullnameInput.value, technologies: technologies}
        developers.push(newDev)
        alert('Dev cadastrado com sucesso!')
        fullnameInput.value = ''
        inputRows.forEach(function (row){
            row.remove()
        })
        console.log(developers)
    })