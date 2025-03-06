<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Define tus rutas de API aquí
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Ejemplo de ruta para un controlador de API
Route::get('/example', 'ExampleController@index');
