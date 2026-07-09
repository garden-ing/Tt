const fs = require('fs');
fs.mkdirSync('assets', { recursive: true });

// 손 흔드는 사람(🙋) 스타일 아바타 — 투명 배경, 32px. .ava 타일이 뒤 배경을 담당.
function avatar({ skin, skinShade, hair, shirt, long }) {
  const backHair = long
    ? `<path d="M8.3 13.4C8.3 8.3 11.7 5 16 5s7.7 3.3 7.7 8.4v6.9c0 1.3-1.9 1.4-2.1.1l-.8-5.2c0-2.6-1.9-4.3-4.8-4.3s-4.8 1.7-4.8 4.3l-.8 5.2c-.2 1.3-2.1 1.2-2.1-.1v-6.9Z" fill="${hair}"/>`
    : '';
  const frontHair = long
    ? `<path d="M9.1 13.6C9.1 9 12.2 6 16 6s6.9 3 6.9 7.6c-1.4-2-3.6-3.1-6.9-3.1s-5.5 1.1-6.9 3.1Z" fill="${hair}"/>`
    : `<path d="M8.9 13.7C8.9 8.9 12 5.7 16 5.7s7.1 3.2 7.1 8c-1.5-2.1-3.8-3.3-7.1-3.3S10.4 11.6 8.9 13.7Z" fill="${hair}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.4 32c0-6.3 4.8-10.9 10.6-10.9S26.6 25.7 26.6 32Z" fill="${shirt}"/>
  <rect x="13.4" y="17.4" width="5.2" height="6" rx="2.6" fill="${skinShade}"/>
  <path d="M10.6 24 5 10.6" stroke="${skin}" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M11 24.4 8.9 19.3" stroke="${shirt}" stroke-width="4" stroke-linecap="round"/>
  ${backHair}
  <circle cx="9.1" cy="14" r="1.35" fill="${skinShade}"/>
  <circle cx="22.9" cy="14" r="1.35" fill="${skinShade}"/>
  <circle cx="16" cy="13.6" r="7" fill="${skin}"/>
  ${frontHair}
  <circle cx="12.2" cy="16.2" r="1.15" fill="#F4A199" opacity=".55"/>
  <circle cx="19.8" cy="16.2" r="1.15" fill="#F4A199" opacity=".55"/>
  <circle cx="13.3" cy="13.9" r="0.95" fill="#3A2B28"/>
  <circle cx="18.7" cy="13.9" r="0.95" fill="#3A2B28"/>
  <path d="M13.8 16.5c.9 1 3.5 1 4.4 0" stroke="#3A2B28" stroke-width="1" stroke-linecap="round"/>
  <circle cx="4.9" cy="9.9" r="3.1" fill="${skin}"/>
  <circle cx="2.5" cy="11.3" r="1.25" fill="${skin}"/>
</svg>
`;
}

const SET = {
  'avatar-1.svg': { skin: '#F7CDA6', skinShade: '#EFBE93', hair: '#2C2A29', shirt: '#AEB6C2', long: false },
  'avatar-2.svg': { skin: '#F7CDA6', skinShade: '#EFBE93', hair: '#2C2A29', shirt: '#6C5CE7', long: true },
  'avatar-3.svg': { skin: '#D69A6A', skinShade: '#C6885A', hair: '#241F1D', shirt: '#3182F6', long: false },
  'avatar-4.svg': { skin: '#F7CDA6', skinShade: '#EFBE93', hair: '#E7C06A', shirt: '#3D8BF0', long: true },
  'avatar-5.svg': { skin: '#F7CDA6', skinShade: '#EFBE93', hair: '#EBC978', shirt: '#4A90E2', long: false },
  'avatar-6.svg': { skin: '#935B3B', skinShade: '#824E31', hair: '#3A2A22', shirt: '#7B5EE6', long: false },
};
for (const [name, cfg] of Object.entries(SET)) fs.writeFileSync('assets/' + name, avatar(cfg));
console.log('wrote', Object.keys(SET).length, 'avatars');
