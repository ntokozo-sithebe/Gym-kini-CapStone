<template>
  <div class="container-fluid">
        <div class="row m-0 p-0" id="images">
          <div class="col-md-0 d-block d-flex m-0 p-0">
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/2v6rJNC/c249d88ccb5d1055652caa3510bd883c.jpg" alt="item" loading="lazy">
            </div>
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/2s2jW2w/8637b564-d2ac-447c-a194-1ab2fb38c90f.jpg" alt="item" loading="lazy">
            </div>
            <div>
              <img class="img-fluid w-100" src="https://i.ibb.co/NsDB8pY/770122bd-a6e2-4112-b166-d4ec65a7c015.jpg" alt="item" loading="lazy">
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
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

*,
* ::before,
* ::after{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
	justify-content: center;
	overflow: hidden;
	scroll-behavior: none;
	margin: 0px;
	padding: 0px;
	background-color: white;
}
.container-fluid{
	background-color: white;
}



.overlay_button{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 30px;
  color: black;
  border: none;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;

}
.overlay_button:hover{
  background-color: black;
  color: white;
}

img{
  height: 45em;
  margin: 0px;
  padding: 0px;


}


img:hover{
  transform: translate(-5%, 5%);
  
}

@media screen and (width < 360){
	img [alt="item"]{
    width: 100%;
    aspect-ratio: 1/1;
    height: 10em;
	display: flex;
	margin: 0px;
	position: relative;
  }
  body{
	margin: 0px;
	padding:0px;
	scroll-behavior: none;
  }

}

/* body::-webkit-scrollbar{
  display: none;

} */

 /* #images{
  height: 2000px;
  aspect-ratio: 1/1;
}  */
</style>
