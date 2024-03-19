<template>
 <div class="container">
        <div class="form-floating mb-3">
  <input type="firstName" v-model="payload.firstName" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput" >First Name</label>
</div>
<div class="form-floating">
  <input type="lastName" v-model="payload.lastName" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Last Name</label>
</div>
<div class="form-floating">
  <input type="userAge" v-model="payload.userAge" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Age</label>
</div>
<div class="form-floating">
  <input type="gender" v-model="payload.gender" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Gender</label>
</div>
<div class="form-floating">
  <input type="userEmail" v-model="payload.email" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Email</label>
</div>
<div class="form-floating">
  <input type="userPassword" v-model="payload.Password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
<div>
    <button @click="submitForm"> Submit </button>
</div>


    </div>
</template>


<script>
    export default {
        name: 'AdminView',
        components:{
        },
        data() {
            return {
              newUser:
              {
                firstName: null,
                lastName: null,
                userAge:null,
                gender: null,
                email: null,
                Password: null

              }
            }
        },

        computed:{
            users(){
              return this.$store.state.users
            }
 
        },
        mounted(){
          this.$store.dispatch('fetchUsers')
        },

        // for the products

        methods:{
            addingUser(){
              this.$store.dispatch('addUser',this.newUser)
            } ,
  }
}

// <!-- this.$route.params -->

        // methods:{
        //     submitForm(){
        //         this.$store.dispatch('login', {
        //             email: this.email, password: this.password
        //         })
        //     },
        //     registerUser(){
        //         this.$router.push('/register')
        //     }
        //  } -->
    
</script>


<style scoped>

</style>