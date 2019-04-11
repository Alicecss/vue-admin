<template>
	<div id="login_wappers">
		<div class="login_contant">
			<el-form ref="form" :model="form" label-width="80px" class="login_form">
				<el-form-item class="login_name" label="用户名">
					<el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item class="login_pawd" label="密码">
					<el-input v-model="form.password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
					<span style="float: right;color: #A9A9AB">忘记密码？</span>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>



<script>
	//  import { userLogin } from '../../api/api';
	export default {
		data() {
			return {
				form: {
					userName: 'admin',
					password: '123456',

				},
				isBtnLoading: false

			}
		},
		created() {
			if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
				this.userName = JSON.parse(localStorage.getItem('user')).userName;
				this.password = JSON.parse(localStorage.getItem('user')).password;
			}
		},
		computed: {
			btnText() {
				if (this.isBtnLoading) return '登录中...';
				return '登录';
			},
		},
		methods: {
			login() {
				if (!this.form.userName) {
					this.$message.error('请输入用户名');
					return;
				}
				if (!this.form.password) {
					this.$message.error('请输入密码');
					return;
				}
				this.isBtnLoading = true;
				this.$router.push({ path: '/home' })
			}
		}
	}
</script>
<style scoped>
	#login_wappers {
		width: 100%;
		height: 100%;
		position: fixed;
		background-image: url("../assets/images/login-bg.jpg");
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
	}

	.login_form {
		width: 345px;
		height: 240px;
		background-color: rgba(199, 198, 198, 0.3);
		position: absolute;
		padding: 50px;
		top: 25%;
		left: 60%;

	}

	.el-form-item {
		margin-bottom: 55px;
	}



	.login_btn {
		width: 122px;
		font-size: 16px;
		background: -webkit-linear-gradient(left, #000099, #2154FA);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #000099, #2154FA);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #000099, #2154FA);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #000099, #2154FA);
		/* 标准的语法 */
		filter: brightness(1.4);
	}
</style>
<style>
	.login_name .el-form-item__label,
	.login_pawd .el-form-item__label {
		color: #fff;
		font-size: 16px;
	}
</style>