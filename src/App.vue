<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"
                  :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data () {
    return {
/*      从本地文件中读取数据（类似安卓的sharepreference），而不是写死数据
      从LocalStorage读取todos，得到的是字符串类型
      通过JSON.pares()将字符串数据转变成*/
      todos:JSON.parse(window.localStorage.getItem('todos_keys')||'[]')
/*      todos: [
        {title: '吃饭', complete: false},
        {title: '睡觉', complete: true},
        {title: 'coding', complete: false}
      ]*/
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    //删除所有选中的todo
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    //清除所有
    deleteallcontent(){
      localStorage.removeItem('todos_keys')
    },
    //全选/全不选
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete = check)
    }
  },

  watch:{//深度监视
    todos:{
      deep:true, //深度监视
      handler:function (Value) {
        //将todos最新的值的json数据，保存到LocalStorage
        window.localStorage.setItem('todos_keys',JSON.stringify(Value))
      }
    }
  },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
