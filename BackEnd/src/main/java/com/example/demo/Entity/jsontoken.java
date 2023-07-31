package com.example.demo.Entity;

	import jakarta.persistence.Column;
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Table;

	@Entity
	@Table(name = "Tokens")
	public class jsontoken {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "userId")
	    private int id;
	    
	    @Column(name = "UserName")
	    private String username;

	    public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getUseremail() {
			return useremail;
		}

		public void setUseremail(String useremail) {
			this.useremail = useremail;
		}


		@Column(name = "Email")
	    private String useremail;

	    @Column(name = "JSON web tokens" , columnDefinition = "TEXT")
	    private String token;

	    public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}

		public jsontoken() {}

	    public jsontoken(String username, String useremail, String token) {
	        this.username = username;
	        this.useremail = useremail;
	        this.token = token;
	    }
	}
