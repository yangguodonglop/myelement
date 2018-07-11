<template>
	<div class="login">
		<div class="login_con">

			<el-input v-model="user_admin" class="use_input" placeholder="请输入账户"></el-input>
			<el-input v-model="user_password" class="pass_input" placeholder="请输入密码"></el-input>
			<el-button type="primary" class="login_nth" @click="go_login">登录</el-button>

		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				user_admin: "杨国栋",
				user_password: "123456",
				login_type: 1,

			}
		},
		mounted: function() {

		},
		methods: {

			go_login: function() {
				let _this = this;
				const url = 'http://mapi.xinlv123.com/xltx/login';
				var params = new URLSearchParams();
				params.append('phone', _this.user_admin); //你要传给后台的参数值 key/value
				params.append('password', _this.user_password);
				params.append('login_type', _this.login_type);

				//				let data = {
				//					phone: _this.user_admin,
				//					password: _this.user_password,
				//					login_type: _this.login_type
				//				}
				//console.log(_this.user_admin+_this.user_password)
				//Vue.http.options.emulateJSON = true;
				this.$axios({
						method: 'post',
						url: url,
						data: params
					})
					.then(function(response) {
						console.log(response)
						if(response.status === 200) {
							if(response.body.status === 0) {

							}
						}
						if(response.status === 201) {
							//let _this=this
							var nowtoken=response.data.data.token
							localStorage.token = response.data.data.token; //token
							localStorage.expired_at = response.data.data.expired_at; //过期时间
							localStorage.refresh_expired_at = response.data.data.refresh_expired_at; //刷新时间
							localStorage.userstatus = true;
							console.log("888888")
							 _this.$axios.get("http://mapi.xinlv123.com/xltx/mobile/customerInfo",{headers :{Authorization: 'Bearer '+nowtoken}})
							.then((response)=>{
								
								var nowusername=response.data.data.name
								
								localStorage.setItem("nowusername",nowusername)
							}).catch((response)=>{
								console.log("失败")
							})
							_this.$router.push({
								path: '/index'
							})

							//window.location.href = "/user/index.html";
						}
					})
					.catch(function(error) {
						console.log(error);
					});

			}
		}
	}
</script>

<style scoped="">
	.login {
		width: 100%;
		height: 980px;
		background: url(../assets/images/registered_01.jpg) no-repeat center;
	}
	
	.login_con {
		width: 400px;
		height: 250px;
		margin: 0 auto;
		background: #666;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	
	.use_input {
		margin-top: 50px;
	}
	
	.pass_input {
		margin-top: 20px;
	}
	
	.login_nth {
		margin-left: 150px;
		margin-top: 20px;
	}
</style>