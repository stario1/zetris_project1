<template>
    <div class="gHeader">
            <div class="header-line">

                <div class="header-logo">
                    <img src="./logo.png">
                </div>

                <div class="nav">
                    <a class="nav-item" href="@">Рейтинг игроков</a>
                    <a class="nav-item" href="@">FAQ</a>
                </div>

                <a href="#sign"><button class="button">Войти</button></a>

              
            </div>

            <div class="calltoaction">
                <div class="btn-text">
                        <h1>Готов показать всем, на что ты способен?</h1>
                        <p>Зарегистрируйся и брось вызов игрокам со всего мира!</p> 
                    </div>
                    <div class="btn">
                        <a href="#registration"><button class="button">Регистрация</button></a>
                    </div>
            </div>


        
    </div>
</template>


<script>
    export default {
        name: 'vHeader',   
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
    .gHeader {
        background-image: url(bg.jpg);
        height: 100vh;
        margin:0;
        background-repeat: no-repeat;
        background-position-y: bottom;
        background-attachment: fixed;
        background-color: #000000;
    }

    .header-line {
        width: 1920px;
        display: flex;
        align-items: center;
        justify-content: space-around;  
        background-color: #d9d9d9;  
    }
    .nav-item {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        font-size: 21px;
        margin-right: 25px;
        transition: color 0.2s linear;
    }
    
    .nav-item:hover {
        color: #b10429;
    
    }
    .button {
        background-color: #c53d5b;
        color: #fff;
        margin: 20px;
        text-decoration: none;
        padding: 24px 24px;
        font-weight: 700;
        transition: background-color 0.35s linear;
        border-radius: 15px;
        border-width: 0.5px;
        font-size: 21px;
    }
    .button:hover {
        background-color: #5e0f20;
    }
    .btn-text {
        color: #d9d9d9;
        margin-left: auto;
        margin-right: auto;
        font-weight: 500; 
        font-size: 21px;       
    }
    .calltoaction {
        margin-left: 200px;
        margin-top: 150px;
    }
</style>


