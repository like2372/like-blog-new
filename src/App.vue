<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		text-align: center;
		color: #2c3e50;
		width:100%;
		height:100%;
	}
	
	body,
	html {
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
	}
</style>