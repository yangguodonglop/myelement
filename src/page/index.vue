<template>
	<div id="app">
		<!-- 头部导航 -->
		<el-container>
			<el-header>
				<headers></headers>
			</el-header>
			<el-container>
				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
					<el-menu :default-openeds="['1', '3']" router>
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>导航一</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="index_left1">选项1</el-menu-item>
								<el-menu-item index="index_left2">选项2</el-menu-item>
								<el-menu-item index="index_left3">选项3</el-menu-item>
								<el-menu-item index="echars1">选项4</el-menu-item>
							</el-menu-item-group>

						</el-submenu>
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>导航一</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="index_left1">选项1</el-menu-item>
								<el-menu-item index="index_left2">选项2</el-menu-item>
								<el-menu-item index="index_left3">选项3</el-menu-item>
								<el-menu-item index="echars1">选项4</el-menu-item>
							</el-menu-item-group>

						</el-submenu>

					</el-menu>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
		<!--<headers></headers>
		<main>

			<indexleft></indexleft>
			<indexright></indexright>

		</main>-->
	</div>
</template>

<script>
	import Vue from 'vue'
	import Element from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'
	import headers from './headers'
	import indexleft from './indexleft'
	import indexright from './indexright'
	Vue.use(Element)

	export default {
		name: 'app',
		data: function() {
			return {

			}
		},
		components: {
			headers,
			indexleft,
			indexright
		},
	}
</script>

<style>
	body {
		margin: 0;
	}
	
	#app {
		min-width: 1200px;
		margin: 0 auto;
		font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
	}
	/* 头部导航 */
	
	header {
		z-index: 1000;
		min-width: 1200px;
		transition: all 0.5s ease;
		border-top: solid 4px #3091F2;
		background-color: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
	}
	
	header.header-fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	
	header .el-menu-demo {
		padding-left: 300px!important;
	}
	/* 主内容区 */
	
	main {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		min-height: 800px;
		border: solid 40px #E9ECF1;
		background-color: #FCFCFC;
	}
	
	main .main-left {
		text-align: center;
		width: 200px;
		float: left;
	}
	
	main .main-right {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		background-color: #fff;
		padding: 50px 70px;
	}
	
	main .el-menu {
		background-color: transparent!important;
	}
	
	.el-dialog__title {
		color: blue;
		text-align: center;
		text-align: center;
		width: 100%;
		float: left;
	}
	
	.my_ele_div {
		color: red;
	}
</style>