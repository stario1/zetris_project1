<template>
    <div class="gRegistration">

            <h1 id="/reg" class="registration-text">Страница регистрации</h1>

        <div class="registration">
            <input class="registration-elem" placeholder="Введите никнейм" type="text" />
            <input class="registration-elem" placeholder="Введите e-mail" type="email" />
            <input class="registration-elem" placeholder="Введите пароль" type="pas" />
            <select class="select-gender" name="gender">
                <option value="">Выберите пол</option>
                <option value="2">Мужчина</option>
                <option value="3">Женщина</option>
            </select>

            <div class="btn">
                <a href="#/lichn"><button class="button">Зарегистрироваться</button></a>
            </div>
        </div>
    </div>   
</template>


<script>
    export default {
        name: 'gRegistration',   
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
    .gRegistation {
        text-align: center;
    }
    .registration-text {
        text-align: center;
        font-size: 70px;
        color: #000; 
    }
    .registration {
        text-align: center;

    }
    .registration-elem {
        width: 1194px;
        height: 100px;
        margin: 32px;
        border-radius: 18px;
        border: 1px solid #000000;
        font-size: 36px;
        padding-left: 30px;
    }

    .select-gender {
        width: 1228px;
        height: 100px;
        margin: 32px;
        border-radius: 18px;
        border: 1px solid #000000;
        font-size: 36px;
        padding-left: 30px;
        
    }
    .button {
        background-color: #c53d5b;
        color: #fff;
        text-decoration: none;
        padding: 25px 25px;
        font-weight: 700;
        transition: background-color 0.35s linear;
        border-radius: 15px;
        border-width: 0.5px;
        font-size: 21px;
        margin-bottom: 50px;
    }
</style>
