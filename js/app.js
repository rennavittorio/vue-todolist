const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    taskText: 'example task 1',
                    done: false,
                },
                {
                    taskText: 'example task 2',
                    done: false,
                },

            ],

            inputValue: '',

            doneTasks: [
                {
                    taskText: 'example completed task 1',
                    done: true,
                },
            ],
        }
    },

    methods: {
        addTask(){
            if (this.inputValue.trim() !== ''){
                this.tasks.push({
                    taskText: this.inputValue,
                    done: false,
                });
                this.inputValue = '';

            }
        },

        tickTask(task, index){
            if (task.done === false){
                task.done = true;
                this.doneTasks.push(task);
                this.tasks.splice(index, 1);

            } else {
                task.done = false;
                this.tasks.push(task);
                this.doneTasks.splice(index, 1);
            }
        },

        removeTask(index){
            this.doneTasks.splice(index, 1);
        }
    },

    computed: {
        countToBeDoneList(){
            return this.tasks.length;
        },

        countDoneList(){
            return this.doneTasks.length;
        },
    }

}).mount('#app')