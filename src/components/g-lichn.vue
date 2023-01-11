<template>
	<div id="/lichn" class="container-tab">
		<div class="header-line">

<div class="header-logo">
	<a href="#/">
	<img src="./logo.png"></a> 
    <a class="nav-item" href="https://github.com/stario1/zetris_project1">GitHub</a>
     </div>
</div>
<h1 id="/lk" class="lichn-text">Личный кабинет</h1>
<div class="block">
 <div class="avatar">
    <img src="./ava.jpg" alt=""
    height="400px">
     </div>
    <div class="text-block">
    <h2>Никнейм: Sanek_2003 <br> Кол-во очков за всё время: 1567 <br> Часов в игре: 20</h2>
</div>
</div>



 </div>
 </template>

 <script>
    export default {
        name: 'gLichn',   
        components: {  
        },
        props: {},
        data() {
            return{}
        },
        computed: {},
    }
</script>

<style>
    .container-tab{
        height:100vh;
    }
    .header-line {
        height: 100px;
        width: 1830x;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;  
        background-color: #d9d9d9;  
    }
    .block{
        display: flex;
    }
    .lichn-text{
        color: black;
        font-size: 70px;
    }
    .avatar{
     margin-left: 100px;
    }
    .text-block{
        margin-left: 250px;
        font-size: 30px;
        text-align: left;
    }
</style>