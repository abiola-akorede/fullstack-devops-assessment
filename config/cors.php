<?php


return [
    'paths' => [
        'api/*',
        'sanctum/csrf-cookie',
        'login',
        'register'
    ],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:5173', // React dev server
        'http://localhost', 
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];

