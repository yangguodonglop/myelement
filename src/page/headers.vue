<template>
			<el-row>
				<el-row :span="24" class="header_con">
				  <el-col :span="3" class="header_con_l" >
				  	<div class="grid-content bg-purple"><a href="#"><img src="../assets/images/img_logo.png"></a></div>
				  </el-col>
				  <!--<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
				  <el-col :span="3"  class="header_con_r" >
				  	<div class="grid-content bg-purple"><a href="#"><img src="../assets/images/img_logo.png"></a></div>
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
</script>

<style>
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
  .bg-purple img{
  	height: 40px;
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
  .header_con{
  	
  
  }
 .header_con_l{
 	float:left;
 }
 .header_con_r{
 	float:right;
 }
</style>
</style>