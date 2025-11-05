# Render.com Environment Variables Kurulumu

## 🔧 Render Dashboard'da API Key Ekleme

### 1. Render.com'a Git
1. https://render.com → Dashboard
2. **mottoni** servisini seç
3. **Environment** sekmesine tıkla

### 2. Environment Variables Ekle

#### OpenAI API
```
Name: OPENAI_API_KEY
Value: your_openai_api_key_here
```

#### Telegram Bot
```
Name: TELEGRAM_BOT_TOKEN  
Value: 8382705172:AAH2rzbqKvvIcUMq8Miuv-nBRn8f9COHNOo
```

#### TurboSMTP Email
```
Name: TURBO_SMTP_KEY
Value: 6fa30cdf7f

Name: TURBO_SMTP_SECRET
Value: EXRF76GehtjfQMLCgvS4
```

### 3. Servisi Yeniden Başlat
1. **Manual Deploy** → **Deploy Latest Commit**
2. Servis yeniden başlatılacak
3. Environment variables aktif olacak

## 🤖 N8N'de Bot Kurulumu

### 1. N8N'e Giriş
```
URL: https://mottoni.onrender.com
Kullanıcı: admin
Şifre: Bsmh.?2026
```

### 2. Telegram Credential Ekleme
1. **Credentials** → **Add Credential**
2. **Telegram** seç
3. **Access Token**: `8382705172:AAH2rzbqKvvIcUMq8Miuv-nBRn8f9COHNOo`
4. **Test Connection** → **Save**

### 3. OpenAI Credential Ekleme  
1. **Add Credential** → **OpenAI**
2. **API Key**: Environment variable'dan otomatik alınacak
3. **Test Connection** → **Save**

### 4. Workflow Aktifleştirme
1. **Workflows** → **MOTTONI AI Telegram Bot**
2. **Activate** butonuna tıkla
3. Workflow aktif olacak

## ✅ Test Etme

### 1. Bot'u Test Et
1. Telegram'da: https://t.me/mottoni_ai_bot
2. **START** butonuna bas
3. Mesaj gönder: "Merhaba"

### 2. Teknik Soru Test
```
Soru: "50x70 format teknik özellikleri nedir?"
Beklenen Cevap: GEEN 2ND GENERATION detayları
```

### 3. Maliyet Soru Test
```
Soru: "Sıcak folyo ile maliyet farkı nedir?"
Beklenen Cevap: %62 avantaj açıklaması
```

## 🔒 Güvenlik Notları

- API key'ler sadece Render Environment Variables'da
- GitHub'a asla API key push etmeyin
- Bot token'ı güvenli tutun
- N8N credential'ları şifrelenmiş saklanır

Bu kurulum ile bot hazır ve güvenli!