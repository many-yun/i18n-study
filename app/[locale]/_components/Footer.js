import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Expandable from './Expandable';

export const Footer = () => {
   const t = useTranslations('shared.footer');

   return <Expandable title={t('text-tools')}></Expandable>;
};
