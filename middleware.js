import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
   // 지원 할 언어 리스트
   locales: ['ko', 'en'],

   // 기본 언어로 /ko 없이 사용가능. /about으로 가면 한국어로 보여지지만 영어로 보려면
   // /en/about으로 가야한다.
   defaultLocale: 'ko',
});

export const config = {
   // Skip all paths that should not be internationalized. This example skips
   // certain folders and all pathnames with a dot (e.g. favicon.ico)
   matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
