<template>

<div class="app">
 <div class="mainTitle">  
 <h1>To do list </h1>
 </div>
 <div> 
     <form novalidate class="md-layout md-alignment-top-center"  value="center">
      <md-card class="md-layout-item md-size-50 md-small-size-100 card ">
        <md-card-header>
          <div class="md-title">Add a new to do to your list</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="title"> Title</label>
                
                <md-input  v-model="currentTodo" @keydown.enter="addTodo()"  placeholder="Add a title"> </md-input>
                 
                
                </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="description"> Description</label>
                <md-textarea  v-model="currentDescription" @keydown.enter="addTodo()"  placeholder="Add a description"> </md-textarea>
              </md-field>
            </div>
          </div>

         
         
        </md-card-content>
        <md-card-actions>
          <md-button v-on:click="addTodo()" class="md-fab md-mini md-primary">
        <md-icon>add</md-icon>  </md-button>
        </md-card-actions>

    

        
      </md-card>

      
    </form></div>


  <div class="lists md-layout" > 

    <div class="todos  md-layout-item md-xsmall-size-100"> 
    <h2 class="subtitle" > List of things to do: </h2>

<md-card class="card"  v-for="todo in todos" :key="todo.id" >
      <md-ripple>
        <md-card-header  v-show = "todo.edit == false">

          <div class="md-title"><span class="md-caption">Title:</span> {{ todo.label }}</div>

          
        </md-card-header>


        <md-card-content  v-show = "todo.edit == false">Description:
        
         {{ todo.description }}
        </md-card-content>

        <div class="update_view" v-show = "todo.edit == true">
        <h3>  Title </h3>
         <input  v-model = "todo.label"
      
      @keyup.enter = "todo.edit=false; $emit('update')">
        <h3> Description </h3>
        <input  v-model = "todo.description" 
      
      @keyup.enter = "todo.edit=false; $emit('update')">

      </div>


        <md-card-actions>
        <md-button  v-show = "todo.edit == false" class="md-raised md-accent" v-on:click="removeTodo(todo)"> Remove </md-button>
        <md-button  v-show = "todo.edit == false"  class="md-raised md-primary" v-on:click="addTodone(todo)"> Done </md-button>
        <md-button v-show = "todo.edit == false" class="md-icon-button md-dense md-raised md-primary" v-on:click= "todo.edit = true"> <md-icon>edit</md-icon>
      </md-button>
        <md-button v-show = "todo.edit == true" class="md-icon-button md-dense md-raised md-primary" v-on:click= "todo.edit =false">
        <md-icon>cached</md-icon>
      </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
   
      
     
    </div>

     <div class="donesToDo md-layout-item md-xsmall-size-100"> 
      <h2 class="subtitle" >  List of things done: </h2>
  <md-card class="card"  v-for="doneToDo in donesToDo" :key="doneToDo.id" >
      <md-ripple>
        <md-card-header>
          <div class="md-title"><span class="md-caption">Title:</span> {{ doneToDo.label }}</div>
          <div class="md-subhead"></div>
        </md-card-header>

        <md-card-content>
        Description:
         {{ doneToDo.description }}
        </md-card-content>

       
      </md-ripple>
    </md-card>

     </div>
  </div>
  </div>
</template>


<script>



export default {
  data() {
    return {
      todos: [],
      currentTodo: '',
      donesToDo: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push({id: this.todos.length, label: this.currentTodo,description:this.currentDescription, completed: false, edit:false});
      this.currentTodo = '';
      this.currentDescription=''
    },
    removeTodo(todo) {
var index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
},
 addTodone(todo) {
      this.donesToDo.push({id: this.donesToDo.length, label: todo.label,description: todo.description, completed: false, edit:false});
      var index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
    }

    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=EB+Garamond|Oswald&display=swap');

body  {
background-color: darkred;

}

 * {
text-align: center;


}

.card {

border: 5px double rgba(0,0,0,0.68);
 border-radius: 26px;
 font-family: 'EB Garamond', serif;
 margin:5px;
 
}
h1 {


font-family: 'Oswald', sans-serif;

}

.mainTitle{


border: 5px double rgba(0,0,0,0.68);
 border-radius: 26px;

background-color: white;
color: black;
margin:0px  50px;


}

.subtitle  {
 border: 5px double rgba(0,0,0,0.68);
 border-radius: 26px;
padding: 5px;
background-color: white;
color: black;
font-family: 'Oswald', sans-serif;
margin:0px  50px;



}

</style>

