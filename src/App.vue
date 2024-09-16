<template>
	<router-view />
</template>

<style>/*样式*/
	@import './myCss.css';
	html,body,#app{ height: 100%;margin: 0;padding: 0; }
	.el-card{margin-bottom:10px;}
	.el-table{margin-bottom: 15px;}
	.el-pagination{display:flex;justify-content:center;}
	
	.handleSizeChange{display:flex;justify-content: center;}
	.handleSizeChange div{display:flex;align-items:center;}
	.handleSizeChange .backpgtop{font-size:13px;color:#ccc;margin-left:10px;cursor:pointer;}
	/* /deep/ */
</style>