// JavaScript source code
var id_count = 1;
var App = 
new Vue({
    el: '#todolist',
    data: {
        title: 'to do list',
        taskEditingId: '',
        tasks: [{name: '', id:1, status: false}
        ],
        complitedTasks: []
        
    },

    methods: {
        
        addList: function () {
            
            if (!this.tasks.name) {
                retrun
            }
            this.tasks.push({
                name: this.tasks.name,
                id: id_count++
            });
            this.saveTasks();
            //console.log("ggg" + id_count);
            this.tasks.name = "";
        },
        delList: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            this.saveTasks();
        },
        editList: function (task) {
            this.taskEditingId = task.id;
            //console.log("gfffffgg" + task.id);
           
        },
        updateTaskName: function (task) {
            name: this.tasks.name,
            this.taskEditingId = ''
        },
        
        saveTasks: function () {
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem('tasks', parsed);
        }
    },
    mounted() {
        if (localStorage.getItem('tasks') ){
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        if (localStorage.tasks.id) {
            this.tasks.id = localStorage.tasks.id;
        }
    },
  
    
})