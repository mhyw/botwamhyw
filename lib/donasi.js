exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `{ *MENU DONASI ${BotName}* }
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI


🗓 ${tampilTanggal}
⏰ ${tampilWaktu}


KALIAN BISA DONASI MENGGUNAKAN
   
🚩 PULSA: 082338122626
🚩DANA : 082338122626
🚩 GOPAY : 082338122626

📺 YOUTUBE : mhyw


⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
FOLLOW INSTAGRAM SAYA
${instagram}

TELEGRAM : ${telegram}

`
}
