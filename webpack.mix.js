import mix from 'laravel-mix';

mix.js('resources/js/app.jsx', 'public/js')
    .react()
    .sass('resources/css/app.scss', 'public/css')
    .setPublicPath('public');
