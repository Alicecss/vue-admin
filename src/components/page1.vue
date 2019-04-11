<template>
	<div class="page-box">
		<div class="page-main">
			<el-row>
				<el-col :span="4" class="mainLeft">
					<el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo" background-color="#f2f2f2" text-color="#000"
					 active-text-color="#ff5500">
						<el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
							{{ item.navItem }}
						</el-menu-item>
						<el-menu-item >
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item>
							<i class="el-icon-setting"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
					</el-menu>
				</el-col>
				<el-col :span="20">
					<div>
						<router-view></router-view>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>

	export default {
		data() {
			return {
				navList: [
					{ name: '/demo01', navItem: '电表详情' },
					{ name: '/demo02', navItem: '用户管理' },
					// { name: '/components/page3', navItem: '操作日志' },
					// { name: '/personalCenter', navItem: '个人中心' },
					// { name: '/manageCenter', navItem: '管理员中心' },
				]
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				this.$route.path(keyPath)
				console.log(keyPath)
			}
		}
	}
</script>

<style scoped>
	.mainLeft {
		min-height: 766px;
		background-color: #f2f2f2;
	}
	.el-menu-item:hover{
    border-left: 3px solid #ff5500;
	}
</style>