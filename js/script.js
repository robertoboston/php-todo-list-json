const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: [],
        }
    },
    methods: {
        addTodo(){
            let obj={
                language:this.language,
                done: false
            }
            axios.post(this.apiUrl, obj, { 
                headers: {'Content-Type': 'multipart/form-data'}
        })

        }
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            this.todoList = response.data;
            

        });
    }
}).mount('#app');