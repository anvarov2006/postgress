//  Hashing (Xeshlash) — bu har qanday hajmdagi ma'lumotni (matn, parol, fayl) maxsus algoritm yordamida qat'iy belgilangan uzunlikdagi simvollar satriga (kodga) o'tkazish jarayonidir.

// Xeshlashning eng asosiy xususiyati — uning bir tomonlama (one-way) ekanligida. Ya'ni, xesh kaddan asl matnni qayta tiklab bo'lmaydi. Bu usul asosan parollarni xavfsiz saqlash, ma'lumotlar butunligini tekshirish (data integrity) va raqamli imzolarda ishlatiladi.

// Node.js dasturlash muhitida xeshlash uchun uning ichki crypto moduli yoki tashqi mashhur bcrypt kutubxonasidan foydalaniladi.

// 1. Node.js Ichki crypto Moduli yordamida xeshlashNode.js tarkibidagi crypto moduli SHA-256, SHA-512 kabi xavfsiz algoritmlar yordamida tezkor xesh yaratish imkonini beradi.

// 2. bcrypt kutubxonasi yordamida parollarni xeshlash (Tavsiya etiladi)crypto modulining SHA algoritmlari juda tez ishlaydi. Xakerlar "Salt" (tuz) qo'shilmagan oddiy xeshlarni tezda taxmin qilishi (Brute-force) mumkin. Parollarni saqlash uchun sanoat standarti hisoblangan bcrypt ishlatiladi. U xeshga tasodifiy simvollar ("salt") qo'shadi va jarayonni ataylab sekinlashtiradi.Tizimga o'rnatish: npm install bcrypt