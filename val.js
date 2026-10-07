// ------------ Validation Joi ------------- //

// Joy (Joi) — bu Node.js (va JavaScript) uchun ma'lumotlarni tekshirish va validatsiya qilish uchun eng mashhur va kuchli kutubxona (library) hisoblanadi

// U asosan foydalanuvchidan kelayotgan ma'lumotlarni (masalan, API so'rovlari: req.body, req.query) to'g'riligini, xavfsizligini va talablarga javob berishini tekshirish uchun ishlatiladi.


//  Joi nima uchun kerak? :

// 1. Xavfsizlik: API'ga noto'g'ri yoki zararli ma'lumotlar kirib kelishining oldini oladi.

// 2. Ma'lumotlar butunligi: Ma'lumotlar bazasiga (DB) faqat aniq formatdagi ma'lumotlar yozilishini ta'minlaydi.

// 3. Xatolarni oson boshqarish: Noto'g'ri ma'lumot yuborilganda, foydalanuvchiga tushunarli xato xabarini qaytaradi.

//  Joi Sintaksisi va Ishlatilishi 
// Joi-ni ishlatish 3 ta asosiy bosqichdan iborat:

// 1. Sxema (Schema) yaratish — ma'lumot qanday formatda bo'lishini belgilash.

// 2. Ma'lumotni tekshirish — schema.validate() funksiyasi orqali.

// 3. Natijani qayta ishlash — xatolik bor yoki yo'qligini tekshirish.


// Asosiy validatsiya qoidalari (Metodlar)

// Joi juda ko'p turdagi ma'lumotlarni tekshira oladi:

// Matnlar uchun (Joi.string()):

// 1. .min(limit) / .max(limit) — belgilangan uzunlik chegarasi.

// 2. .email() — email formatini tekshirish.

// 3. .required() — maydon to'ldirilishi shartligini bildiradi.

// Sonlar uchun (Joi.number()):

// 1. .integer() — faqat butun sonlar.

// 2. .positive() / .negative() — musbat yoki manfiy sonlar.

// Massiv va Obyektlar uchun (Joi.array(), Joi.object()):

// .items(Joi.string()) — massiv ichidagi elementlar turini tekshirish.

