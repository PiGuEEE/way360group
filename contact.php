<!DOCTYPE HTML>
<html>
<head>
	<?php include('include/head.php'); ?>
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/contact.css">
</head>
<body>
	<!-- <header class="header">
		<div class="logo"></div>
		<nav class="menu">
			<a href="#" class="menuBtn" title="About the Way360 Group">ABOUT US</a>
			<a href="#" class="menuBtn" title="What is Corporate Social Responsibility?">WHAT IS CSR?</a>
			<a href="#" class="menuBtn" title="Latest Projects">LATEST PROJECTS</a>
			<a href="#" class="menuBtn" title="Contact us">CONTACT</a>
		</nav>
	</header> -->

	<div class="headerBtn">
		<div class="logo"></div>
		<div class="line line1"></div>
		<div class="line line2"></div>
		<div class="line line3"></div>
	</div>

	<?php include('include/menu.php'); ?>

	<section class="contact firstSection">
		<div class="titlesBox">
			<div class="weAreBox">
				<h1 class="weAre">Get in touch</h1>
			</div>
			<h2 class="weAreHere">Have a look at what we've been doing</h2>
		</div>
		<div class="monkey"></div>
		<div class="sectionContainer">
			<div class="formContainer">
				<div class="llamaContainer">
					<div class="llama"></div>
					<div class="globe"></div>
					<div class="stripes"></div>
				</div>
				<form method="post" action="">
					<div class="inputContainer">
						<input type="text" class="input required" name="name" id="name" required>
						<label for="name">Your name</label>
						<div class="bottomBar"></div>
					</div>
					<div class="inputContainer">
						<input type="email" class="input required" name="email" id="email" required>
						<label for="email">Your email</label>
						<div class="bottomBar"></div>
					</div>
					<div class="inputContainer">
						<input type="number" class="input" name="phone" id="phone" required>
						<label for="phone">Phone</label>
						<div class="bottomBar"></div>
					</div>
					<div class="inputContainer">
						<textarea class="textarea required" name="message" id="message" required></textarea>
						<label for="message">Message</label>
						<div class="bottomBar"></div>
					</div>
					<input type="submit" value="SEND" class="submit">
				</form>
			</div>
		</div>
	</section>

	<section class="csrSecond secondSection">
		<div class="aboutText">
			<h3>Idea to execution</h3>
			<p>We are passionate for what we do. The strategic entrepreneur way of thinking geared to build a better world through an innovative methodology.</p>
			<p>The group operates in the area of Cause Marketing, planning, developing and executing projects and events with two main goals: generating a real social impact and reaching the objectives of the social investing companies.</p>
			<p>The results are priceless. Thus we create a meaningful brand value for our clients and a return for philanthropic, social and environmental commitments.</p>
		</div>
	</section>
	
	<?php include('include/footer.php'); ?>	

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/youtube.js"></script>
</body>
</html>
