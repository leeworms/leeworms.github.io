export const languages = {
  en: 'English',
  ko: '한국어',
} as const;

export type Language = keyof typeof languages;

export const defaultLang = 'ko';

export const ui = {
  en: {
    '404.desc': '관련된 문서를 찾을 수 없습니다.',

    'nav.title': '나의 창고',
    'nav.writing': '끄적.log',
    'nav.writing.desc': '유용한 지식을 보관하는 공간',
    'nav.note': '에러.log',
    'nav.note.desc': '내가 만났던 에러들을 보관하는 공간',

    'index.name': '이재근',
    'index.desc':
        `<p>사회화 된 <b><a class="external-link" href="https://namu.wiki/w/INTP" target="_blank">INTP</a></b>, 4년 차 백엔드 개발자입니다.</p>` +
        `<p>사용자 중심의 개발을 선호하며 <b>쓸모 있는 기능 개발</b>과 <b>성능 개선</b>을 좋아합니다.</p>` +
        `<p>꾸준히 성장할 수 있도록 기록을 통한 저장 창고을 만들어보려고 합니다.</p>`,
    'index.currentWork': `<p>현재 에듀테크 플랫폼 <b><a class="external-link" href="https://www.etoos.com" target="_blank">이투스</a></b>에서 회원 도메인 백엔드를 개발하고 있습니다.</p>`,

    'footer.copyright': 'bepyan',
    'footer.copyright-url': 'https://github.com/bepyan/bepyan.me.v2',
  },
  ko: {
    '404.desc': '관련된 문서를 찾을 수 없습니다.',

    'nav.title': '나의 창고',
    'nav.writing': '끄적.log',
    'nav.writing.desc': '유용한 지식을 보관하는 공간',
    'nav.note': '에러.log',
    'nav.note.desc': '내가 만났던 에러들을 보관하는 공간',

    'index.name': '이재근',
    'index.desc':
      `<p>사회화 된 <b><a class="external-link" href="https://namu.wiki/w/INTP" target="_blank">INTP</a></b>, 4년 차 백엔드 개발자입니다.</p>` +
      `<p>사용자 중심의 개발을 선호하며 <b>쓸모 있는 기능 개발</b>과 <b>성능 개선</b>을 좋아합니다.</p>` +
      `<p>꾸준히 성장할 수 있도록 기록을 통한 저장 창고을 만들어보려고 합니다.</p>`,
    'index.currentWork': `<p>현재 에듀테크 플랫폼 <b><a class="external-link" href="https://www.etoos.com" target="_blank">이투스</a></b>에서 회원 도메인 백엔드를 개발하고 있습니다.</p>`,

    'footer.copyright': 'bepyan',
    'footer.copyright-url': 'https://github.com/bepyan/bepyan.me.v2',
  }
} satisfies Record<Language, { [key: string]: string }>;
