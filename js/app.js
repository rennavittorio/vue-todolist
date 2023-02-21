const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    taskText: 'default 1',
                    done: true,
                },
                {
                    taskText: 'default 2',
                    done: true,
                },
                {
                    taskText: 'default 3',
                    done: false,
                }
            ],
            inputValue: '',
        }
    },

    methods: {
        addTask(){
            console.log('taskAdded', this.inputValue);
            this.tasks.push(this.inputValue);
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        }
    },

}).mount('#app')