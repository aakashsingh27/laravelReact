<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel with React & Mix</title>
    
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <!-- React will render here -->
    <div id="root"></div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
