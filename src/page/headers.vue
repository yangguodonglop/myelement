<template>
	<el-row>
		<el-row :span="24" class="header_con">
			<el-col :span="3" class="header_con_l">
				<div class="grid-content bg-purple">
					<a href="#"><img src="../assets/images/img_logo.png"></a>
				</div>
			</el-col>
			<!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
			<el-col :span="5" class="header_con_r">
				<div class="grid-content bg-purple">
					<div class="user_img"><img src="../assets/images/11111.png"></div>
					<div class="user_txt">{{user_name}}</div>
				</div>
			</el-col>
		</el-row>
		<!--<el-col >
					<el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
						<el-menu-item index="1">高级插件</el-menu-item>
						<el-menu-item index="2">在线商城</el-menu-item>
						<el-menu-item index="3">客户管理</el-menu-item>
						<el-menu-item index="4">系统设置</el-menu-item>
						<el-menu-item index="5">活动发布</el-menu-item>
					</el-menu>
				</el-col>-->
	</el-row>

</template>

<script>
	export default{
		data(){
			return{
				user_name:localStorage.getItem("nowusername")
			}
		}
	}
</script>

<style>
	<style>.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #FFFFFF;
		/*display: flex;
    align-items: center;*/
	}
	.user_img{
		width:60px;
		height: 60px;
		line-height: 60px;
		float: left;
	}
	.user_txt{
		width: auto;
		float: left;
		line-height: 60px;
	}
	
	.bg-purple img {
		height: auto;
		width: auto;

		overflow: hidden;
		vertical-align: middle;
	}
	.user_img img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		overflow: hidden;
		vertical-align: middle;
	}

	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 50px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	.header_con {}
	
	.header_con_l {
		float: left;
	}
	
	.header_con_r {
		float: right;
	}
</style>
</style>