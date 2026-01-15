// 1. Видеонаблюдение 24/7 - Котик-оператор с видеокамерой
export const CatCameraIcon = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Тень */}
    <ellipse cx="70" cy="120" rx="35" ry="6" fill="#000" opacity="0.15" />
    
    {/* Тело */}
    <ellipse cx="70" cy="80" rx="30" ry="35" fill="#60a5fa" />
    <ellipse cx="70" cy="75" rx="28" ry="32" fill="#93c5fd" />
    
    {/* Живот */}
    <ellipse cx="70" cy="85" rx="20" ry="25" fill="#dbeafe" />
    
    {/* Лапки */}
    <ellipse cx="55" cy="105" rx="8" ry="12" fill="#60a5fa" />
    <ellipse cx="85" cy="105" rx="8" ry="12" fill="#60a5fa" />
    <ellipse cx="55" cy="110" rx="9" ry="6" fill="#3b82f6" />
    <ellipse cx="85" cy="110" rx="9" ry="6" fill="#3b82f6" />
    
    {/* Голова */}
    <circle cx="70" cy="50" r="25" fill="#60a5fa" />
    <circle cx="70" cy="50" r="23" fill="#93c5fd" />
    
    {/* Ушки */}
    <path d="M 48 38 L 43 20 L 55 33 Z" fill="#60a5fa" />
    <path d="M 92 38 L 97 20 L 85 33 Z" fill="#60a5fa" />
    <path d="M 50 35 L 48 25 L 53 32 Z" fill="#fbbf24" />
    <path d="M 90 35 L 92 25 L 87 32 Z" fill="#fbbf24" />
    
    {/* Мордочка */}
    <ellipse cx="70" cy="55" rx="15" ry="12" fill="#dbeafe" />
    
    {/* Глаза - большие и яркие */}
    <ellipse cx="60" cy="48" rx="6" ry="8" fill="#fff" />
    <ellipse cx="80" cy="48" rx="6" ry="8" fill="#fff" />
    <circle cx="60" cy="50" r="4" fill="#1e3a8a" />
    <circle cx="80" cy="50" r="4" fill="#1e3a8a" />
    <circle cx="61" cy="48" r="2" fill="#fff" className="animate-pulse" />
    <circle cx="81" cy="48" r="2" fill="#fff" className="animate-pulse" />
    
    {/* Носик */}
    <path d="M 70 55 L 68 58 L 72 58 Z" fill="#ec4899" />
    
    {/* Улыбка */}
    <path d="M 70 58 Q 70 62 70 62" stroke="#1e3a8a" strokeWidth="1" fill="none" />
    <path d="M 62 62 Q 70 66 78 62" stroke="#1e3a8a" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Усики */}
    <line x1="45" y1="52" x2="35" y2="50" stroke="#1e3a8a" strokeWidth="1.5" />
    <line x1="45" y1="56" x2="35" y2="58" stroke="#1e3a8a" strokeWidth="1.5" />
    <line x1="95" y1="52" x2="105" y2="50" stroke="#1e3a8a" strokeWidth="1.5" />
    <line x1="95" y1="56" x2="105" y2="58" stroke="#1e3a8a" strokeWidth="1.5" />
    
    {/* Видеокамера - анимированная */}
    <g className="animate-bounce" style={{ animationDuration: '2s' }}>
      <rect x="95" y="45" width="25" height="18" rx="3" fill="#1e3a8a" />
      <circle cx="107" cy="54" r="7" fill="#3b82f6" />
      <circle cx="107" cy="54" r="5" fill="#60a5fa" />
      <circle cx="109" cy="52" r="2" fill="#fff" opacity="0.8" />
      <rect x="120" y="50" width="8" height="8" fill="#1e3a8a" />
      <circle cx="125" cy="48" r="2" fill="#ef4444" className="animate-pulse" />
    </g>
  </svg>
);

// 2. Ветеринар 24/7 - Котик-доктор со стетоскопом
export const CatDoctorIcon = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="120" rx="35" ry="6" fill="#000" opacity="0.15" />
    
    {/* Тело */}
    <ellipse cx="70" cy="85" rx="28" ry="32" fill="#fb923c" />
    <ellipse cx="70" cy="82" rx="26" ry="30" fill="#fdba74" />
    <ellipse cx="70" cy="90" rx="18" ry="22" fill="#fff" />
    
    {/* Лапки */}
    <ellipse cx="56" cy="108" rx="7" ry="11" fill="#fb923c" />
    <ellipse cx="84" cy="108" rx="7" ry="11" fill="#fb923c" />
    <ellipse cx="56" cy="113" rx="8" ry="5" fill="#ea580c" />
    <ellipse cx="84" cy="113" rx="8" ry="5" fill="#ea580c" />
    
    {/* Голова */}
    <circle cx="70" cy="52" r="24" fill="#fb923c" />
    <circle cx="70" cy="52" r="22" fill="#fdba74" />
    
    {/* Медицинская шапочка */}
    <ellipse cx="70" cy="35" rx="26" ry="12" fill="#fff" />
    <rect x="44" y="35" width="52" height="8" fill="#fff" />
    <path d="M 70 30 L 66 38 L 74 38 Z" fill="#ef4444" />
    <rect x="68" y="32" width="4" height="10" fill="#ef4444" />
    
    {/* Ушки под шапкой */}
    <path d="M 48 42 L 45 35 L 52 40 Z" fill="#fb923c" />
    <path d="M 92 42 L 95 35 L 88 40 Z" fill="#fb923c" />
    
    {/* Мордочка */}
    <ellipse cx="70" cy="58" rx="14" ry="11" fill="#fff" />
    
    {/* Глаза */}
    <ellipse cx="62" cy="52" rx="5" ry="7" fill="#fff" />
    <ellipse cx="78" cy="52" rx="5" ry="7" fill="#fff" />
    <circle cx="62" cy="53" r="3.5" fill="#7c2d12" />
    <circle cx="78" cy="53" r="3.5" fill="#7c2d12" />
    <circle cx="63" cy="51" r="1.5" fill="#fff" />
    <circle cx="79" cy="51" r="1.5" fill="#fff" />
    
    {/* Носик и улыбка */}
    <path d="M 70 58 L 68 61 L 72 61 Z" fill="#ef4444" />
    <path d="M 63 64 Q 70 68 77 64" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Стетоскоп - анимированный */}
    <g className="animate-pulse" style={{ animationDuration: '2s' }}>
      <path d="M 85 75 Q 95 70 100 75" stroke="#94a3b8" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 85 75 Q 90 80 90 88" stroke="#94a3b8" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="75" r="4" fill="#64748b" />
      <circle cx="90" cy="88" r="6" fill="#1e293b" />
      <circle cx="90" cy="88" r="4" fill="#475569" />
    </g>
    
    {/* Крестик на груди */}
    <path d="M 70 75 L 70 82 M 67 78.5 L 73 78.5" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 3. Игровые комнаты - Игривый котик с мячиком
export const CatPlayIcon = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="120" rx="35" ry="6" fill="#000" opacity="0.15" />
    
    {/* Тело в игривой позе */}
    <ellipse cx="75" cy="85" rx="26" ry="30" fill="#a78bfa" transform="rotate(-10 75 85)" />
    <ellipse cx="75" cy="82" rx="24" ry="28" fill="#c4b5fd" transform="rotate(-10 75 85)" />
    <ellipse cx="75" cy="90" rx="16" ry="20" fill="#e9d5ff" transform="rotate(-10 75 85)" />
    
    {/* Задняя лапка поднята */}
    <ellipse cx="90" cy="95" rx="6" ry="14" fill="#a78bfa" transform="rotate(30 90 95)" />
    <ellipse cx="92" cy="102" rx="7" ry="5" fill="#8b5cf6" />
    
    {/* Передние лапки */}
    <ellipse cx="60" cy="105" rx="7" ry="12" fill="#a78bfa" />
    <ellipse cx="70" cy="108" rx="7" ry="12" fill="#a78bfa" />
    <ellipse cx="60" cy="112" rx="8" ry="5" fill="#8b5cf6" />
    <ellipse cx="70" cy="113" rx="8" ry="5" fill="#8b5cf6" />
    
    {/* Голова */}
    <circle cx="68" cy="55" r="23" fill="#a78bfa" />
    <circle cx="68" cy="55" r="21" fill="#c4b5fd" />
    
    {/* Ушки */}
    <path d="M 48 43 L 42 25 L 54 38 Z" fill="#a78bfa" />
    <path d="M 88 43 L 94 25 L 82 38 Z" fill="#a78bfa" />
    <path d="M 50 40 L 47 30 L 52 38 Z" fill="#fbbf24" />
    <path d="M 86 40 L 89 30 L 84 38 Z" fill="#fbbf24" />
    
    {/* Мордочка */}
    <ellipse cx="68" cy="60" rx="13" ry="10" fill="#e9d5ff" />
    
    {/* Глаза - большие и восторженные */}
    <ellipse cx="60" cy="52" rx="6" ry="9" fill="#fff" />
    <ellipse cx="76" cy="52" rx="6" ry="9" fill="#fff" />
    <circle cx="60" cy="54" r="5" fill="#1e1b4b" />
    <circle cx="76" cy="54" r="5" fill="#1e1b4b" />
    <circle cx="61" cy="51" r="2.5" fill="#fff" className="animate-ping" style={{ animationDuration: '1.5s' }} />
    <circle cx="77" cy="51" r="2.5" fill="#fff" className="animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }} />
    
    {/* Носик */}
    <path d="M 68 60 L 66 63 L 70 63 Z" fill="#ec4899" />
    
    {/* Радостная улыбка */}
    <path d="M 60 66 Q 68 72 76 66" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    
    {/* Язычок */}
    <ellipse cx="68" cy="70" rx="3" ry="4" fill="#ef4444" />
    
    {/* Мячик - прыгающий */}
    <g className="animate-bounce" style={{ animationDuration: '1s' }}>
      <circle cx="110" cy="50" r="12" fill="#fbbf24" />
      <path d="M 110 38 Q 110 44 110 50 Q 110 56 110 62" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <path d="M 98 50 Q 104 50 110 50 Q 116 50 122 50" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <circle cx="113" cy="47" r="3" fill="#fff" opacity="0.6" />
    </g>
    
    {/* Звездочки восторга */}
    <path d="M 25 40 L 27 45 L 32 45 L 28 48 L 30 53 L 25 50 L 20 53 L 22 48 L 18 45 L 23 45 Z" fill="#fbbf24" className="animate-pulse" />
    <path d="M 105 25 L 106 28 L 109 28 L 107 30 L 108 33 L 105 31 L 102 33 L 103 30 L 101 28 L 104 28 Z" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
  </svg>
);

// 4. Груминг и спа - Котик в банной шапочке с пузырями
export const CatSpaIcon = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="120" rx="35" ry="6" fill="#000" opacity="0.15" />
    
    {/* Тело */}
    <ellipse cx="70" cy="85" rx="28" ry="32" fill="#ec4899" />
    <ellipse cx="70" cy="82" rx="26" ry="30" fill="#f472b6" />
    <ellipse cx="70" cy="90" rx="18" ry="24" fill="#fce7f3" />
    
    {/* Лапки */}
    <ellipse cx="56" cy="108" rx="8" ry="12" fill="#ec4899" />
    <ellipse cx="84" cy="108" rx="8" ry="12" fill="#ec4899" />
    <ellipse cx="56" cy="113" rx="9" ry="5" fill="#db2777" />
    <ellipse cx="84" cy="113" rx="9" ry="5" fill="#db2777" />
    
    {/* Полотенце на голове */}
    <ellipse cx="70" cy="38" rx="28" ry="15" fill="#06b6d4" />
    <path d="M 42 38 Q 42 45 45 50 L 95 50 Q 98 45 98 38 Z" fill="#06b6d4" />
    <ellipse cx="70" cy="32" rx="24" ry="8" fill="#67e8f9" />
    
    {/* Голова */}
    <circle cx="70" cy="55" r="24" fill="#ec4899" />
    <circle cx="70" cy="55" r="22" fill="#f472b6" />
    
    {/* Мордочка */}
    <ellipse cx="70" cy="60" rx="14" ry="11" fill="#fce7f3" />
    
    {/* Глаза - расслабленные полузакрытые */}
    <path d="M 56 52 Q 62 55 66 52" stroke="#9f1239" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M 74 52 Q 78 55 82 52" stroke="#9f1239" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <line x1="57" y1="54" x2="65" y2="54" stroke="#9f1239" strokeWidth="1.5" opacity="0.6" />
    <line x1="75" y1="54" x2="81" y2="54" stroke="#9f1239" strokeWidth="1.5" opacity="0.6" />
    
    {/* Носик */}
    <path d="M 70 62 L 68 65 L 72 65 Z" fill="#db2777" />
    
    {/* Довольная улыбка */}
    <path d="M 62 68 Q 70 72 78 68" stroke="#9f1239" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Мыльные пузыри - летающие */}
    <g className="animate-bounce" style={{ animationDuration: '3s' }}>
      <circle cx="25" cy="70" r="8" fill="#67e8f9" opacity="0.6" />
      <circle cx="27" cy="68" r="3" fill="#fff" opacity="0.8" />
    </g>
    <g className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
      <circle cx="110" cy="60" r="6" fill="#67e8f9" opacity="0.6" />
      <circle cx="111" cy="59" r="2" fill="#fff" opacity="0.8" />
    </g>
    <g className="animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
      <circle cx="100" cy="85" r="5" fill="#67e8f9" opacity="0.6" />
      <circle cx="101" cy="84" r="1.5" fill="#fff" opacity="0.8" />
    </g>
    <g className="animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}>
      <circle cx="40" cy="50" r="7" fill="#67e8f9" opacity="0.6" />
      <circle cx="42" cy="48" r="2.5" fill="#fff" opacity="0.8" />
    </g>
    
    {/* Губка */}
    <rect x="95" y="80" width="18" height="12" rx="3" fill="#fbbf24" opacity="0.8" />
    <line x1="97" y1="83" x2="111" y2="83" stroke="#f59e0b" strokeWidth="1" />
    <line x1="97" y1="86" x2="111" y2="86" stroke="#f59e0b" strokeWidth="1" />
    <line x1="97" y1="89" x2="111" y2="89" stroke="#f59e0b" strokeWidth="1" />
  </svg>
);

// 5. Ежедневные отчёты - Котик с планшетом и камерой
export const CatReportIcon = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="120" rx="35" ry="6" fill="#000" opacity="0.15" />
    
    {/* Тело */}
    <ellipse cx="70" cy="85" rx="28" ry="32" fill="#34d399" />
    <ellipse cx="70" cy="82" rx="26" ry="30" fill="#6ee7b7" />
    <ellipse cx="70" cy="90" rx="18" ry="24" fill="#d1fae5" />
    
    {/* Лапки */}
    <ellipse cx="56" cy="108" rx="8" ry="11" fill="#34d399" />
    <ellipse cx="84" cy="108" rx="8" ry="11" fill="#34d399" />
    <ellipse cx="56" cy="113" rx="9" ry="5" fill="#10b981" />
    <ellipse cx="84" cy="113" rx="9" ry="5" fill="#10b981" />
    
    {/* Голова */}
    <circle cx="70" cy="52" r="24" fill="#34d399" />
    <circle cx="70" cy="52" r="22" fill="#6ee7b7" />
    
    {/* Ушки */}
    <path d="M 48 40 L 43 22 L 54 36 Z" fill="#34d399" />
    <path d="M 92 40 L 97 22 L 86 36 Z" fill="#34d399" />
    <path d="M 50 37 L 48 28 L 53 35 Z" fill="#fbbf24" />
    <path d="M 90 37 L 92 28 L 87 35 Z" fill="#fbbf24" />
    
    {/* Очки */}
    <circle cx="60" cy="50" r="9" fill="#fff" opacity="0.9" stroke="#064e3b" strokeWidth="2" />
    <circle cx="80" cy="50" r="9" fill="#fff" opacity="0.9" stroke="#064e3b" strokeWidth="2" />
    <line x1="69" y1="50" x2="71" y2="50" stroke="#064e3b" strokeWidth="2" />
    
    {/* Глаза за очками */}
    <circle cx="60" cy="50" r="4" fill="#064e3b" />
    <circle cx="80" cy="50" r="4" fill="#064e3b" />
    <circle cx="61" cy="48" r="1.5" fill="#fff" />
    <circle cx="81" cy="48" r="1.5" fill="#fff" />
    
    {/* Мордочка */}
    <ellipse cx="70" cy="58" rx="14" ry="11" fill="#d1fae5" />
    
    {/* Носик */}
    <path d="M 70 58 L 68 61 L 72 61 Z" fill="#ec4899" />
    
    {/* Улыбка умная */}
    <path d="M 63 64 Q 70 67 77 64" stroke="#064e3b" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Планшет в лапках */}
    <rect x="45" y="75" width="32" height="40" rx="3" fill="#1e293b" />
    <rect x="48" y="78" width="26" height="32" fill="#60a5fa" />
    
    {/* Текст на планшете - анимированный */}
    <g className="animate-pulse" style={{ animationDuration: '2s' }}>
      <line x1="52" y1="83" x2="70" y2="83" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <line x1="52" y1="88" x2="68" y2="88" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="52" y1="92" x2="72" y2="92" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="52" y1="96" x2="65" y2="96" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      
      {/* Фото на планшете */}
      <rect x="52" y="100" width="20" height="7" rx="1" fill="#fbbf24" />
    </g>
    
    {/* Галочка выполнено */}
    <path d="M 90 75 L 95 82 L 108 65" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
  </svg>
);

// 6. Простота и комфорт - Котик с сердечком и звездами
export const CatComfortIcon = () => (
  <svg viewBox="0 0 140 140" className="w-28 h-28 mx-auto" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="120" rx="35" ry="6" fill="#000" opacity="0.15" />
    
    {/* Тело */}
    <ellipse cx="70" cy="85" rx="30" ry="34" fill="#fbbf24" />
    <ellipse cx="70" cy="82" rx="28" ry="32" fill="#fcd34d" />
    <ellipse cx="70" cy="92" rx="20" ry="26" fill="#fef3c7" />
    
    {/* Лапки */}
    <ellipse cx="54" cy="110" rx="9" ry="12" fill="#fbbf24" />
    <ellipse cx="86" cy="110" rx="9" ry="12" fill="#fbbf24" />
    <ellipse cx="54" cy="115" rx="10" ry="5" fill="#f59e0b" />
    <ellipse cx="86" cy="115" rx="10" ry="5" fill="#f59e0b" />
    
    {/* Голова */}
    <circle cx="70" cy="50" r="26" fill="#fbbf24" />
    <circle cx="70" cy="50" r="24" fill="#fcd34d" />
    
    {/* Ушки */}
    <path d="M 46 36 L 40 18 L 52 32 Z" fill="#fbbf24" />
    <path d="M 94 36 L 100 18 L 88 32 Z" fill="#fbbf24" />
    <path d="M 48 33 L 45 24 L 51 31 Z" fill="#fbbf24" />
    <path d="M 92 33 L 95 24 L 89 31 Z" fill="#fbbf24" />
    
    {/* Мордочка */}
    <ellipse cx="70" cy="56" rx="16" ry="13" fill="#fef3c7" />
    
    {/* Глаза - счастливые дуги */}
    <path d="M 56 48 Q 60 53 64 48" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 76 48 Q 80 53 84 48" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
    
    {/* Румянец */}
    <ellipse cx="52" cy="54" rx="6" ry="4" fill="#f472b6" opacity="0.4" />
    <ellipse cx="88" cy="54" rx="6" ry="4" fill="#f472b6" opacity="0.4" />
    
    {/* Носик */}
    <path d="M 70 58 L 68 61 L 72 61 Z" fill="#f59e0b" />
    
    {/* Большая счастливая улыбка */}
    <path d="M 58 62 Q 70 70 82 62" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
    
    {/* Сердечко над головой */}
    <g className="animate-bounce" style={{ animationDuration: '2s' }}>
      <path d="M 70 25 C 70 25 63 18 58 18 C 53 18 50 22 50 26 C 50 32 70 42 70 42 C 70 42 90 32 90 26 C 90 22 87 18 82 18 C 77 18 70 25 70 25 Z" fill="#ef4444" />
      <path d="M 70 25 C 70 25 63 18 58 18 C 53 18 50 22 50 26 C 50 32 70 42 70 42 C 70 42 90 32 90 26 C 90 22 87 18 82 18 C 77 18 70 25 70 25 Z" fill="#fecaca" opacity="0.5" />
    </g>
    
    {/* Звездочки вокруг */}
    <path d="M 20 50 L 22 55 L 27 55 L 23 58 L 25 63 L 20 60 L 15 63 L 17 58 L 13 55 L 18 55 Z" fill="#fbbf24" className="animate-pulse" />
    <path d="M 115 45 L 117 50 L 122 50 L 118 53 L 120 58 L 115 55 L 110 58 L 112 53 L 108 50 L 113 50 Z" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <path d="M 110 80 L 111 83 L 114 83 L 112 85 L 113 88 L 110 86 L 107 88 L 108 85 L 106 83 L 109 83 Z" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '1s' }} />
    <path d="M 28 80 L 29 83 L 32 83 L 30 85 L 31 88 L 28 86 L 25 88 L 26 85 L 24 83 L 27 83 Z" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
    
    {/* Подушка под котиком */}
    <ellipse cx="70" cy="110" rx="25" ry="8" fill="#ec4899" opacity="0.3" />
  </svg>
);
