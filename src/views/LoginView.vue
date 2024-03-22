<template>
  <div class="container-fluid">
    <div class="row" id="wrapper">
      <div class="col">
        <h2>Sign In</h2>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="col justify-content-center">
          <div class="termz">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox mt-2">
              I gree to these <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <div>
            <p class="loginText mt-1">
              Already a member ?
              <button @click.prevent="submitForm">Login</button>
            </p>
            <!-- <router-link :to="{name: 'login', params: {id: userEmail, userPassword}}">Login</router-link>     -->
          </div>
          <!-- link the registerView -->
          <div>
            <button @click="registerUser">Register</button>
          </div>
        </div>
      </div>
    </div>

    <!-- create a key as you would a norm -->
  </div>
</template>

<script>
export default {
//   props: ["userData"],
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("login", payload)
        .then(() => {
          if (this.$cookies.get("LegitUser")) {
            this.$router.push("/");
          } else {
            this.$router.push("/register");
          }
        })
        .catch((error) => {
          console.log("Login error", error);
        });
      // if the user exists theyll be sent to the home page if not they will register
    },
    registerUser() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

*,
*,
::before,
* ::after {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body{
	font-family: "Playfair Display", serif;
	overflow: hidden;
	scroll-behavior: none
}
.container-fluid {
  background-image: url("https://i.ibb.co/yFtCGYW/Beauty-Kat-Borchart.jpg");
  margin: 0px;
  padding: 5rem;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

#wrapper {
  width: 333px;
  padding: 2rem 1rem;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  text-align: center;
}

button {
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  margin-top: 1.5rem;
  outline: none;
  width: 90%;
  cursor: pointer;
  background-color: lightblue;
  padding: 2px;
}

button:hover{
  background-color: black;
  color: white;
}

h2 {
  font-size: 2rem;
  color: black;
  margin-bottom: 1.5rem;
}

form input {
  padding: 10px 22px;
  margin-bottom: 10px;
  width: 90%;
  outline: none;
  border: 1px solid white;
  border-radius: 20px;
  background: white;
}
</style>
