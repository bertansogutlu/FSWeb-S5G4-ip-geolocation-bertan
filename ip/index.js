//axios import buraya gelecek
import axios from 'axios';
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
		.then(function (response) {
			return response.data
		})
		.then(function (a) {
			benimIP = a
		});
}
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
	(tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
	https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
	DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
	</div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

//https://apis.ergineer.com/ipgeoapi/81.214.106.54

function cardCreater(obj) {
	return `<div class="card">
	<img src=${obj.data["ülkebayrağı"]} />
	<div class="card-info">
		<h3 class="ip">${obj.data["sorgu"]}</h3>
		<p class="ulke">${obj.data["ülkeKodu"]}</p>
		<p>Enlem: ${obj.data["enlem"]} Boylam: ${obj.data["boylam"]}</p>
		<p>Şehir: ${obj.data["bölgeAdı"]}</p>
		<p>Saat dilimi: ${obj.data["saatdilimi"]}</p>
		<p>Para birimi: ${obj.data["parabirimi"]}</p>
		<p>ISP: ${obj.data["isp"]}</p>
	</div>
	</div>`;
}

async function getUser() {
	try {
		const response = await axios.get('https://apis.ergineer.com/ipgeoapi/81.214.106.54');
		const userCard = cardCreater(response);
		const card = document.querySelector(".cards");
		card.insertAdjacentHTML("beforeend", userCard);
	} catch (error) {
		console.error(error);
	}
}

getUser()




function cardCreater2(obj) {
	return `<div class="card">
	<img src=${'https://www.odamax.com/omag/wp-content/uploads/2022/05/antalya-kaleici-800x582.jpg'} />
	<div class="card-info">
		<h3 class="ip">${obj.data.ip}</h3>
		<p class="ulke">${obj.data.country}</p>
		<p>Enlem: ${obj.data.loc.slice(0, 7)} Boylam: ${obj.data.loc.slice(8)}</p>
		<p>Şehir: ${obj.data.region}</p>
		<p>Saat dilimi: ${obj.data.timezone}</p>
		<p>Para birimi: ${"TL"}</p>
		<p>ISP: ${obj.data.org}</p>
	</div>
	</div>`;
}

async function getUser2() {
	try {
		const response = await axios.get('https://ipinfo.io/81.214.106.54?token=1c9664f8f86f79');
		console.log(response);
		const userCard = cardCreater2(response);
		const card = document.querySelector(".cards");
		card.insertAdjacentHTML("beforeend", userCard);
	} catch (error) {
		console.log(error);
	}
}

getUser2()

function errorCreate(obj) {
	return `<div class="card">
	<img src=${'https://miro.medium.com/max/1400/1*52_FzWNt0rWi6X-nUF0OBw.webp'} />
	<div class="card-info">
		<h3 class="ip">${obj.code}</h3>
		<p>${obj.message}</p>
	</div>
	</div>`;
}

async function getUser3() {
	try {
		const response = await axios.get('https://ipinfo.io/81.214.106.54?token=1c9664f8f86f79abc');
		const userCard = cardCreater2(response);
		const card = document.querySelector(".cards");
		card.insertAdjacentHTML("beforeend", userCard);
	} catch (error) {
		console.log(error)
		const errorMessage = errorCreate(error);
		const card = document.querySelector(".cards");
		card.insertAdjacentHTML("beforeend", errorMessage);
	}
}

getUser3()