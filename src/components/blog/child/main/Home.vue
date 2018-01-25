<template>
	<div class="home">
		<div class="left">
			<div class="myself">
				<div class="myself-model">
					<div class="myself-img">
						<img src="">					
					</div>
					<div class="myself-infor">
						<ul>
							<li v-for="i in 5">{{i}}</li>
						</ul>
					</div>
				</div>			
			</div>
			<div class="tag">
				<div class="tag-model">
					<el-tag v-for="i in 11" >{{i}}</el-tag>
				</div>				
			</div>
		</div>
		<div class="right">
			<div class="article-list">
				<div class="article-model"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.home{
		
		width:100%;
		/*height:80%;*/
		
	}
	
	.left{		
		float:left;
		width:25%;
		margin-right:2%;
		border-right: solid 1px #e6e6e6;
	}
	
	.right{
		float:left;
		width:72%;
		border-left: solid 1px #e6e6e6;
	}
	
	.myself{
		width:100%;
		height:300px;
		/*background-color: bisque;*/
	}
	
	.tag{
		width:100%;
		height:300px;		
	}
	
	.tag-model{
		width:90%;
		height:90%;
		margin:5%;
		border:solid 1px #e6e6e6;
	}
	
	.myself-model{
		width:90%;
		height:90%;
		margin:5%;
		border:solid 1px #e6e6e6;
	}
	
	.article-list{
		
		border:solid 1px #e6e6e6;
		width:90%;
		margin-top:5%;
		margin-left:5%;
		margin-right:5%;
		background-color: antiquewhite;

	}
	
	.article-model{
		
			}
	
	ul,li{
		list-style: none;
	}
	
</style>