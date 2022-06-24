let state={
    todos:[
        {
            text: 'Do the house work',
            completed:false
        },
        {
            text: 'Finish the projects',
            completed:false
        },
        {
            text: 'Work out',
            completed:true
        }
    ],
    showcompleted:false,
}

function renderoptionsection(){
    let optionSection=document.createElement('section')
    optionSection.classList.add('options')

    let optionTitle = document.createElement('h2')
    optionTitle.classList.add("section_title")
    optionTitle.textContent="Options"
    
    let showcompletelabel=document.createElement('label')
    
    let showcompleteinput=document.createElement('input')
    showcompleteinput.type= 'checkbox'
    showcompleteinput.addEventListener('click', function () {
        for (let todo of state.todos) {
          todo.done = true
        }
        renderoptionsection()
      })

    showcompletelabel.append(' Show completed', showcompleteinput)
    optionSection.append(optionTitle, showcompletelabel)


    let appEl=document.querySelector('.app')
    appEl.append(optionSection)
}
function renderapptodo(){
   let formEl = document.querySelector('form')

   let titleEl = document.createElement('h2')
        titleEl.className='section_title'
        titleEl.innerText= 'Add todo'

    let addinputEl = document.createElement('Input')
    addinputEl.setAttribute('type', 'text')
    addinputEl.setAttribute('name', 'text')

    let addbuttonEl= document.createElement('button')
    addbuttonEl.className='todo_add'
    addbuttonEl.innerText= 'add'

    
}
function rendertodosection(){
        let todosection = document.createElement('section')

        let titleEl = document.createElement('h2')
        titleEl.className='section_title'
        titleEl.innerText= 'Todo'

        let todolistEl= document.createElement('ul')
        todolistEl.className='todo-list'


        let incompletetodos= state.todos.filter(todo=> todo.completed===false)

        for (let todo of incompletetodos){

        let todoitemEl= document.createElement('li')
        todoitemEl.className= 'todo'

        let checkboxEl = document.createElement('Input')
        checkboxEl.type= 'checkbox'
        checkboxEl.className= 'todo_checkbox'

        let todotextEl= document.createElement("p")
        todotextEl.className= 'todo_text'
        todotextEl.innerText= todo.text
        todotextEl.addEventListener('click', function () {
        todo.done = !todo.done
        rendertodosection()
        })

        let deletebuttonEl= document.createElement('button')
        deletebuttonEl.className='todo_delete'
        deletebuttonEl.innerText= 'Delete'
        deletebuttonEl.addEventListener('click', function () {
            state.todos.pop()
            rendertodosection()
          })
        


        todoitemEl.append(checkboxEl, todotextEl, deletebuttonEl)

        todolistEl.append(todoitemEl)

        }
     
        todosection.append(titleEl, todolistEl)

        let appEl =document.querySelector('.app')
        appEl?.append(todosection)
}
function render(){
    let appEl= document.createElement('div')
    appEl.className= 'app'
    document.body.append(appEl)


    document.body.textContent + ''

    renderapptodo()

    renderoptionsection()

    rendertodosection()
}
render()

//Mistake nr a million in javascript
//Due to  family emergency I didn't have time to focus on the exercise 100%
