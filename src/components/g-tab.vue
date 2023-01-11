<template>
	<div id="/tab" class="container-tab">
		<div class="header-line">

<div class="header-logo">
	<img src="./logo.png">
</div>

<div class="nav">
	<a class="nav-item" href="#/tab">Рейтинг игроков</a>
	<a class="nav-item" href="@"> FAQ</a>
</div>

<a href="@"><button class="button">Войти</button></a>


</div>
    <div class="tab-text">
        <h1  class="tab-text-top">Рейтинг</h1>
        <h2 class="tab-text-bottom">ТОП-30 игроков</h2>
    </div>
    <div class="gTab">
    <table style="	border: 3px solid black; border-collapse: collapse;">
	<thead>
		<tr>
			<td style="	border: 3px solid black;">Никнейм</td>
			<td style="	border: 3px solid black;" >Место в ТОПе</td>
			<td style="	border: 3px solid black;">Время в игре</td>
			<td style="	border: 3px solid black;">Очки</td>
		</tr>
	</thead>
	<tr>
		<td>Alejandro</td>
		<td>1</td>
		<td>91290</td>
		<td>700000</td>
	</tr>
	<tr>
		<td>zeikyn</td>
		<td>2</td>
		<td>78550</td>
		<td>677890</td>
	</tr>
	<tr>
		<td>pokeshmon</td>
		<td>3</td>
		<td>75950</td>
		<td>675000</td>
	</tr>
	<tr>
		<td>BOYARIN</td>
		<td>4</td>
		<td>62760</td>
		<td>627890</td>
	</tr>
	<tr>
		<td>NikZ</td>
		<td>5</td>
		<td>62690</td>
		<td>677890</td>
	</tr>
	<tr>
		<td>thelinx</td>
		<td>6</td>
		<td>60730</td>
		<td>6555325</td>
	</tr>
	<tr>
		<td>Mexoc</td>
		<td>7</td>
		<td>58180</td>
		<td>6714882</td>
	</tr>
	<tr>
		<td>keco185</td>
		<td>8</td>
		<td>58120</td>
		<td>5377792</td>
	</tr>
	<tr>
		<td>Bobillho</td>
		<td>9</td>
		<td>57280</td>
		<td>5200931</td>
	</tr>
	<tr>
		<td>karnaj</td>
		<td>10</td>
		<td>55700</td>
		<td>5200123</td>
	</tr>
	<tr>
		<td>Kosatka</td>
		<td>11</td>
		<td>54010</td>
		<td>5198725</td>
	</tr>
	<tr>
		<td>nikolskiy24</td>
		<td>12</td>
		<td>52390</td>
		<td>5008482</td>
	</tr>
	<tr>
		<td>Faer_Killer</td>
		<td>13</td>
		<td>49660</td>
		<td>5007241</td>
	</tr>
	<tr>
		<td>A_n_t_o_n</td>
		<td>14</td>
		<td>47340</td>
		<td>5000000</td>
	</tr>
	<tr>
		<td>Epik</td>
		<td>15</td>
		<td>47310</td>
		<td>4987462</td>
	</tr>
	<tr>
		<td>pavel555</td>
		<td>16</td>
		<td>47280</td>
		<td>4982613</td>
	</tr>
	<tr>
		<td>ottoblotto</td>
		<td>17</td>
		<td>45270</td>
		<td>4976442</td>
	</tr>
	<tr>
		<td>None</td>
		<td>18</td>
		<td>44200</td>
		<td>4599732</td>
	</tr>
	<tr>
		<td>mix55</td>
		<td>19</td>
		<td>43560</td>
		<td>4415892</td>
	</tr>
	<tr>
		<td>opa225</td>
		<td>20</td>
		<td>43010</td>
		<td>4318527</td>
	</tr>
	<tr>
		<td>Vovanchik</td>
		<td>21</td>
		<td>41170</td>
		<td>4220198</td>
	</tr>
	<tr>
		<td>ender007HD</td>
		<td>22</td>
		<td>40960</td>
		<td>4198749</td>
	</tr>
	<tr>
		<td>akkaunt</td>
		<td>23</td>
		<td>39780</td>
		<td>4100003</td>
	</tr>
	<tr>
		<td>PashaJ</td>
		<td>24</td>
		<td>39190</td>
		<td>3912635</td>
	</tr>
	<tr>
		<td>lololowhka21</td>
		<td>25</td>
		<td>39050</td>
		<td>3788980</td>
	</tr>
	<tr>
		<td>Giperfox</td>
		<td>26</td>
		<td>38010</td>
		<td>3620262</td>
	</tr>
	<tr>
		<td>uikk</td>
		<td>27</td>
		<td>36900</td>
		<td>3599448</td>
	</tr>
	<tr>
		<td>mad78</td>
		<td>28</td>
		<td>36850</td>
		<td>3381268</td>
	</tr>
	<tr>
		<td>Right</td>
		<td>29</td>
		<td>36840</td>
		<td>3350000</td>
	</tr>
	<tr>
		<td>lololowhka</td>
		<td>30</td>
		<td>36390</td>
		<td>2009778</td>
	</tr>
	<tr>
		<td></td>
	</tr>
</table>
</div>
</div>
</template>

<script>
    export default {
        name: 'gTab',   
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
	background-color: rgb(221, 221, 221);
}
.gTab{
	margin-left:35%;
	font-size: 25px;
	
}

</style>