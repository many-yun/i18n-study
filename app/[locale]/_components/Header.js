import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Header = () => {
   const t = useTranslations('shared.header');

   return (
      <header className="flex justify-between px-3 py-3 border">
         <div>
            <Link href="/">{t('text-tools')}</Link>
         </div>
         <section className="flex gap-4">
            <Link href="/text-counter">{t('word-counter')}</Link>
            <Link href="/text-compare">{t('text-compare')}</Link>
         </section>
      </header>
   );
};
