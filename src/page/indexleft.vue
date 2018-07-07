<template>
		<!-- 左侧导航 -->
			<div class="main-left">
				<el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
					<el-menu-item index="index_left1" :class="{'isActive': active}">活动发布</el-menu-item>
					<el-menu-item index="index_left2" :class="{'isActive': !active}">活动管理</el-menu-item>
					
				</el-menu>
			</div>

</template>

<script>
	export default {
		name: 'app',
		data: function() {
			return {
				active: true,
				 visible: false
			}
		}
	}
</script>

<style>
</style>