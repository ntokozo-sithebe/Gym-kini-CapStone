<template>
    <div class="container-fluid">
		<!-- <img class="honey img-fluid w-100" src="https://i.ibb.co/58Zb9rT/c6533b8c5a9dca582f1e51572e75f475.jpg" alt=""> -->
        <!-- <div class="overlay-form"> -->
        <div class="row" id="wrapper">
			<h2 class="text-align-center m-3">Let's Connect</h2>
            <div class="col justify-content-center overlay_form text-black ">
                <form action="https://formspree.io/f/mnqenpjw" method="post">
                <label class="input m-1">
					First Name
                        <input type="text" class="form-control" rows="2" required name="firstName" >
					</label>
                <label class="input m-1">
					LastName
                        <input type="text" class="form-control" rows="2" required name="lastName">
			</label>
                    <label class="input m-1">
						Email
                        <input type="text" class="form-control" rows="2" required name="email">
					</label>
                    <label class="input m-1">
						Message
                        <textarea input type="text" class="form-control" rows="2" required name="message">
                        </textarea>
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
                

            </div>
        </div>
    </div>
<!-- 
    </div> -->
</template>

<script>
    export default {
        name : 'ContactView'
    }
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
    /* height: 70vh ;
    width: 70%; */
    /* background-repeat: no-repeat; */
    /* background-attachment: fixed; */
	/* padding: 5rem;
    margin: auto;
    opacity: 100%; */
    /* background-position: 0% 40%; */
	
    background-image: url('https://i.ibb.co/58Zb9rT/c6533b8c5a9dca582f1e51572e75f475.jpg');
	background-position: 10% 70%; 
	height: 90vh;
    background-size: auto;
	background-position: cover;
	margin: 0rem;
    padding: 5rem;
 
}

/* .overlay-form {
    position: absolute;
    background-color: white;
    border-radius: 10px;
    top: 50% ;
    translate: middle;
    align-items: center;
} */

#wrapper{
	width: 333px;
	padding: 2rem 1rem;
	margin: auto;
	background-color: white;
	border-radius: 10px;
	text-align: center;
}

button{
	border-radius: 10px;
	margin-top: 1.5rem;
	width: 50%;
	cursor: pointer;
	background-color: rgb(119, 214, 246);
	padding: 2px;
	border-radius: 3rem;
	

}

button :hover{
	background-color: pink;
}
form input{
	padding: 10px 22px;
	margin-top: 10px ;
	margin-bottom: 10px;
	width:90% ;
	outline: none;
	border:1px solid white ;
	border-radius: 20px;
	background: white;
	justify-content: center;

}





</style>