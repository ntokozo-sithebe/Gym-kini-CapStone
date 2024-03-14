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
        <div class="col">
            <div>
                <button> Submit </button>
            </div>
            <!-- link the registerView -->
            <div>
                <button>Register</button>
            </div>

        </div>
            </div>
        </div>

<!-- create a key as you would a norm -->

<!-- create a register <button></button> for new users right --- which will create new token  -->
    </div>
</template>

<script>
    export default {
        name: 'LoginComp',
//   data(){
//     return{
//       showLogin: false
//     }
//   },
//   mounted(){
//     setTimeout(()=>{
//       this.showLogin = true; 
//       //after 3 minutes of clicking the sight
//     },3 * 60 * 1000 
//     )


//   }
    }
</script>

<style scoped>

</style>