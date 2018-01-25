<template>
	<div class="blog">
		<div class="head">
			<div class="title-img">LIKE BLOG</div>
			<div class="list-bt">			
				<el-menu :default-active="activeIndex" router="true"  mode="horizontal" class="el-menu-demo nav"  @select="handleSelect">				
					<el-menu-item class="right bfont" index="about">关于</el-menu-item>
					<el-menu-item class="right bfont" index="archive">归档</el-menu-item>
					<el-menu-item class="right bfont" index="home">首页</el-menu-item>							
				</el-menu>								
			</div>		
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'blog',
		data() {
			return {
				
			}
		},
		methods:{
			handleSelect(key,keyPath){
				alert(key+" "+keyPath);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.blog{	
		width:95%;
		margin:0 auto;
		height:100%;
	}
	
	.head{		
		width:100%;
		height:80px;
		display: inline-block;		
	}
	
	.foot{
		position:realtive;
		width:100%;
		height:100%;			
	}
	

	.list-bt{
		width:70%;
		height:100%;
		float:right;
	}
	
	.title-img{
		line-height:80px;
		float:left;
		width:30%;
		height:100%;
		font-size:200%;
		color:black;	
		border-bottom: solid 1px #e6e6e6;
			
	}
	
	.right{
		float:right;
	}
	
	.nav{
		line-height:80px;
		height:100%;
		
	}
	
	.bfont{
		line-height:80px;
	}
	
	
</style>