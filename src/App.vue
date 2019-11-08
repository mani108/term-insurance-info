<template>
 <div class="container-fluid" id="app">
	<div class="row">
		<div class="col-md-12">
			<nav class="navbar navbar-expand-lg navbar-light bg-primary">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="navbar-toggler-icon"></span>
				</button> <a class="navbar-brand text-white font-weight-bolder" href="/">Term Insurance Plan Info.</a>
			</nav>
		</div>
	</div>
  <!-- <div class="row">
		<p class="col-md-12 display-4 text-center mt-5">Term Insurance Proviers in India</p>
	</div> -->
	
	<router-view/>
	
</div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
