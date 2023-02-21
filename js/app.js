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
            this.tasks.push({
                taskText: this.inputValue,
                done: false,
            });
        },

        removeTask(index){
            this.tasks.splice(index, 1);
        }
    },

}).mount('#app')