<template>
	<div class="now_child">
		
       	 <div class="now_child1">
			 <button @click="increment1">+</button>
	       	 <button @click="decrement1">-</button>
	       	 <button >{{numchild}}</button>
       	 </div>
	</div>
</template>

<script>
	export default{
		props:['numchild'],
		data(){
			return{
				numchild:2244
			}
		},
		mounted: function() {
	
		},
		methods:{
			
			  increment1:function(){
				let _this=this
				_this.$emit('clickadd')
			},
			  decrement1:function(){
                let _this=this
				_this.$emit('clickreduce')
            }
		}
	}
</script>

<style lang="less" scoped="">
	.now_child{
	height: 60px;
	line-height: 60px;
	.now_child1{
		float: left;
		width:150px; 
	
	&:nth-child(1){
	 width: 100px;
	}
	}
	}
</style>