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
            completed:false
        },
        {
            text: 'Read a book',
            completed:true
        }
    ],
    showcompleted:false,
}

function createnewtodo(text){
    let isinthelist= state.todos.some(todo=>todo.text===text)
    if(isinthelist)
    state.todos.push({text: text, completed: false})
}

function getincompletetodos() {
    return state.todos.filter(todo => todo.completed === false)
}
   
function getcompletetodos() {
    return state.todos.filter(todo => todo.completed === true)
}
   
function deleteodo(text) {
    let thetodos = state.todos.filter(todo => todo.text !== text)
    state.todos = thetodos
}
 
function deletealltodos() {
    state.todos = []
}
   
function toggletodo(text) {
    let match = state.todos.find(todo => todo.text === text)
    if (!match) return
    match.completed = !match.completed
}
 
function toggleshowcompleted() {
    state.showCompleted = !state.showCompleted
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
    
    if(state.showcompleted) showcompleteinput.checked=true
    showcompleteinput.addEventListener("click",function(){
        toggleshowcompleted()
        render()
    })

    showcompletelabel.append( " Show completed   ",showcompleteinput)
    optionSection.append(optionTitle, showcompletelabel)

    let appEl=document.querySelector('.app')
    appEl.append(optionSection)
}
function renderapptodo(){   
 
    let additem= document.createElement('section')

    let additemtittle=document.createElement('h2')
    additemtittle.classList.add("section_title")
    additemtittle.textContent="Add Item"

    let newitem= document.createElement('form')
    newitem.classList.add("Regullo")

    let newiteminput = document.createElement('input')
    newiteminput.type="text"
    newiteminput.placeholder="Add new item"

    let newitembutton = document.createElement('button')
    newitembutton.type='submit'
    newitembutton.textContent="+"

    newitem.addEventListener('submit', function(event){
        event.preventDefault()
        createnewtodo(newiteminput.value)
        render()
    })

    newitem.append(newiteminput, newitembutton)
    additem.append(additemtittle,newitem)

    let appEl=document.querySelector('.app')
    appEl?.append(additem)

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
        
        todoitemEl.addEventListener('click', function(){
            toggletodo(todo.text)
            render()
        })
        let checkboxEl = document.createElement('Input')
        checkboxEl.type= 'checkbox'
        checkboxEl.className= 'todo_checkbox'

        let todotextEl= document.createElement("p")
        todotextEl.className= 'todo_text'
        todotextEl.innerText= todo.text
        

        let deletebuttonEl= document.createElement('button')
        deletebuttonEl.className='todo_delete'
        deletebuttonEl.innerText= 'Delete'
        
        deletebuttonEl.addEventListener('click', function(){
            deleteodo(todo.text)
            render()
        })

        todoitemEl.append(checkboxEl, todotextEl, deletebuttonEl)

        todolistEl.append(todoitemEl)

        }
     
        todosection.append(titleEl, todolistEl)

        let appEl =document.querySelector('.app')
        appEl?.append(todosection)
}

function render(){

    document.body.textContent = ''
    
    let appEl= document.createElement('div')
    appEl.className= 'app'
    document.body.append(appEl)

    renderapptodo()
  
    renderoptionsection()

    rendertodosection()
}
render()


