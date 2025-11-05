# MOTTONI AI Telegram Bot Kurulum Rehberi

## 📱 1. Telegram Bot Oluşturma (Başlangıç)

### Adım 1: BotFather'a Git
1. Telegram uygulamasını aç
2. Arama çubuğuna **@BotFather** yaz
3. **BotFather** resmi botuna tıkla (mavi tik işaretli)
4. **START** butonuna bas

### Adım 2: Yeni Bot Oluştur
1. `/newbot` komutunu gönder
2. Bot adını gir: **MOTTONI AI Assistant**
3. Bot kullanıcı adını gir: **mottoni_ai_bot** (benzersiz olmalı)
4. **Token'ı kaydet**: `8382705172:AAH2rzbqKvvIcUMq8Miuv-nBRn8f9COHNOo`
5. **Bot linki**: https://t.me/mottoni_ai_bot

### Adım 3: Bot Ayarları
```
/setdescription - Bot açıklaması ekle
/setabouttext - Hakkında metni ekle
/setuserpic - Profil fotoğrafı ekle
```

## 🔧 2. N8N'de Bot Kurulumu

### Adım 1: Credentials Ekleme
1. N8N'e git: https://mottoni.onrender.com
2. **Credentials** → **Add Credential**
3. **Telegram** seç
4. **Access Token**: Bot token'ını yapıştır
5. **Save** et

### Adım 2: OpenAI Credential
1. **Add Credential** → **OpenAI**
2. **API Key**: `YOUR_OPENAI_API_KEY_HERE`
3. **Save** et

### Adım 3: Workflow İçe Aktarma
1. **Workflows** → **Import from File**
2. `mottoni-ai-telegram-bot.json` dosyasını seç
3. **Import** et

## ⚙️ 3. Güvenli API Ayarları

### N8N Environment Variables (Render'da)
```
OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE
TURBO_SMTP_KEY=6fa30cdf7f
TURBO_SMTP_SECRET=EXRF76GehtjfQMLCgvS4
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
```

### Render.com'da Environment Variables Ekleme
1. Render Dashboard'a git
2. **mottoni** servisini seç
3. **Environment** sekmesine git
4. **Add Environment Variable** tıkla
5. Yukarıdaki değişkenleri ekle

## 🤖 4. Bot Testi

### Temel Test
1. Telegram'da botunu bul: **@mottoni_ai_bot**
2. `/start` gönder
3. Bir soru sor: "50x70 format hızı nedir?"
4. AI cevabını kontrol et

### Test Soruları
```
- "MOTTONI makinesi hakkında bilgi ver"
- "Maliyet avantajı nedir?"
- "Hangi formatlar var?"
- "Kurulum nasıl yapılır?"
```

## 📊 5. Google Sheets Hafıza (Opsiyonel)

### Sheets Oluşturma
1. Google Sheets'e git
2. Yeni tablo oluştur: **MOTTONI AI Hafıza**
3. Sütunlar:
   - Tarih
   - Kullanıcı
   - Soru  
   - Cevap
   - Kategori

### N8N Google Sheets Credential
1. **Credentials** → **Google Sheets API**
2. **Service Account** yöntemi kullan
3. JSON key dosyasını yükle

## 🔒 6. Güvenlik Ayarları

### Bot Gizliliği
```
/setprivacy - Grup mesajlarını sadece mention'da oku
/setjoingroups - Gruplara eklemeyi kısıtla
```

### Rate Limiting (N8N'de)
- Kullanıcı başına dakikada 10 mesaj
- Saatte 100 mesaj sınırı

## 🚀 7. Bot Komutları

### Kullanıcı Komutları
```
/start - Bot'u başlat
/help - Yardım menüsü
/info - MOTTONI hakkında
/formats - Format bilgileri
/price - Fiyat talebi
/contact - İletişim
```

### BotFather'da Komut Ayarlama
```
/setcommands
start - Bot'u başlat
help - Yardım al
info - MOTTONI hakkında
formats - Makine formatları
price - Fiyat bilgisi
contact - İletişim bilgileri
```

## 🔧 8. Sorun Giderme

### Bot Cevap Vermiyor
1. N8N workflow'unun aktif olduğunu kontrol et
2. Telegram credential'ının doğru olduğunu kontrol et
3. OpenAI API key'inin çalıştığını test et

### Webhook Hatası
1. Render servisinin çalıştığını kontrol et
2. WEBHOOK_URL'nin doğru olduğunu kontrol et
3. N8N loglarını kontrol et

### API Limit Hatası
1. OpenAI kullanım limitini kontrol et
2. Rate limiting ayarlarını kontrol et

## 📱 9. Bot Kullanımı

### Örnek Konuşma
```
Kullanıcı: Merhaba
Bot: Merhaba! Ben MOTTONI AI asistanıyım. Soğuk folyo makineleri hakkında sorularınızı yanıtlayabilirim.

Kullanıcı: 70x100 format özellikleri nedir?
Bot: MOTTONI® GEEN 2ND GENERATION 70x100cm:
- Boyut: 2.290x900x1.200mm
- Ağırlık: 650kg  
- Güç: 11kw
- Hız: 12.000 sayfa/saat
- Folyo genişliği: 100-1.020mm
Hangi üretim hacmi planlıyorsunuz?
```

## ✅ 10. Kurulum Kontrol Listesi

- [ ] Telegram bot oluşturuldu
- [ ] Bot token alındı
- [ ] N8N'de Telegram credential eklendi
- [ ] OpenAI credential eklendi
- [ ] Workflow içe aktarıldı
- [ ] Environment variables ayarlandı
- [ ] Bot test edildi
- [ ] Komutlar ayarlandı
- [ ] Güvenlik ayarları yapıldı

Bu rehberi takip ederek MOTTONI AI Telegram Bot'unuz hazır olacak!