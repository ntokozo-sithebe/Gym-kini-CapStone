<template>
 <div class="container-fluid">
	<div class="row" id="wrapper">
		<div class="col">
			<h3 class="text m-1">Register</h3>
			<form action="/login" :method="post">
        <div class="form-floating mb-3" >
  <input type="firstName" v-model="firstName" class="form-control" id="floatingInput" placeholder="First Name" required>
  <label for="floatingInput" >First Name</label>
</div>
<div class="form-floating mb-3">
  <input type="lastName" v-model="lastName" class="form-control" id="floatingPassword" placeholder="Last Name" required>
  <label for="floatingPassword">Last Name</label>
</div>
<div class="form-floating mb-3">
  <input type="userAge" v-model="userAge" class="form-control" id="floatingPassword" placeholder="Age" required>
  <label for="floatingPassword">Age</label>
</div>
<div class="form-floating mb-3">
  <input type="gender" v-model="gender" class="form-control" id="floatingPassword" placeholder="Gender" required>
  <label for="floatingPassword">Gender</label>
</div>
<div class="form-floating mb-3">
  <input type="userEmail" v-model="emailAddress" class="form-control" id="floatingPassword" placeholder="Email" required>
  <label for="floatingPassword">Email</label>
</div>
<div class="form-floating mb-3">
  <input type="userPassword" v-model="userPassword" class="form-control" id="floatingPassword" placeholder="Password" required>
  <label for="floatingPassword">Password</label>
</div>
<div>
	<a href="/login"> Cancel </a>
    <button type="submit" @click.prevent="register" > 
		Submit </button>
	<!-- if submit is successful router to Home -->
	<!-- <router-link :to="{ name: 'login '}" ></router-link> -->
</div>
</form>
 </div>
</div>
    </div>
</template>


<script>
import AuthenticateUser from '@/service/AuthenticateUser'

    export default {
		name: 'AdminView',
        components:{
        },
        data() {
            return {
              
                firstName: null,
                lastName: null,
                userAge:null,
                gender: null,
                emailAddress: null,
                userPassword: null

              
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
			async register(){
			try{
					await AuthenticateUser({
				firstName: this.firstName,
                lastName: this.lastName,
                userAge: this.userAge,
                gender: this.gender,
                emailAddress: this.emailAddress,
                userPassword: this.userPassword
					})
				}catch(error){
						error.response.data.error
				}
			}








            // addingUser(){
            //   this.$store.dispatch('addUser',this.).then(()=>{
			// 	this.$router.replace('/');
			// });
            // } ,
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
body{
	scroll-behavior: none;
	overflow: hidden;
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