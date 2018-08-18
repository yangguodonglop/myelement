<template>
	<el-row>
		<el-row :span="24" class="header_con">
			<el-col :span="3" class="header_con_l">
				<div class="grid-content bg-purple">
					<a href="#"><img src="../assets/images/img_logo.png"></a>
				</div>
			</el-col>
			<el-col :span="3" class="header_con_r">
				<!--<counter1 num="101"></counter1>-->
			</el-col>
				<el-col :span="3" class="header_con_r">			
				<!--<p class="p1">子传父{{numchild}}</p>-->
			</el-col>
			<el-col :span="3" class="header_con_r">
				<!--<counter2 v-bind:numchild="numchild" v-on:clickadd="add_tab" v-on:clickreduce="reduce"></counter2>-->
			</el-col>
		
			<!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
			<el-col :span="5" class="header_con_r">
				<div class="grid-content bg-purple">
					<div class="user_img"><img src="../assets/images/11111.png"></div>
					<div class="user_txt">{{user_name}}1
					
					</div>
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
	import Vue from 'vue'
//	import counter1 from './childsone'
//	import counter2 from './childsone1'
	export default{
		data(){
			return{
				user_name:localStorage.getItem("nowusername"),
				numchild:100
			}
		},
		components:{
//			counter1,
//			counter2
		},
		methods:{
			add_tab:function(){
				let _this=this
				_this.numchild++
			},
			reduce:function(){
				let _this=this
				_this.numchild--
			}
		}
	}
</script>


	<style>
		.el-row {
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
	.p1{
		color: #409EFF;
		float: left;
	}
</style>
