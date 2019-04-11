<template>
	<div style="background-color: #EBEBEB;min-height:900px">
		<el-row>
			<el-col :span="24">
				<!-- 头部组件 -->
				<div style="width:100%;background-color:#545c64; overflow: hidden">
					<span class="demonstration" style="float:left;padding-top:18px;color:white;margin-left:1%;font-size:25px;">
						汉光电气
					</span>
					<span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:50%">
						<el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b">
							<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
								{{ item.navItem }}
							</el-menu-item>
						</el-menu>
					</span>
					<span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
						<el-dropdown trigger="click">
							<span class="el-dropdown-link" style="color:white">
								admin
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>个人信息</el-dropdown-item>
								<el-dropdown-item>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</span>
				</div>
			</el-col>
			<el-col :span="24">
				<div class="layout-view">
					<router-view></router-view>
				</div>
			</el-col>
			<el-col :span="24">
				<div class="footer">
					<p>粤ICP备14059767号 | 技术支持: 广州汉光电气股份有限公司</p>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				navList: [
					{ name: '/page1', navItem: '我的电表' },
					{ name: '/page2', navItem: '我的水表' },
					{ name: '/page3', navItem: '操作日志' },
					// { name: '/personalCenter', navItem: '个人中心' },
					// { name: '/manageCenter', navItem: '管理员中心' },
				]
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				this.$route.path(keyPath)
				console.log(keyPath)
			}
		}
	};
</script>
<style scoped>
	.layout-view {
		min-height: 600px;
		width: 100%;
	}

	.footer {
		width: 100%;
		height: 50px;
		background-color: #545c64;
		padding-top: 10px;
		margin: 0 auto;
		text-align: center;
		color: white;
	}
</style>