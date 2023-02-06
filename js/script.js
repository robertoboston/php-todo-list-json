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
            const data = {
                todoItem : obj

            }
            axios.post(this.apiUrl, data, { 
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((response) =>{
                this.language = ''
                console.log(response.data)
            })

        }
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            this.todoList = response.data;
            

        });
    }
}).mount('#app');