<template>
  <div class="container">
    <div class="row">
      <div class="col ">
        <img class="img-fluid w-100 p-3" src="https://i.ibb.co/yFtCGYW/Beauty-Kat-Borchart.jpg" alt="cont" loading="lazy">
      </div>  <!-- eslint-disable   -->
	  			 
	  <div class="col text-align-center text-black p-5 m-3">
		<p class="p-3 text-align-center p-5 m-3"> 
			<h2 class="fs-2"> Believe </h2>

		<p>A major part of my skin journey has been self-belief <br> <i> WEIRD right...?</i> </br></p>	

			The Reflection of your mind reflects on your skin - hence when stressed most of us tend to break out. 
<br> 			<h5 class="fs-2"> What do you think about yourself and How do you see you ?</h5>
<P>
	Believe in better is a brand that wants you to reflect on you, spend time with yourself and get to know yourself a bit better by understanding your skin type - what your skin can and cannot absorb
</P>

<br>
<p>
	Our products are made of natural ingredients that cather to both Male or Female and both - <span><i>everyone needs self care</i></span>
</p>
			
		</p>
	  </div>
    </div>
     
      <div class="row">
		  <div class="col text-align-center p-5 m-3">
			<h2 class="fs-2">Believe in Better {{ currDate }}</h2>
			<p class="text-align-center p-5 m-3" > Designed for Men and Women  
  
			  <br> WE STRIVE FOR COMMUNITY !! 
			  <br>


			  Community is where we share our skin experiences, tips,tricks, ideas , solutions - Yes we all have different skin types but the methods we share on how we apply products on our skin is just as important especially when you just don't know where to start 
<br>
<br>
			  <i class="fs-6">WE GOT YOU </i>

			  <br>
			  <a href="/products">
			  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-heart-arrow" viewBox="0 0 16 16">
  <path d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708z"/>
</svg></a>
  
	
			</p>
		  </div>
        <div class="col">
          <img class="img-fluid w-100 p-2" src="https://i.ibb.co/2v6rJNC/c249d88ccb5d1055652caa3510bd883c.jpg" alt="comfort" loading="la" >
        </div>
      </div> 
	   <!-- eslint-disable   -->

    <!-- <div class="row">
      <div class="col">
        <img class="img-fluid w-100" src="https://i.ibb.co/qxNRsH1/gym-kini-theone.jpg" alt="cont1" loading="lazy">
      </div>
    </div> -->
   
  </div>
</template>
<script>

export default{
  name: 'AboutView',
  data(){
            return{
                currDate: new Date().getFullYear()
            }
        },

}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

body{
	font-family:"Playfair Display", serif;
	background-color: white;
}

.container{
	background-color: white;
	scroll-behavior: none;
}

@media (min-width < 762px){
	.col{
		flex: 0 0 50%
	}
	.container{
		justify-content: center;
		position: relative;
		display: block;
		margin: 0px;
		text-align: center;
	}
	.navbar-toggler-icon{
		justify-content: center;
		align-items: center;
	}
}

@media  (min-width <  992px){
	.col{
		flex: 0 0 33.333%
	}
	
}

@media (min-width < 1500px  ){
	.col{
		flex: 0 0 25%
	}
	.navbar-toggler-icon{
		justify-content: center;
		align-items: center;
	}
}

</style>
