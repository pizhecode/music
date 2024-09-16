<template>
  <div>
    <section class="error_section">
      <p class="error_section_subtitle">Thanks. You just broke it all !</p>
      <h1 ref="errorTitle" class="error_title">
        <p>404</p>404
      </h1>
      <div class="btn" @click="btnGoToIndex()">点击返回首页</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 确保导入了 useRouter
const router = useRouter(); // 引入 useRouter
const btnGoToIndex = () => {router.push('/index');};
const errorTitle = ref<HTMLElement | null>(null);
onMounted(() => {
  document.onmousemove = function(e: MouseEvent) {
    let x = e.pageX - window.innerWidth / 2;
    let y = e.pageY - window.innerHeight / 2;
    if (errorTitle.value) {
      errorTitle.value.style.setProperty('--x', x + 'px');
      errorTitle.value.style.setProperty('--y', y + 'px');
    }
  };
  if (errorTitle.value) {
    errorTitle.value.onmousemove = function(e: MouseEvent) {
      let x = e.pageX - window.innerWidth / 2;
      let y = e.pageY - window.innerHeight / 2;
      let rad = Math.atan2(y, x).toFixed(2); 
      let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/10); 
      let x_shadow = Math.round(length * Math.cos(Number(rad)));
      let y_shadow = Math.round(length * Math.sin(Number(rad)));
      if (errorTitle.value) {
        errorTitle.value.style.setProperty('--x-shadow', -x_shadow + 'px');
        errorTitle.value.style.setProperty('--y-shadow', -y_shadow + 'px');
      }
    };
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #32C983;
$secondary-color: #25F193;
$black: #343434;
$dark-black: #1A1A1A;
$gradient: linear-gradient(to top, $primary-color, $secondary-color);
$black-gradient: linear-gradient(-225deg, $dark-black, $black);
*{margin:0;padding:0;}
a{
  text-decoration: none;
}
body{
  font-family: 'Source Sans Pro', sans-serif;
	font-weight: 600;
	color: $black;
}
.error_section{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	background-image: $black-gradient;
	&_subtitle{
		color: $secondary-color;
		text-transform: uppercase;
		letter-spacing: 5pt;
		font-weight: 500;
		font-size: 0.8rem;
		margin-bottom: -5em;
	}
	.error_title{
		--x-shadow: 0;
		--y-shadow: 0;
		--x:50%;
		--y:50%;
		font-size: 15rem;
		transition: all 0.2s ease;
		position: relative;
    padding: 2rem;
		&:hover{
			transition: all 0.2s ease;
			text-shadow: var(--x-shadow) var(--y-shadow) 10px $dark-black;
		}
		  p{
			position: absolute;
			top: 2rem;
			left: 2rem;
			background-image: radial-gradient(circle closest-side, rgba(white, 0.05), transparent);
			background-position: var(--x) var(--y);
			background-repeat: no-repeat;
			text-shadow: none; 
			/* 其他样式 */
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;  
			transition: all 0.1s ease;
		  }
	}
}
.btn{
	padding: 0.8em 1.5em;
	border-radius: 99999px;
	background-image: $gradient;
	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.2), inset 0px -2px 5px 0px rgba(0,0,0,0.2);
	border: none;
	cursor: pointer;
	text-shadow: 0px 1px $black;
	color: white;
	text-transform: uppercase;
	letter-spacing: 1.5pt;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 0.8rem;
	font-weight: 700;
	transition: ease-out 0.2s all;
	&:hover{
		text-shadow: 0px 1px 1px $black;
		transform: translateY(-5px);
		box-shadow: 0px 4px 15px 2px rgba(0,0,0,0.1), inset 0px -3px 7px 0px rgba(0,0,0,0.2);
		transition: ease-out 0.2s all;
	}
}
</style>
