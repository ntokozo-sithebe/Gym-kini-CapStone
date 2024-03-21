<template>
  <div class="container-fluid">
        <div class="row" id="images">
          <div class="col position-absolute d-block d-flex m-0 p-0">
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/2v6rJNC/c249d88ccb5d1055652caa3510bd883c.jpg" alt="item1" loading="lazy">
            </div>
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/2s2jW2w/8637b564-d2ac-447c-a194-1ab2fb38c90f.jpg" alt="item2" loading="lazy">
            </div>
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/NsDB8pY/770122bd-a6e2-4112-b166-d4ec65a7c015.jpg" alt="item3" loading="lazy">
            </div>
              <button class="overlay_button btn btn-tertiary" @click="products"> Discover More </button>
            </div>
          </div>
        </div>
<!-- Where vision meets action  -->

  
   
</template>

<script>


export default {
  name: 'HomeView',

  methods:{
    products(){
            this.$router.push('/products')
            }
  }
  


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

.container-fluid{
  overflow: hidden;
  background-color: lightblue;
}

.overlay_button{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 30px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}
.overlay_button:hover{
  background-color: black;
  color: white;
}

img{
  height: 50em;
}


img:hover{
  transform: translate(-5%, 5%);
  
}

/* body::-webkit-scrollbar{
  display: none;

} */

 /* #images{
  height: 2000px;
  aspect-ratio: 1/1;
}  */
</style>
