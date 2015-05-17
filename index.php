<!doctype html>
<head>
	<meta charset="utf-8">
	<title>sandwiches.rocks</title>
	<meta name="description" content="A List of Notable Sandwiches">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
	<link rel="stylesheet" href="dist/css/main.css">
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
</head>
<body>
	<header>
		<h1>Sandwiches.rocks</h1>
		<div class="logo">
			<?php echo file_get_contents("app/assets/sandwich.svg"); ?>
		</div>
	</header>

	<div class="controls">
		<label>Sort:</label>
		<button class="sort" data-sort="myorder:asc">Asc</button>
		<button class="sort" data-sort="myorder:desc">Desc</button>
	</div>

	<div id="container" class="container">
		<?php
			$json_url = "data/sandwiches.json";
			$json = file_get_contents($json_url);
			$links = json_decode($json, TRUE);
		?>
		<div class="master">

			<?php foreach($links as $key=>$val) { ?>
				<div class="mix card" data-myorder="<?php echo $key ?>">
					<h2><?php echo $val['name'] ?></h2>
					<h3><?php echo $val['origin'] ?></h3>
					<div class="wrap">
						<p class="replace"><?php echo $val['image'] ?></p>
					</div>
					<p><?php echo $val['description'] ?></p>
				</div>
			<?php } ?>

		</div>
	</div>

	<footer>
		<?php echo file_get_contents("app/assets/check3.svg"); ?>
		<p>yumm</p>
	</footer>

	<script src="/bower_components/jquery/jquery.min.js"></script>
	<script src="/bower_components/mixitup/build/jquery.mixitup.min.js"></script>
	<script src="dist/js/app.min.js"></script>
</body>
</html>