<template>
    <div>
        <div class="col-md-6 me-0 mb-2 mt-2 mb-lg-0 mx-0 justify-content-end">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${UpdateUserModal}`" data-bs-whatever="@mdo">Updating User</button>
<div class="modal fade" :id="UpdateUserModal" tabindex="-1" aria-labelledby="UpdateUserModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">User information</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"> Name:</label>
            <input type="text" v-model="newUser.firstName" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"> Lastname</label>
            <input type="text" v-model="newUser.lastName" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Age:</label>
            <input type="text" v-model="newUser.userAge" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"> Gender:</label>
            <input type="text" v-model="newUser.gender" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label"> E-mail:</label>
            <input class="form-control" v-model="newUser.email" id="message-text">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label"> Password:</label>
            <input class="form-control" v-model="newUser.Password" id="message-text">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"> Role:</label>
            <input type="text" v-model="newUser.userRole" class="form-control" id="recipient-name">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click.prevent="updatingUser" > Add User </button>
      </div>
    </div>
  </div>
</div>

        </div>
    

    </div>
</template>

<script>
    export default {
        name:'UpdateUser',
        props: ['userData', 'UpdateUserModal'],
        data() {
            return {
              User:
              {
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                userAge: this.user.userAge,
                gender: this.user.gender,
                email: this.user.email,
                Password: this.user.Password,
                userRole: this.user.userRole

              }
            }
        },
        
        computed: {
        users() {
            return this.$store.state.users;
        }
    },
    mounted() {
        this.$store.dispatch('fetchUser');
    },
    methods:{
            updatingUser(){
              this.$store.dispatch('updateUsers',this.User)
            } ,
    }
  }
</script>

<style scoped>

</style>