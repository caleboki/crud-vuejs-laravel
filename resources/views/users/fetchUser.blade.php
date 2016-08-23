@extends('layouts.master')
@section('content')
	<div id="UserController" style="padding-top: 2em">
	
	<validator name="validation1">
		<form action="#" @submit.prevent="AddNewUser" method="POST">

			<div class="form-group">
				<li class="alert alert-danger" v-if="$validation1.name.dirty &&$validation1.name.required">Name field is required</li>
				<label for="name">Name:</label>
				<input v-model="newUser.name" type="text" v-validate:name="['required']" id="name" name="name" class="form-control">
			</div>

			<div class="form-group">
				<li class="alert alert-danger" v-if="$validation1.email.dirty && !validation.email">Enter a valid Email</li>{{-- Custom validator here--}} 
				<label for="email">Email:</label>
				<input v-model="newUser.email" type="text" v-validate:email="{ required:true }" id="email" name="email" class="form-control">
			</div>

			<div class="form-group">
				<li class="alert alert-danger" v-if="$validation1.address.dirty &&$validation1.address.required">Address field is required</li>
				<label for="address">Address:</label>
				<input v-model="newUser.address" type="text" v-validate:address="['required']" id="address" name="address" class="form-control">
			</div>

			<div class="form-group">
				<button :disabled="!isValid" class="btn btn-default" type="submit" v-if="!edit">Add New User</button>
				<button :disabled="!isValid" class="btn btn-default" type="submit" v-if="edit" @click="EditUser(newUser.id)">Edit User</button>
			</div>
		</form>
	</validator>

		<div class="alert alert-success" transition="success" v-if="success == 1">Add new user successful</div>
		<div class="alert alert-danger" transition="success" v-if="success == -1">Error: Email already taken</div>
		<table class="table">
			<thead>
				<th>ID</th>
				<th>NAME</th>
				<th>EMAIL</th>
				<th>ADDRESS</th>
				<th>CREATED AT</th>
				<th>UPDATED AT</th>
				<th>CONTOLLER</th>
			</thead>

			<tbody>
				<tr v-for="user in users">
					<td>@{{ user.id }}</td>
					<td>@{{ user.name }}</td>
					<td>@{{ user.email }}</td>
					<td>@{{ user.address }}</td>
					<td>@{{ user.created_at }}</td>
					<td>@{{ user.updated_at }}</td>
					<td>
					<button class="btn btn-default btn-sm" @click="ShowUser(user.id)">Edit</button>
					<button class="btn btn-danger btn-sm" @click="RemoveUser(user.id)">Remove</button>
					</td>
					
				</tr>
			</tbody>
		</table>
	</div>
	
@endsection

@push('scripts')
	
	<style>
		.success-transition {
			transition: all .5s ease-in-out; 
		}
		.success-enter, .success-leave {
			opacity: 0;
		}
	</style>
@endpush