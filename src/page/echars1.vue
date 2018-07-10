<template>
	<div style="width: 1200px; margin:  0 auto;">
		<div class="div_1" width="500">
			<div v-for="(item,$index) in list" class="div_2" @click="click_tab($index)" :class="{'active':$index==nowindex}">
				{{item.name}}
			</div>
		</div>
		<div class="div_3">
			<div id="myChart"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				nowindex: 0,
				shuju: [],
				shuju1: [],
				nowtype: 1,

				list: [{
						name: "出境"
					},
					{
						name: "国内"
					},
					{
						name: "热门"
					}

				]
			}
		},
		mounted: function() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			// 绘制图表
			myChart.setOption({
				title: {
					text: '在Vue中使用echarts'
				},
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
			//  this.drawLine();
		},
		methods: {
			//  drawLine(){
			//      
			//  },
			click_tab: function(index) {
				let _this = this
				_this.nowindex = index
				_this.nowtype = index + 1
				_this.shuju1 = []
				_this.shuju = []
				this.$axios.get('http://mapi.xinlv123.com/xltx/mobile/getDataList?paginate=' + 6 + '&type=' + 2).then((responese) => {
					//console.log(responese.data.data.data)
					_this.tableData = responese.data.data.data
					console.log(_this.tableData[0].buy_num)
					for(var i = 0; i < _this.tableData.length; i++) {
						_this.shuju.push(_this.tableData[i].buy_num)
						_this.shuju1.push(_this.tableData[i].id)
					}
					console.log(_this.shuju)
					let myChart = this.$echarts.init(document.getElementById('myChart'))
					// 绘制图表
					myChart.setOption({
						title: {
							text: '在Vue中使用echarts'
						},
						tooltip: {},
						xAxis: {
							data: _this.shuju1
						},
						yAxis: {},
						series: [{
							name: '销量',
							type: 'bar',
							data: _this.shuju
						}]
					});
				}).catch((err) => {
					console.log("失败")
				})

			}
		}

	}
</script>

<style scoped="">
	.div_1 {
		width: 1200px;
		height: 50px;
		float: left;
	}
	
	#myChart {
		width: 500px;
		height: 300px;
		float: left;
		margin-top: 30px;
	}
	
	.div_2 {
		width: 100px;
		height: 50px;
		float: left;
		line-height: 50px;
		cursor: pointer;
	}
	
	.div_3 {
		width: 500px;
		height: auto;
		margin: 0 auto;
		background: red;
	}
	
	.div_2.active {
		background: #409EFF;
		color: #FFFFFF;
	}
</style>