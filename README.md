<!-- EY-Repo Std v1.0 -->

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Trello AI Assistant

> Trello panonuzdaki tamamlanmış görevleri yapay zeka ile analiz edin ve özetleyin.
>
> Projeyi AI Studio'da görüntüleyin: https://ai.studio/apps/drive/1_FMmNVP4djK6XyivbQO2MvZtz524E1xr

---

## Genel Bilgiler

- **Projenin Tam Adı:** `Trello AI Assistant`
- **Yazar / Sahip:** Muhammed Albayrak - [@gitmuhammedalbayrak](https://github.com/gitmuhammedalbayrak)
- **Lisans:** `MIT`
- **Doğum / Başlangıç Tarihi:** `2024`
- **Geliştirilme Durumu:** `Aktif`

## Proje Hakkında

### İlham ve Gerekçe
Bu proje, proje yönetimi süreçlerinde sıkça karşılaşılan bir zorluğa çözüm olarak doğmuştur: tamamlanan görevler üzerinden hızlı ve anlamlı raporlar oluşturmanın ve üretkenliği analiz etmenin zorluğu. Trello gibi araçlar görev takibi için harika olsa da, geçmişe dönük analizler yapmak veya "Bu hafta neler başardık?" gibi basit bir soruya anında yanıt almak genellikle manuel bir çaba gerektirir. Bu araç, bu süreci otomatikleştirmek ve yapay zeka ile daha sezgisel hale getirmek amacıyla geliştirilmiştir.

### Amaç ve Hedefler
Bu araç, kullanıcıların Trello panolarından dışa aktardıkları JSON verilerini kullanarak son tamamlanan görevler hakkında hızlıca içgörüler elde etmelerini sağlamayı hedefler. Temel amaç, yapay zeka destekli bir sohbet arayüzü üzerinden üretkenliği analiz etmeyi kolaylaştırmaktır.

### Neden Bu Proje? (Faydalar ve Potansiyel)
- **Hızlı Analiz:** Trello JSON dosyanızı yükleyerek son bir günde veya ayda tamamlanan görevleri anında filtreleyin.
- **Yapay Zeka Destekli Sohbet:** Tamamlanan görevler hakkında sorular sorun, özetler alın veya üretkenlik analizi yapın.
- **Veri Gizliliği:** Tüm işlemler tarayıcıda gerçekleşir, Trello verileriniz sunuculara gönderilmez.

---

## 🗺️ Yol Haritası

Projenin gelişim süreci ve gelecekteki hedefleri aşağıda özetlenmiştir.

- **Kısa Vadeli Hedefler (Now):**
  - Kullanıcı arayüzünü (UI/UX) iyileştirmek ve daha akıcı bir deneyim sunmak.
  - Farklı Trello JSON formatları için hata yönetimini güçlendirmek.
  - Yapay zeka cevaplarının kalitesini artırmak için prompt mühendisliği çalışmaları yapmak.
- **Orta Vadeli Hedefler (Next):**
  - Manuel JSON yüklemesi yerine Trello API'sine doğrudan entegrasyon sağlamak.
  - Analiz sonuçlarını (sohbet özetleri, grafikler) dışa aktarma özelliği eklemek.
  - Temel metrikler için görselleştirme (grafik, tablo) yetenekleri kazandırmak.
- **Uzun Vadeli Hedefler (Later):**
  - Jira, Asana gibi diğer popüler proje yönetim araçları için destek eklemek.
  - Takım bazında üretkenlik analizi ve karşılaştırmalı raporlar sunmak.
  - Belirli periyotlarda (örn. haftalık) otomatik raporlar ve özetler oluşturan bir sistem geliştirmek.

---

## 🛠️ Teknik Detaylar

### Dil ve Teknoloji Yığını (Stack)
- **Programlama Dili:** `TypeScript`
- **Framework / Kütüphaneler:** `React`, `Vite`, `Google GenAI SDK`
- **Veritabanı:** Yok (Veriler yerel JSON dosyasından okunur)
- **Etkilenilen Araçlar:** `<Bu projenin mimarisini veya tasarımını etkileyen önemli araçlar veya projeler>`

### Mimari
Proje, tüm işlemlerin kullanıcı tarayıcısında çalıştığı bir **İstemci Taraflı Tek Sayfa Uygulaması (Client-side Single Page Application - SPA)** olarak tasarlanmıştır.

### Bağımlılıklar
Anahtar bağımlılıklar `@google/genai`, `react` ve `react-dom`'dur. Tüm bağımlılıkların listesi için `package.json` dosyasına bakın.

### Gereksinimler
- **İşletim Sistemi:** `Windows, macOS, Linux`
- **Diğer Gereksinimler:** `Node.js (LTS versiyonu önerilir)`

---

## 🚀 Kurulum ve Çalıştırma

### Kurulum ve Yerel Çalıştırma
1.  **Repoyu Klonlayın:**
    ```bash
    git clone https://github.com/gitmuhammedalbayrak/trello-ai-assistant.git
    cd trello-ai-assistant
    ```
2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
3.  **API Anahtarını Ayarlayın:**
    `.env.local.example` dosyasının bir kopyasını oluşturup `.env.local` olarak adlandırın. Ardından dosya içindeki `GEMINI_API_KEY` değişkenine kendi [Google AI Studio](https://ai.studio.google.com/app/apikey) API anahtarınızı girin.
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```
4.  **Uygulamayı Başlatın:**
    Uygulamayı geliştirme modunda başlatmak için aşağıdaki komutu kullanın. Bu, uygulamayı varsayılan olarak `http://localhost:5173` adresinde açacaktır.
    ```bash
    npm run dev
    ```

---

## ✅ Testler

Şu anda bu proje için otomatik testler tanımlanmamıştır. Testler eklemek için katkıda bulunabilirsiniz.
```bash
# Örnek bir test komutu (gelecekte eklenebilir)
# npm test
```

---

## 🤝 Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen `CONTRIBUTING.md` (henüz oluşturulmadı) dosyasını inceleyin. Katkılarınız bizim için değerlidir!

Kısaca:
1.  Projeyi fork'layın.
2.  Yeni bir özellik dalı (`feature/yeni-ozellik`) veya hata düzeltme dalı (`fix/hata-duzeltme`) oluşturun.
3.  Değişikliklerinizi commit'leyin.
4.  Değişikliklerinizi dalınıza push'layın.
5.  Bir Pull Request (PR) açın.

### Katkıda Bulunanlar
<Bu bölüme, projeye katkıda bulunanların GitHub kullanıcı adlarını veya isimlerini ekleyebilirsiniz.>

---

## 📦 Proje Yönetimi

- **Issues:** Hataları bildirmek veya yeni özellikler talep etmek için [Issues](https://github.com/gitmuhammedalbayrak/trello-ai-assistant/issues) sayfasını kullanabilirsiniz.
- **Project Board:** Projenin gelişim sürecini takip etmek için [Project Board](https://github.com/users/gitmuhammedalbayrak/projects/1) adresini ziyaret edebilirsiniz (Örnek link).
- **Releases:** Projenin yayınlanmış sürümlerine [Releases](https://github.com/gitmuhammedalbayrak/trello-ai-assistant/releases) sayfasından ulaşabilirsiniz.
- **Packages:** Proje ile ilgili paketlere [Packages](https://github.com/gitmuhammedalbayrak/trello-ai-assistant/packages) sayfasından erişebilirsiniz.

---

## 📜 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakınız.

---

## 📞 İletişim

- **Proje Sahibi:** Muhammed Albayrak
- **GitHub:** [@gitmuhammedalbayrak](https://github.com/gitmuhammedalbayrak)
- **Destek:** Sorularınız veya destek talepleriniz için bir issue açmaktan çekinmeyin.

---
> **Not:** Bu README dosyası, "Enformasyon Yönetimi Repo Standardı (EY-Repo Std) v1.0" temel alınarak oluşturulmuştur. Gelecekte, bu standardın merkezi bir Repo Standardı ve Lisans Standardı ile entegre edilmesi planlanmaktadır.