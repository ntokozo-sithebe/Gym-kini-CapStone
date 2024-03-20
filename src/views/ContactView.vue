<template>
    <div class="container-fluid">
		<img class="honey img-fluid w-100" src="https://i.ibb.co/58Zb9rT/c6533b8c5a9dca582f1e51572e75f475.jpg" alt="">
        <div class="overlay-form">
        <div class="row" id="wrapper">
			<h2 class="text-align-center m-3">Let's Connect</h2>
            <div class="col justify-content-center overlay_form text-black ">
                <form action="" method="post">
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Name" rows="2" cols="10" >
                        </textarea>
                    </div>
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="LastName" rows="2">
                        </textarea>
                    </div>
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Email" rows="2" >
                        </textarea>
                    </div>
                    <div class="input m-1">
                        <textarea input type="text" class="form-control" placeholder="Message" rows="2" >
                        </textarea>
                    </div>
                    <button class="btn m-2 bg-white text-black text-align-center">
                        Submit
                    </button>
                </form>
                

            </div>
        </div>
    </div>

    </div>
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
.honey{
    /* height: 70vh ;
    width: 70%; */
    /* background-image: url('https://i.ibb.co/58Zb9rT/c6533b8c5a9dca582f1e51572e75f475.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 40%;
    background-attachment: fixed;
    margin: auto;
    opacity: 100%;
	
}

.overlay-form {
    position: absolute;
    background-color: white;
    border-radius: 10px;
    top: 50% ;
    translate: middle;
    align-items: center;
}

#wrapper{
	width: 333px;
	padding: 2rem 1rem;
	margin: 50px auto;
	background-color: white;
	border-radius: 10px;
	text-align: center;
	margin-top: 50px;
}

.btn{
	border-radius: 10px;
	margin-top: 1.5rem;
	width: 90%;
	cursor: pointer;
	background-color: rgb(119, 214, 246);
	padding: 2px;
	border-radius: 3rem;
	

}

.btn :hover{
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