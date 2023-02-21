const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                'task 1',
                'task 2',
                'task 3',
            ],
            inputValue: 'default task',
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