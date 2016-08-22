<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="token" id="token" value="{{ csrf_token() }}">
	<title>Crud with Vue JS</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>

	<div class="container">
		@yield('content')
	</div>
	<script src="/js/vendor.js"></script>
	@stack('scripts')

</body>
</html>