<template>
  <div class="container-fluid">
        <div class="row" id="images">
          <div class="col d-block d-flex position-absolute m-0 p-0">
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/t33JK2q/backups-5.webp" alt="item1" loading="lazy">
            </div>
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/R3ncRXS/gym-kini-3.jpg" alt="item2" loading="lazy">
            </div>
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/NxN9L9N/gym-kini-7.webp" alt="item3" loading="lazy">
            </div>
          </div>
           
        </div>
        <div class="row">
          <button> Learn More</button>
        </div>
        <div>
          <button>Sign Up </button>
        </div>
  
        </div>


  
   
</template>

<script>


export default {
  name: 'HomeView',
  


}
</script>
<style scoped>
*,
* ::before,
* ::after{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container{
  overflow: hidden;
}

/* body::-webkit-scrollbar{
  display: none;

} */

 #images{
  height: 2000px;
  aspect-ratio: 1/1;
} 
</style>
