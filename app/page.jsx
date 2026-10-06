'use client';

import { useEffect, useState } from 'react';

const NAME = 'Neelu';

const COLORS = ['#FFB8D2', '#BFF0DC', '#FFF0A3', '#DCCBFF', '#C6E7FF', '#FFD3B8'];
const RIBBONS = ['#FF6FA3', '#7AD3B0', '#F5C400', '#9C7CF0', '#5DB4F0', '#FF9966'];
const INK = '#5A3A6B';

const WISHES = [
  { lbl: 'Pyaar', emoji: '💞', h: 'Ekdum perfect life partner', t: `Ek aisa partner jo ${NAME} ki smile pe fida ho jaaye, use princess ki tarah rakhe, aur roz bole "tum duniya ki sabse cute ho". 👑` },
  { lbl: 'Parivaar', emoji: '🏡', h: 'Pyaar bhara parivaar', t: 'Ek aisa ghar jahan khoob saare hugs ho, tyohaar ki masti ho, garam garam khaana ho, aur sab tumhe pyaar se pamper kare. 🥘' },
  { lbl: 'Sukoon', emoji: '☁️', h: 'Mann ka sukoon', t: 'Na koi tension, na koi tears. Bas fluffy fluffy neend, chai wali shaam aur ekdum halka sa dil. ☕' },
  { lbl: 'Khushi', emoji: '😆', h: 'Hasi hi hasi', t: 'Itna hasna ki pet dukhne lage! Pagalpanti, inside jokes aur aise din jo kabhi khatam hi na ho. 🤭' },
  { lbl: 'Sapne', emoji: '🦄', h: 'Har sapna poora ho', t: 'Jo jagah ghoomni hai, jo cheezein chahiye, jo wishes chupke se maangi hain, sab ek ek karke poori hongi. ✈️' },
  { lbl: 'Duaayein', emoji: '🌟', h: 'Duaayein hi duaayein', t: 'Achhi sehat, achhi kismat aur bohot achhe log. Jitna pyaar tumne baanta hai, usse sau guna wapas mile! 💝' },
];

const SUN_LINES = [`Hiii ${NAME}! 💛`, 'Tum best ho! ✨', 'Smile karo na 😊', 'Sab achha hoga 🌈', 'Love you! 💕'];

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function confetti(n) {
  if (reduced()) return;
  const emo = ['💖', '🌸', '⭐', '🎀', '🍭', '🦋', '🌈', '💕', '🧁'];
  for (let i = 0; i < n; i++) {
    const c = document.createElement('span');
    c.className = 'conf';
    c.textContent = emo[i % emo.length];
    c.style.left = Math.random() * 100 + 'vw';
    c.style.fontSize = 16 + Math.random() * 16 + 'px';
    c.style.setProperty('--dx', Math.random() * 200 - 100 + 'px');
    c.style.setProperty('--rot', Math.random() * 720 - 360 + 'deg');
    c.style.animationDuration = 3.5 + Math.random() * 3 + 's';
    c.style.animationDelay = Math.random() * 1.2 + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 8500);
  }
}

function burst(x, y) {
  if (reduced()) return;
  const emo = ['💗', '✨', '⭐', '💕'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('span');
    s.textContent = emo[i % emo.length];
    s.style.cssText = `position:fixed;left:${x}px;top:${y}px;z-index:60;pointer-events:none;font-size:18px;transition:transform .8s ease-out,opacity .8s ease-out;`;
    document.body.appendChild(s);
    const a = (i / 12) * Math.PI * 2;
    const d = 55 + Math.random() * 30;
    requestAnimationFrame(() => {
      s.style.transform = `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d}px) scale(1.3)`;
      s.style.opacity = '0';
    });
    setTimeout(() => s.remove(), 900);
  }
}

function burstAt(el) {
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 3);
}

function Cloud({ style, sleepy }) {
  return (
    <svg className="cloud-kawaii" style={style} viewBox="0 0 120 70" aria-hidden="true">
      <path d="M25 60a18 18 0 0 1 2-36 24 24 0 0 1 44-6 20 20 0 0 1 28 18 13 13 0 0 1-2 24z" fill="#fff" stroke={INK} strokeWidth="3" />
      {sleepy ? (
        <path d="M44 42q4-4 8 0M66 42q4-4 8 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ) : (
        <>
          <circle cx="48" cy="42" r="3" fill={INK} />
          <circle cx="70" cy="42" r="3" fill={INK} />
        </>
      )}
      <path d="M54 48q5 5 10 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="50" r="4" fill="#FFB8D2" />
      <circle cx="76" cy="50" r="4" fill="#FFB8D2" />
    </svg>
  );
}

function GiftBox({ box, ribbon, emoji }) {
  return (
    <svg viewBox="0 0 92 100" aria-hidden="true">
      <text className="peek" x="46" y="44" textAnchor="middle" fontSize="30">{emoji}</text>
      <rect x="10" y="44" width="72" height="52" rx="8" fill={box} stroke={INK} strokeWidth="3" />
      <rect x="40" y="44" width="12" height="52" fill={ribbon} stroke={INK} strokeWidth="2" />
      <circle cx="32" cy="72" r="2.8" fill={INK} />
      <circle cx="60" cy="72" r="2.8" fill={INK} />
      <path d="M42 80q4 4 8 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="25" cy="80" rx="4" ry="2.6" fill="#FF8FB5" />
      <ellipse cx="67" cy="80" rx="4" ry="2.6" fill="#FF8FB5" />
      <g className="lid">
        <rect x="5" y="30" width="82" height="16" rx="6" fill={box} stroke={INK} strokeWidth="3" />
        <rect x="40" y="30" width="12" height="16" fill={ribbon} stroke={INK} strokeWidth="2" />
        <path d="M46 30c-10-16-26-12-20-2 3 5 14 3 20 2zM46 30c10-16 26-12 20-2-3 5-14 3-20 2z" fill={ribbon} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function Sun() {
  const [happy, setHappy] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setHappy(true), 900);
    return () => clearTimeout(t);
  }, []);

  const poke = (e) => {
    setLine((l) => l + 1);
    setHappy(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setHappy(true)));
    burstAt(e.currentTarget);
  };

  return (
    <div
      className={`sun-kawaii${happy ? ' happy' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="Happy sun ko tap karo"
      onClick={poke}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          poke(e);
        }
      }}
    >
      <svg viewBox="0 0 150 150" aria-hidden="true">
        <g className="rays" fill="#FFE066" stroke={INK} strokeWidth="3" strokeLinejoin="round">
          <path d="M75 4l9 20H66zM75 146l-9-20h18zM4 75l20-9v18zM146 75l-20 9V66zM24 24l21 7-14 14zM126 126l-21-7 14-14zM24 126l7-21 14 14zM126 24l-7 21-14-14z" />
        </g>
        <g className="face">
          <circle cx="75" cy="75" r="44" fill="#FFE066" stroke={INK} strokeWidth="3.5" />
          <path d="M56 70q5-7 10 0M84 70q5-7 10 0" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M64 84q11 12 22 0" stroke={INK} strokeWidth="3.5" fill="#FF8FB5" strokeLinejoin="round" />
          <ellipse className="blush" cx="52" cy="84" rx="8" ry="5" fill="#FF8FB5" />
          <ellipse className="blush" cx="98" cy="84" rx="8" ry="5" fill="#FF8FB5" />
        </g>
      </svg>
      <span className="bubble">{SUN_LINES[line % SUN_LINES.length]}</span>
    </div>
  );
}

export default function Home() {
  const [opened, setOpened] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => confetti(45), 700);
    return () => clearTimeout(t);
  }, []);

  const openGift = (i, e) => {
    setCurrent(i);
    burstAt(e.currentTarget);
    if (!opened.includes(i)) {
      const next = [...opened, i];
      setOpened(next);
      if (next.length === WISHES.length) setTimeout(() => confetti(90), 350);
    }
  };

  const wish = current === null ? null : WISHES[current];

  return (
    <>
      <header className="hero">
        <div className="rainbow" aria-hidden="true" />
        <Cloud style={{ top: '12%', animationDuration: '38s', animationDelay: '-8s' }} />
        <Cloud sleepy style={{ top: '34%', width: 80, animationDuration: '52s', animationDelay: '-34s' }} />

        <span className="floaty" style={{ left: '8%', top: '22%' }} aria-hidden="true">💖</span>
        <span className="floaty" style={{ right: '9%', top: '46%', animationDelay: '-1.5s' }} aria-hidden="true">⭐</span>
        <span className="floaty" style={{ left: '12%', top: '58%', animationDelay: '-2.5s' }} aria-hidden="true">🌸</span>
        <span className="floaty" style={{ right: '16%', top: '16%', animationDelay: '-.8s' }} aria-hidden="true">🦋</span>

        <Sun />

        <div className="hero-text">
          <p className="greet">Oye pyaari si cutie! 🥰</p>
          <div className="big-name">{NAME}</div>
          <h1>Ab tumhari life ke sabse khushi wale din shuru! 🎈</h1>
          <p className="lead">
            Itni saari mushkilein itni himmat se jheli hain tumne. Ab bas pyaar, hasi aur mithaai jaisi meethi
            khushiyan aane wali hain! 🍭
          </p>
          <a className="btn" href="#gifts">Tumhare gifts dekho 🎁</a>
        </div>
      </header>

      <main>
        <section className="gifts" id="gifts">
          <h2>6 chhote chhote gifts, sirf {NAME} ke liye 🎀</h2>
          <p>Har gift pe tap karo, andar ek pyaari si wish hai!</p>

          <div className="grid">
            {WISHES.map((w, i) => (
              <button
                key={w.lbl}
                className={`gift${opened.includes(i) ? ' open' : ''}`}
                aria-label={`Gift kholo: ${w.lbl}`}
                onClick={(e) => openGift(i, e)}
              >
                <GiftBox box={COLORS[i]} ribbon={RIBBONS[i]} emoji={w.emoji} />
                <span>{w.lbl}</span>
              </button>
            ))}
          </div>

          <div className="card" key={current ?? 'empty'} aria-live="polite">
            {wish ? (
              <>
                <div className="emoji">{wish.emoji}</div>
                <h3>{wish.h}</h3>
                <p>{wish.t}</p>
              </>
            ) : (
              <>
                <div className="emoji">🧸</div>
                <h3>Koi bhi gift kholo na!</h3>
                <p>Jaldi jaldi, sab tumhare intezaar mein hain hehe 🙈</p>
              </>
            )}
          </div>

          <div className="stickers" aria-hidden="true">
            {opened.map((i) => (
              <span key={i}>{WISHES[i].emoji}</span>
            ))}
          </div>
          <p className="count">
            {opened.length === WISHES.length
              ? 'Yayyy! Saare 6 gifts tumhare! 🥳'
              : `6 mein se ${opened.length} gifts khule`}
          </p>
        </section>

        <section className="finale">
          <h2>Best toh abhi aana baaki hai! 🌈</h2>
          <p>
            Har aansu gina gaya hai, har dua suni gayi hai. Upar wala ab tumhari kahani mein sirf sunshine, rainbows
            aur ice cream likh raha hai. 🍦
          </p>
          <p>
            Toh ab khul ke haso, khoob naacho, aur life enjoy karo, {NAME}! Tum ye sab deserve karti ho. ✨
          </p>

          <svg className="pinky" viewBox="0 0 140 90" aria-hidden="true">
            <path d="M70 82S20 58 20 30a20 20 0 0 1 50-10 20 20 0 0 1 50 10c0 28-50 52-50 52z" fill="#FFB8D2" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
            <circle cx="55" cy="40" r="4" fill={INK} />
            <circle cx="85" cy="40" r="4" fill={INK} />
            <circle cx="57" cy="38" r="1.5" fill="#fff" />
            <circle cx="87" cy="38" r="1.5" fill="#fff" />
            <path d="M63 50q7 7 14 0" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
            <ellipse cx="45" cy="50" rx="6" ry="4" fill="#FF6FA3" opacity=".6" />
            <ellipse cx="95" cy="50" rx="6" ry="4" fill="#FF6FA3" opacity=".6" />
          </svg>

          <button className="btn" onClick={() => confetti(120)}>Party time! 🎉</button>
          <p className="sign">Dher saara pyaar aur jaadu ki jhappi 🤗💕</p>
        </section>
      </main>
    </>
  );
}
