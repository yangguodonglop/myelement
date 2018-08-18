<template>
	<div class="now_child">
		<div class="now_child1">
			 <button @click="increment">+</button>
	       	 <button @click="decrement">-</button>
	       	 <button>父传子{{num}}</button>
       	 </div>
    
	</div>
</template>

<script>
	export default{
		props:['num'],
		data(){
			return{
				num:222,
				numchild:2244
			}
		},
		mounted: function() {
	
		},
		methods:{
			increment:function(){
				let _this=this
				_this.num++
			},
			  decrement:function(){
                this.num--;
           }
		}
	}
</script>

<style lang="less" >
	.now_child{
	height: 60px;
	line-height: 60px;
	.now_child1{
		float: left;
		
	&:nth-child(1){
		border-right: 2px solid #42B983;
	}
	}
	}
</style>