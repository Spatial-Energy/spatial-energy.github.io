import NextHead from 'next/head';

import { colors } from 'u9/utils/styles/theme';

export interface HeadProps {
  title: string;
  description?: string;
  ogType?: string;
  ogImage?: {
    url: string;
  };
}

const viewport = `width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0,maximum-scale=1.0, user-scalable=0', viewport-fit=cover`;

const Head: React.FunctionComponent<HeadProps> = ({
  title,
  description,
  ogType,
  ogImage,
}) => {

  return (
    <NextHead>
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />

      <meta name="theme-color" content={colors.black} />
      <meta name="msapplication-TileColor" content={colors.black} />
      <link rel="icon" href={'/favicon.ico'} />

      <meta property="og:type" content={ogType || ''} />
      <meta property="og:title" content={title || ''} />
      <meta property="og:description" content={description || ''} />
      {ogImage?.url && <meta property="og:image" content={ogImage.url} />}

      <meta name="viewport" content={viewport} />
    </NextHead>
  );
};

export default Head;
