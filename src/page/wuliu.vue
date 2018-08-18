<template>

	<div class="div_tatol">
		<!--<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<span>{{selVal}}</span>
			<span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
		</el-dialog>-->
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">
			<el-select v-model="value" placeholder="请选择" @change="changeValue" style="width: 200px; float: left;">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">
			<el-input v-model="nowvalue" placeholder="请输入内容" style="width: 200px; float: left;"></el-input>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<el-checkbox v-model="checked" style="width: 200px; float: left;">备选项</el-checkbox>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" style="width: 200px; float: left;">
			</el-switch>
		</div>

		<div class="block" style="width: 500px; float: left;">

			<el-slider v-model="value3"></el-slider>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<div class="block" style="text-align: left;">
				<el-cascader :options="options1" v-model="selectedOptions" @change="handleChange">
				</el-cascader>
			</div>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<div class="block" style="text-align: left;">
				<el-date-picker v-model="value5" type="date" placeholder="选择日期">
				</el-date-picker>
			</div>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<div class="block" style="text-align: left;">
				<el-form ref="form" :inline="true" v-model="form" label-width="100px">
					<el-col :span="4">
						<el-form-item>
							<el-date-picker v-model="form.birthdayName" type="date" @change="dateChangebirthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期">
							</el-date-picker>

						</el-form-item>
					</el-col>
				</el-form>
			</div>
		</div>
		<div class="div_active" style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<div class="block" style="text-align: left;">
				<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
					<el-button size="small" type="primary">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
		</div>
		<div style="width: 100%; height: auto; overflow: hidden; margin-top: 20px;">

			<el-button type="primary" style="width: 80px; float: left;" @click="go_chaxun()">确定</el-button>
		</div>
 
	</div>
	<!--<el-row :gutter="20" class="new_less">
		<el-col :span="6">
			<div class="grid-content bg-purple">
				<el-form ref="form" :model="form" label-width="80px">

					<el-form-item label="活动区域" style="width: 100%;">
						<el-select v-model="value" multiple placeholder="请选择" @change="currentSel(selVal)">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">
							</el-option>
						</el-select>
					</el-form-item>

				</el-form>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple">
				<el-form ref="form" :model="form" label-width="150px">
					<el-form-item label="订单号" style="width: 100%;">
						<el-input v-model="form.name" style="width: 150px;"></el-input>
					</el-form-item>

				</el-form>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple">
				<el-form ref="form" :model="form" label-width="150px">
					<el-form-item label="" style="width: 100%;">
						<el-button type="primary" @click="go_chaxun">点击查询</el-button>
					</el-form-item>

				</el-form>
			</div>
		</el-col>

	</el-row>-->
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',

				valuefill: '',
				inputfill: '',
				checked: true,
				nowvalue: '',
				value1: true,
				value2: true,
				value3: 50,
				options1: [{
					value: 'zhinan',
					label: '指南',
					children: [{
						value: 'shejiyuanze',
						label: '设计原则',
						children: [{
							value: 'yizhi',
							label: '一致'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'zujian',
					label: '组件',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout 布局'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}, {
							value: 'slider',
							label: 'Slider 滑块'
						}, {
							value: 'time-picker',
							label: 'TimePicker 时间选择器'
						}, {
							value: 'date-picker',
							label: 'DatePicker 日期选择器'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker 日期时间选择器'
						}, {
							value: 'upload',
							label: 'Upload 上传'
						}, {
							value: 'rate',
							label: 'Rate 评分'
						}, {
							value: 'form',
							label: 'Form 表单'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}, {
							value: 'tree',
							label: 'Tree 树形控件'
						}, {
							value: 'pagination',
							label: 'Pagination 分页'
						}, {
							value: 'badge',
							label: 'Badge 标记'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}, {
							value: 'message-box',
							label: 'MessageBox 弹框'
						}, {
							value: 'notification',
							label: 'Notification 通知'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}, {
							value: 'dropdown',
							label: 'Dropdown 下拉菜单'
						}, {
							value: 'steps',
							label: 'Steps 步骤条'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}, {
							value: 'card',
							label: 'Card 卡片'
						}, {
							value: 'carousel',
							label: 'Carousel 走马灯'
						}, {
							value: 'collapse',
							label: 'Collapse 折叠面板'
						}]
					}]
				}, {
					value: 'ziyuan',
					label: '资源',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}],
				selectedOptions: [],
				selectedOptions2: [],
				value4: "",
				pickerOptions1: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value5: '',
				value6: '',
				form: {
					birthdayName: ''
				},
				value10: '',
				value11: '',
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}]

			}
		},
		mounted: function() {

		},
		methods: {

			changeValue(value) {
				// console.log(value);
				let obj = {};
				obj = this.options.find((item) => {
					return item.value === value;
				});
				this.inputfill = obj.label
			},
			handleChange(value) {
				let _this = this
				_this.value4 = value

			},
			dateChangebirthday(val) {
				let _this = this
				_this.value10 = val
				console.log(val);
				this.form.birthdayName = val;
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			},
			//			  formatTooltip(val) {
			//      return val / 100;
			//   },
			go_chaxun: function() {
				let _this = this
				console.log(_this.value + "*" + _this.inputfill + "*" + _this.nowvalue + "*" + _this.checked + "*" + _this.value1 + "*" + _this.value2 + "*" + _this.value3 + "*" + _this.value4 + "*" + _this.value5 + "*" + "*" + _this.value10)
				//				let _this = this
				//				//				console.log(_this.inputfill)
				//				//				var params = new URLSearchParams();
				//				//				params.append('type', _this.valuefill); //你要传给后台的参数值 key/value
				//				//				params.append('postid', _this.inputfill);
				//				//				console.log(_this.valuefill + "*" + _this.inputfill)
				//
				//				axios.get('http://www.kuaidi100.com/query?type=yuantong&postid=11111111111')
				//					.then(function(response) {
				//						console.log(response);
				//					})
				//					.catch(function(error) {
				//						console.log(error);
				//					});
			}

		}
	}
</script>

<style lang="less" scope>
	.new_less {
		width: 100%;
		height: auto;
		overflow: hidden;
		.grid-content {
			width: 30%;
			height: 30px;
		}
	}
	
	.div_tatol>div {
		height: 45px !important;
	}
	
	.div_tatol .div_active {
		height: auto !important;
	}
</style>