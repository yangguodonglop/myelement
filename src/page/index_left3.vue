<template>

	<div>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="id" label="商品ID" width="180">
			</el-table-column>
			<el-table-column prop="name" label="用户名称" width="180">
			</el-table-column>
			<el-table-column label="用户地址">
				<el-table-column prop="province" label="用户所在省" width="100">
				</el-table-column>
				<el-table-column prop="city" label="用户所在市" width="100">
				</el-table-column>
				<el-table-column prop="area" label="用户所在区" width="100">
				</el-table-column>
				<el-table-column prop="address" label="详细地址" width="100">
				</el-table-column>
			</el-table-column>

			<el-table-column prop="phone" label="用户电话" width="180">
			</el-table-column>
			<el-table-column prop="is_default" label="是否默认" width="180">
			</el-table-column>
			<el-table-column label="操作选择" width="300">
				<template scope="scope">
					<el-button type="primary" class="new_btn1" @click="dialogVisible4(scope.$index, scope.row)">新增</el-button>
					<el-button type="primary" class="new_btn1" @click="dialogVisible1(scope.$index, scope.row)">编辑</el-button>
					<el-button type="primary" class="new_btn2" @click="dialogVisible3(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog class="new_input" title="填写表单" :visible.sync="dialogVisible" width="30%">
			<span>请修改你想要的信息</span>
			<el-form :model="editForm" label-width="80px" ref="editForm">
				<el-form-item label="用户ID" prop="id">
					<el-input v-model="editForm.id" auto-complete="off" :disabled="true"></el-input>
				</el-form-item>
				<el-form-item label="用户名称" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="电话" prop="phone">
					<el-input v-model="editForm.phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="省" prop="province">
					<el-input v-model="editForm.province" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="市" prop="city">
					<el-input v-model="editForm.city" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="区" prop="area">
					<el-input v-model="editForm.area" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" prop="address">
					<el-input v-model="editForm.address" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible2" v-if="ok_one">确 定</el-button>
			    <el-button type="primary" @click="dialogVisible22" v-if="ok_two">确 定1</el-button>
 			 </span>
		</el-dialog>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				dialogVisible: false,
				ok_one: false,
				ok_two: false,
				tableData: [

				],
				input1: "收货人",
				input2: "联系电话",
				input3: "请输入省",
				input4: "请输入市",
				input5: "请输入区",
				input6: "请输入具体地址",
				editForm: {
					id: "请输入ID",
					phone: "请输入电话号码",
					name: '请输入名字',
					province: "请输入省",
					city: '请输入市',
					area: '请输入县',
					address: "请输入详细地址"
				}
			}

		},
		mounted: function() {
			let _this = this
			var token = localStorage.getItem('token');
			this.$axios.get('http://mapi.xinlv123.com/xltx' + '/addressList', {
				headers: {
					Authorization: 'Bearer ' + token
				}
			}).then(function(response) {
				console.log(response)
				_this.tableData = response.data.data;
				console.log(response)
			}, function(err) {
				alert('网络异常!');
			})
		},
		methods: {
			dialogVisible1: function(index, row) {
				let _this = this;
				_this.ok_one = true;
				_this.ok_two = false;
				_this.dialogVisible = true
				//			var item_id = sessionStorage.getItem('item_id');
				//			console.log(item_id)
				_this.editForm = Object.assign({}, row);
			},
			dialogVisible2: function() {
				let _this = this;
				var token = localStorage.getItem('token');
				_this.dialogVisible = false;

				const url = 'http://mapi.xinlv123.com/xltx/updateAddress'
				var params = new URLSearchParams();
				params.append('address_id', _this.editForm.id); //你要传给后台的参数值 key/value
				params.append('name', _this.editForm.name); //你要传给后台的参数值 key/value
				params.append('phone', _this.editForm.phone);
				params.append('province', _this.editForm.province);
				params.append('city', _this.editForm.city); //你要传给后台的参数值 key/value
				params.append('area', _this.editForm.area);
				params.append('address', _this.editForm.address);
				_this.$axios({
					method: 'post',
					url: url,
					data: params,
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(function(response) {

					console.log("到这里咯")
					var token = localStorage.getItem('token');
					_this.$axios.get('http://mapi.xinlv123.com/xltx' + '/addressList', {
						headers: {
							Authorization: 'Bearer ' + token
						}
					}).then(function(response) {
						console.log(response)
						_this.tableData = response.data.data;
						console.log(response)
					}).catch(function(response) {
						alert("失败")
					})

				}).catch(function(response) {
					alert("失败")
				})

			},
			dialogVisible3: function(index, row) {
				let _this = this
				_this.editForm = Object.assign({}, row);
				var params = new URLSearchParams();
				var token = localStorage.getItem('token');
				params.append('address_id', _this.editForm.id);
				const url = 'http://mapi.xinlv123.com/xltx/deleteAddress'
				_this.$axios({
					method: 'post',
					url: url,
					data: params,
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(function(response) {
					console.log("成功")
					//let _this = this
					var token = localStorage.getItem('token');
					_this.$axios.get('http://mapi.xinlv123.com/xltx' + '/addressList', {
						headers: {
							Authorization: 'Bearer ' + token
						}
					}).then(function(response) {
						console.log(response)
						_this.tableData = response.data.data;
						console.log(response)
					}).catch(function(response) {
						alert("失败")
					})

				}).catch(function(response) {
					alert("失败")
				})

			},
			dialogVisible4: function() {
				let _this = this
				_this.ok_one = false;
				_this.ok_two = true;
				_this.dialogVisible = true

			},
			dialogVisible22: function() {

				let _this = this
				_this.dialogVisible = false
				var token = localStorage.getItem('token');

				const url = 'http://mapi.xinlv123.com/xltx/storeAddress'
				var params = new URLSearchParams();
				//				params.append('address_id', _this.editForm.id); //你要传给后台的参数值 key/value
				params.append('name', _this.editForm.name); //你要传给后台的参数值 key/value
				params.append('phone', _this.editForm.phone);
				params.append('province', _this.editForm.province);
				params.append('city', _this.editForm.city); //你要传给后台的参数值 key/value
				params.append('area', _this.editForm.area);
				params.append('address', _this.editForm.address);
				_this.$axios({
					method: 'post',
					url: url,
					data: params,
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(function(response) {

					console.log("到这里咯")
					var token = localStorage.getItem('token');
					_this.$axios.get('http://mapi.xinlv123.com/xltx' + '/addressList', {
						headers: {
							Authorization: 'Bearer ' + token
						}
					}).then(function(response) {
						console.log(response)
						_this.tableData = response.data.data;
						console.log(response)
					}).catch(function(response) {
						alert("失败")
					})

				}).catch(function(response) {
					alert("失败")
				})
			}

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
	
	.new_btn1 {
		width: 80px;
		text-align: center;
		white-space: inherit;
	}
	
	.new_btn2 {
		width: 80px;
		text-align: center;
		white-space: inherit;
	}
	
	.new_input input {
		/*		margin-top: 20px;
*/
	}
</style>