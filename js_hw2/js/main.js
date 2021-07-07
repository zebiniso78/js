alert("Sayohat Agentligiga Xush Kelibsiz!!! ")
alert("Sayohat davomidagi harajatlat ro'yxati:\nBorish-kelish Samolyot Bileti - 500$ \nMehmonxona to'lovi - 250$ \nMuzey va ko'ngilochar joylar uchun - 120Euro ")
alert("Qo'shimcha Eslatma:\n1$ - 9433.34 so'm \n1Euro - 10354.03 so'm ")

var elParagraphOne=document.querySelector(`.paragrahpPositive`)
var elParagraphTwo=document.querySelector(`.paragrahpNegative`)
var firstName=prompt("Ismingizni kiriting: ");
var money=Number(prompt(`${firstName} o'zingizda bor summa miqdorini kiriting (so'mda): `))
var usd=9433.34
var euro=10354.03
var totalExpenses=(500*usd)+(250*usd)+(120*euro)

if(money >= totalExpenses) {
    elParagraphOne.textContent =` Oq yo'l ${firstName}. Sayohatingiz maroqli o'tsin!!!`
}
else {
    elParagraphTwo.textContent =` ${firstName} ozroq sabr qilishga to'g'ri kelar ekan...`
}
