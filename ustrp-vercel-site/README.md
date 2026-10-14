# USTRP — Vercel'e hazır site

## Bilgisayarında çalıştırma
1. Node.js LTS kur: https://nodejs.org
2. Bu klasörde terminal aç.
3. `npm install`
4. `npm run dev`
5. Tarayıcıda `http://localhost:3000` adresini aç.

## Vercel'e yükleme
1. https://github.com üzerinde yeni bir repository oluştur.
2. Bu klasördeki dosyaları repository'ye yükle.
3. https://vercel.com adresine GitHub ile giriş yap.
4. **Add New → Project** seç ve repository'ni import et.
5. Framework olarak Next.js otomatik algılanır. **Deploy** tuşuna bas.
6. Vercel sana canlı site adresini verir.

## Bağlantıları değiştirme
`app/page.js` dosyasının en üstündeki şu iki satırı kendi adreslerinle değiştir:
- `DISCORD_URL`: Discord sunucusunun gerçek davet bağlantısı
- `SITE_URL`: Vercel tarafından verilen canlı site adresi veya kendi alan adın

Footer'daki kurucu bilgileri sayfanın en altındadır. Uçak görselleri harici görsel dosyaları yerine SVG silüetleriyle çizildiği için ekstra görsel yüklemene gerek yoktur.
