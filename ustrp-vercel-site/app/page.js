const DISCORD_URL = "https://discord.gg/ustrp"; // Kendi davet bağlantın farklıysa burayı değiştir.
const SITE_URL = "https://ustroleplay.com"; // Vercel alan adın hazır olunca burayı güncelle.

const aircraft = [
  { code: "F-16", name: "Fighting Falcon", role: "Çok rollü savaş uçağı", tag: "TAKTİK" },
  { code: "F/A-18", name: "Super Hornet", role: "Deniz konuşlu çok rollü uçak", tag: "DENİZ" },
  { code: "A320", name: "Airbus A320", role: "Ticari yolcu uçağı", tag: "HAVAYOLU" },
  { code: "B737", name: "Boeing 737", role: "Dar gövdeli yolcu uçağı", tag: "HAVAYOLU" },
  { code: "C-17", name: "Globemaster III", role: "Ağır nakliye uçağı", tag: "NAKLİYE" },
  { code: "F-22", name: "Raptor", role: "Hava üstünlüğü savaş uçağı", tag: "TAKTİK" },
];

function PlaneIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M60 28.5 36 22 27 4.5c-.8-1.6-3.2-1.1-3.3.7L22 20l-14-4.3c-2.3-.7-4.1 1.9-2.7 3.8l9.1 12.1-8.8 12.1c-1.4 1.9.5 4.5 2.7 3.8L22 43.2l1.7 14.7c.2 1.8 2.6 2.3 3.4.7L36 41l24-6.5c3-.8 3-5.2 0-6Z" fill="currentColor"/></svg>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" aria-label="USTRP ana sayfa"><span className="brand-mark"><PlaneIcon /></span><span>US<span className="brand-accent">TRP</span><small>UNITED STATES TURKISH RP</small></span></a>
        <div className="nav-links"><a href="#filo">Uçaklar</a><a href="#operasyon">Topluluk</a><a href="#hakkimizda">Hakkımızda</a></div>
        <a className="nav-cta" href={DISCORD_URL} target="_blank" rel="noreferrer">Discord’a Katıl <span>↗</span></a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid"></div><div className="hero-glow"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> PTFS HAVACILIK TOPLULUĞU</div>
          <h1>GÖKYÜZÜ<br/>BİZİM <em>SAHAMIZ.</em></h1>
          <p className="hero-text">United States Turkish RP — Pilot Training Flight Simulator evreninde uçuş operasyonları, havacılık tutkusu ve ekip ruhu.</p>
          <div className="hero-actions"><a className="button button-primary" href={DISCORD_URL} target="_blank" rel="noreferrer">✦ &nbsp; Sunucuya Katıl <span>↗</span></a><a className="button button-ghost" href="#filo">Filoyu Keşfet <span>↓</span></a></div>
          <div className="hero-meta"><div><strong>PTFS</strong><span>UÇUŞ PLATFORMU</span></div><div><strong>USTRP</strong><span>HAVACILIK RP</span></div><div><strong>UÇUŞA HAZIR</strong><span>EKİBİNİ BUL</span></div></div>
        </div>
        <div className="hero-visual" aria-label="Stilize savaş uçağı illüstrasyonu">
          <div className="radar radar-one"></div><div className="radar radar-two"></div>
          <div className="flight-label label-top"><span>USTRP / AIR OPS</span><b>MISSION READY</b></div>
          <svg className="hero-plane" viewBox="0 0 900 420" role="img" aria-label="Gökyüzünde stilize jet silüeti">
            <defs><linearGradient id="metal" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#f4f8fb"/><stop offset=".45" stopColor="#8296a9"/><stop offset="1" stopColor="#26384a"/></linearGradient><linearGradient id="wing" x1="0" x2="1"><stop stopColor="#dce5eb"/><stop offset="1" stopColor="#52697d"/></linearGradient></defs>
            <g transform="translate(20 8) rotate(-9 450 210)">
              <path d="M60 235 L350 184 L442 25 Q450 8 460 27 L520 172 L820 215 Q850 221 820 231 L515 253 L460 379 Q450 398 441 379 L348 263 Z" fill="url(#wing)" stroke="#f2f6fa" strokeOpacity=".6" strokeWidth="2"/>
              <path d="M175 231 L420 207 L445 73 Q450 53 457 75 L493 205 L713 224 L496 241 L457 332 Q450 350 443 332 L418 244 Z" fill="url(#metal)"/>
              <path d="M445 73 L450 15 L461 75 L493 205 L713 224 L496 241 L457 332 L450 388 L443 332 L418 244 L175 231 L420 207 Z" fill="#b7c5d1" fillOpacity=".3"/>
              <path d="M449 80 L450 345" stroke="#f9fbff" strokeOpacity=".7" strokeWidth="3"/>
              <path d="M350 184 L442 25 Q450 8 460 27 L520 172" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2"/>
              <path d="M420 207 L450 183 L480 208 L457 232 L443 232 Z" fill="#1b3042"/>
              <path d="M428 205 L450 187 L472 205 L450 219 Z" fill="#7edbff" fillOpacity=".85"/>
              <path d="M100 228 L345 209 L365 220 L345 235 Z" fill="#23384a" fillOpacity=".7"/>
              <path d="M550 225 L786 226 L550 242 Z" fill="#23384a" fillOpacity=".7"/>
              <path d="M420 244 L443 332 L450 388 L457 332 L480 244" fill="#52697d"/>
            </g>
          </svg>
          <div className="flight-label label-bottom"><span>FLIGHT DECK</span><b>ALT // 35,000 FT</b></div>
          <div className="visual-caption"><span className="caption-line"></span><span>PRECISION · DISCIPLINE · TEAMWORK</span></div>
        </div>
        <div className="hero-bottomline"><span>01 / USTRP FLIGHT COMMUNITY</span><span>EST. FOR THE LOVE OF AVIATION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="ticker" aria-label="USTRP slogan"><div>FLY WITH PURPOSE <span>✦</span> RESPECT THE SKIES <span>✦</span> ONE TEAM, ONE CREW <span>✦</span> FLY WITH PURPOSE <span>✦</span> RESPECT THE SKIES <span>✦</span></div></section>

      <section className="section fleet-section" id="filo">
        <div className="section-head"><div><div className="eyebrow">02 / UÇAK ENVANTERİ</div><h2>FİLOYU <em>TANI.</em></h2></div><p>Her görev farklı bir makine, her uçuş yeni bir deneyim. PTFS dünyasında havacılığın farklı yüzlerini keşfet.</p></div>
        <div className="fleet-grid">{aircraft.map((plane, i) => <article className="aircraft-card" key={plane.code}>
          <div className="card-top"><span>USTRP / {String(i + 1).padStart(2, "0")}</span><span className="plane-tag">{plane.tag}</span></div>
          <div className={`plane-art plane-art-${i}`}><svg viewBox="0 0 320 140" aria-hidden="true"><path d="M22 76 L128 61 L158 15 Q160 10 163 16 L183 58 L298 72 Q308 74 298 78 L182 89 L163 127 Q160 133 157 127 L128 91 Z" fill="currentColor"/><path d="M157 17 L160 7 L164 17 L183 58 L298 72 L182 89 L163 127 L160 136 L157 127 L128 91 L22 76 L128 61 Z" fill="#dbe8f0" fillOpacity=".25"/></svg><span className="art-number">{plane.code}</span></div>
          <div className="card-info"><div><h3>{plane.name}</h3><p>{plane.role}</p></div><span className="card-arrow">↗</span></div>
        </article>)}</div>
        <p className="fleet-note">* Uçak görselleri tasarımsal silüetlerdir. Uçuş ve uçak seçenekleri PTFS içeriğine göre değişebilir.</p>
      </section>

      <section className="mission-section" id="operasyon"><div className="mission-art"><div className="crosshair"></div><div className="mission-stamp">USTRP<br/><b>FLIGHT<br/>OPS</b><span>PTFS / ONLINE</span></div><div className="mission-coordinate">40° 41' 21.6" N<br/>074° 02' 40.2" W</div></div><div className="mission-copy"><div className="eyebrow">03 / BİZİMLE UÇ</div><h2>SADECE BİR<br/>UÇUŞ DEĞİL.<br/><em>BİR EKİP.</em></h2><p>USTRP, PTFS üzerinde havacılık temalı rol yapma ve uçuş deneyimi için bir araya gelen topluluğumuzdur. İster kokpitte ol ister operasyonları takip et; ekibin bir parçası ol.</p><div className="feature-list"><div><span>01</span><div><b>UÇUŞ ODAKLI TOPLULUK</b><small>Havacılık ve PTFS etrafında bir araya gel.</small></div></div><div><span>02</span><div><b>EKİP RUHU</b><small>İletişim, koordinasyon ve saygıyı ön planda tut.</small></div></div><div><span>03</span><div><b>GÖKYÜZÜNÜ KEŞFET</b><small>Farklı uçaklarla kendi uçuş deneyimini yaşa.</small></div></div></div><a className="button button-primary" href={DISCORD_URL} target="_blank" rel="noreferrer">USTRP’YE KATIL <span>↗</span></a></div></section>

      <section className="join-section" id="hakkimizda"><div className="join-inner"><div className="eyebrow">04 / KULE ÇAĞRISI</div><h2>KALKIŞA<br/><em>HAZIR MISIN?</em></h2><p>USTRP ekibine katıl, PTFS gökyüzünde yerini al.</p><a className="button button-light" href={DISCORD_URL} target="_blank" rel="noreferrer">DISCORD SUNUCUSUNA GİT <span>↗</span></a><div className="join-decoration">USTRP</div></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><PlaneIcon /></span><span>US<span className="brand-accent">TRP</span><small>UNITED STATES TURKISH RP</small></span></a><div className="footer-links"><a href="#filo">Uçaklar</a><a href="#operasyon">Topluluk</a><a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord ↗</a><a href={SITE_URL} target="_blank" rel="noreferrer">Site ↗</a></div><div className="credits"><span>FOUNDER: <b>DEMİR O.</b></span><span>CO-FOUNDER: <b>FURKAN K.</b></span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} USTRP — UNITED STATES TURKISH RP</span><span>BUILT FOR THE SKIES.</span></div></footer>
    </main>
  );
}