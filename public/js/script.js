var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var vm = new Vue({

	http: {
      root: '/root',
      headers: {
        'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
      }
    },

	el: '#UserController',

	data: {
		newUser: {
			id: '',
			name: '',
			email: '',
			address: ''
		},

		success: false,
		edit: false
	},

	methods: {

		fetchUser: function () {
			this.$http.get('/api/users').then((data) => {
    		this.$set('users', data.json())
   		})
		},

		RemoveUser: function (id) {
			var ConfirmBox = confirm("Are you sure, you want to delete this User?")

			if(ConfirmBox) this.$http.delete('/api/users/' + id)

			this.fetchUser ()
			console.log(this.fetchUser())
		},

		EditUser: function (id) {
			var user = this.newUser

			this.newUser = { id: '', name: '', email: '', address: ''}

			this.$http.patch('/api/users/' + id, user, function (data) {
				
			})

			this.fetchUser ()
			console.log(this.fetchUser())


			this.edit = false

		},

		ShowUser: function (id) {
			this.edit = true
			
			this.$http.get('/api/users/' + id).then((data) => {
	    		this.$set('user', data.json())
	    		this.newUser.id = this.user.id
	    		this.newUser.name = this.user.name
	    		this.newUser.email = this.user.email
	    		this.newUser.address = this.user.address

   		})
			
		},
		AddNewUser: function () {

			var user = this.newUser

			//Clear form input
			this.newUser = { name:'', email:'', address:''}
			
			//Send Post request
			this.$http.post('/api/users', user ) 
			
			//reload page
			this.fetchUser ()
			console.log(this.fetchUser())

			// Show success message
			self = this
			this.success = true
			setTimeout(function () {
				self.success = false
			}, 5000)

		
		}
	},

	computed: {
		validation: function () {
			return {
				name: !!this.newUser.name.trim(),
				email: emailRE.test(this.newUser.email),
				address: !!this.newUser.address.trim()
			}
		},

		isValid: function () {
			var validation = this.validation
			return Object.keys(validation).every(function(key){
				return validation[key]
			})
		}
	},



	ready: function () {
		this.fetchUser ()
	}
});
