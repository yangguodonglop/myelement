<template>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="id" label="商品ID" width="180">
		</el-table-column>
		<el-table-column prop="price" label="商品价格" width="180">
		</el-table-column>
		<el-table-column prop="buy_num" label="购买数量" width="180">
		</el-table-column>
		<el-table-column prop="thumb" label="商品图片" width="180">
			<template slot-scope="scope">
				<img :src="scope.row.thumb" alt="" style="width:80px;height: 80px">
			</template>
		</el-table-column>
		<el-table-column prop="title" label="商品标题">
		</el-table-column>
	</el-table>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {

				tableData: [
					//				{
					//					date: '2016-05-02',
					//					name: '王小虎',
					//					address: '上海市普陀区金沙江路 1518 弄'
					//				}, {
					//					date: '2016-05-04',
					//					name: '王小虎',
					//					address: '上海市普陀区金沙江路 1517 弄'
					//				}, {
					//					date: '2016-05-01',
					//					name: '王小虎',
					//					address: '上海市普陀区金沙江路 1519 弄'
					//				}, {
					//					date: '2016-05-03',
					//					name: '王小虎',
					//					address: '上海市普陀区金沙江路 1516 弄'
					//				}
				]
			}
		},
		mounted: function() {
			axios.get('http://mapi.xinlv123.com/xltx/mobile/recommend').then((responese) => {
				console.log(responese.data.data.theme)
				this.tableData = responese.data.data.theme
				//				this.dt2 = responese.data.data.abroad
				//				this.dt3 = responese.data.data.abroad
				//				this.dt4 = responese.data.data.abroad
				console.log(this.tableData)

			}).catch((err) => {
				console.log("失败")
			})
		}
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
	
	.el-table th {
		text-align: center;
	}
</style>