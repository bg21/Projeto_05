<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="author" content="Juliana">
	<meta name="description" content="Descrição">
	<meta name="keywords" content="keywords">
	<title></title> 
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
	<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500" rel="stylesheet">
	<link rel="stylesheet" href="css/estilo.css">
	<link rel="stylesheet" href="css/aos.css">
</head>
<body>

	<header style="border-bottom: 4px solid #EA2D2F;">
		<div class="container">
			<div class="logo">
				<img src="imagens/logo.jpg">
			</div>
			<nav class="desktop">
				<ul>
					<li><a href="home">Início</a></li>
					<li><a href="vendas">Vendas</a></li>
					<li><a href="sobre">Sobre nós</a></li>
					<li><a goto="contato" href="">Contato</a></li>
				</ul>
			</nav>

			<nav class="mobile">
				<h2><i class="fas fa-bars"></i></h2>
				<ul>
					<li><a href="index">Início</a></li>
					<li><a href="vendas">Vendas</a></li>
					<li><a href="sobre">Sobre nós</a></li>
					<li><a goto="contato" href="">Contato</a></li>
				</ul>
			</nav>
		</div>
	</header>
<?php	
//Aplicando URL amigável
	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include ($_GET['url'].'.html');
		}else{
			include ('404.html');
		}
	}else{
		include ('home.html');
	}
//Aplicando URL amigável	
?>
	<footer>
		<div class="container">
			<div class="footer1">
				<nav class="desktop">
					<ul>
						<li><a href="home">Início</a></li>
						<li><a href="vendas">Vendas</a></li>
						<li><a href="sobre">Sobre nós</a></li>
						<li><a goto="contato" href="">Contato</a></li>
					</ul>
				</nav>
				<div class="direitos">
					<h3>Todos os direitos reservados a <b>RM Veículos Especiais</b></h3>
				</div>
			</div>
		</div>
	</footer>
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/menu_responsivo.js"></script>
	<script src="js/menu-scroll.js"></script>
	<script src="js/functions.js"></script>
	<script src="js/aos.js"></script>
	<script>
		AOS.init({
			duration:2000
		});
	</script>
</body>
</html>