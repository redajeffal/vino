<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Un petit verre de vino</title>

		<meta charset="utf-8">
		<meta http-equiv="cache-control" content="no-cache">
		<meta name="viewport" content="width=device-width, minimum-scale=0.5, initial-scale=1.0, user-scalable=yes">
         <link href="https://fonts.googleapis.com/css?family=Krub|Questrial" rel="stylesheet">
		<meta name="description" content="Un petit verre de vino">
		<meta name="author" content="Jonathan Martel (jmartel@cmaisonneuve.qc.ca)">

		<link rel="stylesheet" href="./css/normalize.css" type="text/css" media="screen">
		<link rel="stylesheet" href="./css/base_h5bp.css" type="text/css" media="screen">
		<link rel="stylesheet" href="./css/main.css" type="text/css" media="screen">

		<link rel="stylesheet" href="./css/header.css" type="text/css" media="screen">
                <link rel="stylesheet" href="./css/menuHamburger.css" type="text/css" media="screen">

		

		<base href="<?php echo BASEURL; ?>">
		<!--<script src="./js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>-->
		<script src="./js/main.js"></script>
		<script src="./js/hamburger.js"></script>
		<!-- inclus bootstrap cdn -->
		
	</head>
	<body >
		<header>
			<div class='container'>
				<h1>vino</h1>
				<img src="./img/vinoLogo-blanc.png" alt="Logo Vino">

				<!-- codepen start -->
				 <input type="checkbox" id="menyAvPaa">
    <label id="burger" for="menyAvPaa">
        <div></div>
        <div></div>
        <div></div>
    </label>
						<!--codepen end  -->
				<nav id="meny">
					<ul>
						<li><a href="?requete=accueil">Mon cellier</a></li>
						<li><a href="?requete=ajouterNouvelleBouteilleCellier">Ajouter une bouteille au cellier</a></li>
					</ul>
				</nav>
			</div>
		</header>
		<main class='container'>
			