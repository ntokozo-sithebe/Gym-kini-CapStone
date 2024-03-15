<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <div class="col justify-content-center">
            <div>
                <button @click="submitForm">
                        Submit
                 </button>
            </div>
            <!-- link the registerView -->
            <div>
                <button @click="registerUser">
                    Register
                </button>
            </div>

        </div>
            </div>
        </div>

<!-- create a key as you would a norm -->


    </div>
</template>

<script>
    export default {
        name: 'LoginView',
         data(){
            return{
                email: '',
                password: ''
            }
         },
         methods:{
            submitForm(){
                this.$store.dispatch('login', {
                        email: this.email, 
                        password: this.password
                    }).then(()=>{
                        if(this.$store.state.isAuthenticated){

                            this.$router.push('/')
                        }else {
                            this.$router.push('/register')
                        }
                    })
// if the user exists theyll be sent to the home page if not they will register

            },
            registerUser(){
                this.$router.push('/register')
            }
         }
    }

</script>

<style scoped>

</style>