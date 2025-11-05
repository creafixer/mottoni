# MOTTONI AI Advanced Bot Kurulum Rehberi

## 🧠 Gelişmiş Özellikler

### Hafızalı Sistem
- **Soru-Cevap Hafızası** - Her etkileşim Google Sheets'te saklanır
- **Kullanıcı Profilleri** - Kişisel geçmiş takibi
- **Kategori Bazlı Hafıza** - Akıllı sınıflandırma

### Öğrenen AI
- **Kendi Cevaplarını Analiz Eder** - Sürekli iyileştirme
- **Yeni Bilgi Çıkarımı** - Konuşmalardan öğrenme
- **Trend Analizi** - Sık sorulan konular
- **Bilgi Güncelleme** - Otomatik kaynak taraması

### 6 Ana Kategori
1. **Teknik Özellikler** - GEEN 2ND GENERATION spesifikasyonları
2. **Maliyet Analizi** - %62 tasarruf hesaplamaları
3. **Kurulum/Eğitim** - Montaj ve operatör eğitimi
4. **Satış/Teklif** - Ürün önerileri ve fiyatlandırma
5. **Sorun Giderme** - Teknik problemler ve çözümler
6. **Pazarlama/Rekabet** - Avantajlar ve konumlandırma

## 🔧 Kurulum Adımları

### 1. Google Sheets Hazırla

#### Hafıza Tablosu:
```
Tablo Adı: SORU_CEVAP_HAFIZA
Sütunlar: Tarih, KullaniciID, KullaniciAdi, Soru, AICevap, Kategori, Durum
```

#### Öğrenme Tablosu:
```
Tablo Adı: OGRENME_ANALIZI  
Sütunlar: Tarih, KullaniciID, KullaniciAdi, SoruKategorisi, YeniBilgi, Oneriler, GuncellemeGerekli, MusteriProfili, TamAnaliz
```

### 2. Environment Variables Ekle

Render.com Dashboard'da:
```
GOOGLE_SHEETS_MEMORY_ID=your_memory_sheet_id
GOOGLE_SHEETS_LEARNING_ID=your_learning_sheet_id
TELEGRAM_BOT_TOKEN=8382705172:AAH2rzbqKvvIcUMq8Miuv-nBRn8f9COHNOo
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. N8N'de Credentials Ekle

#### Google Sheets Credential:
1. **Credentials** → **Add Credential** → **Google Sheets OAuth2 API**
2. Google hesabınızla bağlantı kurun
3. **Test Connection** → **Save**

#### Telegram & OpenAI:
- Daha önce eklediğiniz credential'ları kullanın

### 4. Workflow Import Et
1. **Workflows** → **Import from File**
2. `mottoni-ai-advanced-bot.json` dosyasını seçin
3. **Import** → **Save**

### 5. Workflow'u Aktifleştir
1. **Inactive** → **Active**
2. **Save**

## 🤖 Bot Yetenekleri

### Akıllı Bilgi Bankası
- **GEEN 2ND GENERATION** teknik özellikler
- **%62 maliyet avantajı** hesaplamaları
- **12.000 sayfa/saat** hız bilgileri
- **Malzeme maliyetleri** (ZELLER-GMELIN, RELCO)

### Dinamik Kategorileme
```javascript
// Otomatik kategori belirleme
if (soru.includes('teknik')) → 'Teknik Özellikler'
if (soru.includes('maliyet')) → 'Maliyet Analizi'  
if (soru.includes('kurulum')) → 'Kurulum/Eğitim'
```

### Öğrenme Algoritması
```
1. Soru-cevap analizi
2. Yeni bilgi çıkarımı
3. Kategori doğrulama
4. Müşteri profil analizi
5. Gelecek öneriler
```

## 📊 Hafıza Sistemi

### Soru-Cevap Takibi
- Her etkileşim kaydedilir
- Kullanıcı bazlı geçmiş
- Kategori bazlı istatistikler
- Cevap kalitesi analizi

### Öğrenme Kaydı
- Yeni öğrenilen bilgiler
- Güncelleme gereksinimleri
- Müşteri profil analizleri
- Trend raporları

## 🎯 Test Senaryoları

### Teknik Soru:
```
Kullanıcı: "70x100 format hızı nedir?"
Bot: "MOTTONI® GEEN 2ND GENERATION 70x100cm formatı maksimum 12.000 sayfa/saat hızla çalışır..."
Hafıza: Kategori → Teknik Özellikler
```

### Maliyet Sorusu:
```
Kullanıcı: "Sıcak folyo ile farkı?"
Bot: "Sıcak folyo 1.155€ maliyetken, MOTTONI soğuk folyo sadece 712€. %62 maliyet avantajı..."
Hafıza: Kategori → Maliyet Analizi
```

### Öğrenme Örneği:
```
AI Analizi: "Müşteri hız konusunda endişeli, rekabet avantajlarını daha çok vurgula"
Güncelleme: "Gelecek hız sorularında 12.000 sayfa/saat rakamını öne çıkar"
```

Bu gelişmiş sistem sayesinde **gerçek bir MOTTONI uzmanı** gibi davranan, **sürekli öğrenen** ve **hafızası olan** bir AI asistanınız olacak!