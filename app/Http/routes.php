<?php


Route::resource('/', 'UserController');

Route::get('/api/users', function() {
	return App\User::all();
});

Route::post('/api/users', function() {
	return App\User::create(Request::all());
});

Route::get('/api/users/{id}', function($id) {
	return App\User::findOrFail($id);
});

Route::patch('/api/users/{id}', function($id) {
	App\User::findOrFail($id)->update(Request::all());
	return Response::json(Request::all());
});

Route::delete('/api/users/{id}', function($id) {
	//App\User::findOrFail($id)->update(Request::all());
	return App\User::destroy($id);
}); 