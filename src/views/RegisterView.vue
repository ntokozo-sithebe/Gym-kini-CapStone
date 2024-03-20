<template>
 <div class="container-fluid">
	<div class="row" id="wrapper">
        <div class="form-floating mb-3" >
  <input type="firstName" v-model="newUser.firstName" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput" >First Name</label>
</div>
<div class="form-floating">
  <input type="lastName" v-model="newUser.lastName" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Last Name</label>
</div>
<div class="form-floating">
  <input type="userAge" v-model="newUser.userAge" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Age</label>
</div>
<div class="form-floating">
  <input type="gender" v-model="newUser.gender" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Gender</label>
</div>
<div class="form-floating">
  <input type="userEmail" v-model="newUser.email" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Email</label>
</div>
<div class="form-floating">
  <input type="userPassword" v-model="newUser.Password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
<div>
    <button @click="submitForm"> Submit </button>
</div>
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
*,
*, ::before,
* ::after{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

.container-fluid{
	background-image: url('https://i.ibb.co/XjDcFm7/Urban-Outfitters-Is-Launching-an-In-House-Beauty-Line.jpg');
	background-position: cover;
	margin: 0rem;
    padding: 5rem;
 
}

#wrapper{
	width: 333px;
	padding: 2rem 1rem;
	margin: auto;
	background-color: white;
	border-radius: 10px;
	text-align: center;
}

form input{
	padding: 10px 22px;
	margin-bottom: 10px;
	width:90% ;
	outline: none;
	border:1px solid white ;
	border-radius: 20px;
	background: white;

}

button{
	border: none;
	border-radius: 10px;
	font-size: 1rem;
	margin-top: 1.5rem;
	outline: none;
	width: 50%;
	cursor: pointer;
	background-color: lightblue;
	padding: 10px;
	

}

button :hover{
	background-color: rgb(242, 10, 57);
}


</style>