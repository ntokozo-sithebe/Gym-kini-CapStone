<template>
  <!-- place as component so that you can use as an if/else statement to display the crud sytem for user and productsfor specific admin user -->
  <div class="container">
    <div class="col-md-6 me-0 mb-2 mt-2 mb-lg-0 mx-0 justify-content-end">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Add Product
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                New Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Product Name:</label
                  >
                  <input
                    type="text"
                    v-model="payload.prodName"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Product Description:</label
                  >
                  <input
                    type="text"
                    v-model="payload.prodDesc"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Product Category:</label
                  >
                  <input
                    type="text"
                    v-model="payload.prodCategory"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Product Amount:</label
                  >
                  <input
                    type="text"
                    v-model="payload.prodAmount"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label"
                    >Product Url:</label
                  >
                  <textarea
                    v-model="payload.prodUrl"
                    class="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="addingProduct()"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Name</th>
          <th scope="col">Product</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.prodID">
          <th scope="row">{{ product.prodID }}</th>
          <td>{{ product.prodName }}</td>
          <td>
            <img class="img-fluid w-25" :src="product.prodUrl" alt="images" />
          </td>
          <td>{{ product.prodDesc }}</td>
          <td>{{ product.prodQuantity }}</td>
          <td>R {{ product.prodAmount }}</td>
          <td class="d=block">
            <!-- to update -->
            <UpdateProduct
              :productData="product"
              :updateModal="`updateProductModal${product.prodID}`"
            />
            <!-- delete  -->
            <button
              class="btn btn-warning"
              @click.prevent="deleteProduct(product.prodID)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ===================================================== -->

  <div class="container">
    <div class="row">
      <h2>Users Table</h2>
    </div>

    <div class="col-md-6 me-0 mb-2 mt-2 mb-lg-0 mx-0 justify-content-end">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#userModal"
        data-bs-whatever="@mdo"
      >
        Add New User
      </button>
      <div
        class="modal fade"
        id="userModal"
        tabindex="-1"
        aria-labelledby="userModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Name:</label
                  >
                  <input
                    type="text"
                    v-model="newUser.firstName"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Lastname</label
                  >
                  <input
                    type="text"
                    v-model="newUser.lastName"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label"
                    >Age:</label
                  >
                  <input
                    type="text"
                    v-model="newUser.userAge"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Gender:</label
                  >
                  <input
                    type="text"
                    v-model="newUser.gender"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    E-mail:</label
                  >
                  <input
                    class="form-control"
                    v-model="newUser.emailAddress"
                    id="message-text"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Password:</label
                  >
                  <input
                    class="form-control"
                    v-model="newUser.userPassword"
                    id="message-text"
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Role:</label
                  >
                  <input
                    type="text"
                    v-model="newUser.userRole"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="addingUser()"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Role</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="users">
        <tr v-for="users in users" :key="users.userID">
          <td scope="row">{{ users.userID }}</td>
          <td>{{ users.firstName }}</td>
          <td>{{ users.lastName }}</td>
          <td>{{ users.gender }}</td>
          <td>{{ users.userRole }}</td>
          <td>{{ users.emailAddress }}</td>
          <td class="d-block">
            <UpdateUser
              :userData="users"
              :UpdateUserModal="`UpdateUserModal${users.userID}`"
            />
            <button
              class="btn btn-warning deleteButton"
              @click.prevent="deleteUser(users.userID)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!-- only when log in as the admin it will display the admin button  -->
<!-- so use if statement for login if user === ntokozo and display to home if there is a normal user -->

<!-- add the update product to update btn -->

<script>
import UpdateProduct from "@/components/UpdateProduct.vue";
import UpdateUser from "@/components/UpdateUser.vue";

export default {
  name: "AdminView",

  components: {
    UpdateProduct,
    UpdateUser,
  },

  data() {
    return {
      payload: {
        prodName: null,
        prodDesc: null,
        prodCategory: null,
        prodAmount: null,
        prodUrl: null,
      },
      newUser: {
        firstName: null,
        lastName: null,
        userAge: null,
        gender: null,
        email: null,
        Password: null,
        userRole: "",
      },
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },

  methods: {
    addingProduct() {
      this.$store.dispatch("addProduct", this.payload);
    },
    addingUser() {
      this.$store.dispatch("addUser", this.newUser);
    },

    deleteProduct(userID) {
      this.$store.dispatch("deleteProduct", userID);
    },
    deleteUser(prodID) {
      this.$store.dispatch("deleteUser", prodID);
    },
  },
};

// <!-- this.$route.params -->
</script>
<style scoped>
.btn {
  display: block;
  margin: 3px;
  justify-content: center;
}
</style>

<!-- youll be able to perform crud system from admin - it wont be a seen on the navbar and only the admin can perfom the crud sytem 
  so youll set the user and email (your details) in order  to view the admin page -->
