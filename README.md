<!-- EY-Repo Std v1.0 -->

# Trello AI Assistant

> Trello panonuzdaki tamamlanmış görevleri yapay zeka ile analiz edin ve özetleyin.

---

## Genel Bilgiler

- **Projenin Tam Adı:** `Trello AI Assistant`
- **Yazar / Sahip:** Muhammed Albayrak - [@gitmuhammedalbayrak](https://github.com/gitmuhammedalbayrak)
- **Lisans:** `MIT`
- **Doğum / Başlangıç Tarihi:** `<YYYY-AA-GG>`
- **Geliştirilme Durumu:** `Aktif`

## Proje Hakkında

### İlham ve Gerekçe
<Bu projenin ortaya çıkmasına neyin ilham verdiğini ve hangi temel ihtiyacı veya sorunu çözmek için geliştirildiğini açıklayın. Örneğin: "Trello'da tamamlanan işleri raporlamak için harcanan manuel eforu azaltma ihtiyacı.">

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
  - `<Önümüzdeki 1-3 ay içinde tamamlanması planlanan özellikler veya görevler>`
- **Orta Vadeli Hedefler (Next):**
  - `<Gelecek 3-9 ay için planlanan hedefler>`
- **Uzun Vadeli Hedefler (Later):**
  - `<Projenin vizyonu ve 1+ yıl içinde ulaşılması hedeflenen büyük kilometre taşları>`

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
- **Diğer Gereksinimler:** `Node.js (LTS versiyonu önerilir)`, `npm` veya `yarn`

---

## 🚀 Kurulum ve Çalıştırma

### Kurulum Talimatları
1.  Bu repoyu klonlayın:
    ```bash
    git clone https://github.com/gitmuhammedalbayrak/trello-ai-assistant.git
    cd trello-ai-assistant
    ```
2.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

### Nasıl Çalıştırılır?
Uygulamayı geliştirme modunda başlatmak için aşağıdaki komutu kullanın. Bu, uygulamayı `http://localhost:5173` adresinde açacaktır.
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