import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  return (
    <html lang={locale}>
      <head>
        <title>example-bug-template-app-router</title>
      </head>
      <body>{children}</body>
    </html>
  );
}