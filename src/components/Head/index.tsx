import Head from 'next/head';
import { colors } from 'src/theme';
import { useRouter } from 'next/router';

const nodeEnv = process.env['NODE_ENV'];

const baseUrls = {
    production: 'https://showcase-ssr.appspot.com',
    development: 'http://localhost:3000',
    test: 'http://localhost:3000',
};

const baseUrl = baseUrls[nodeEnv];

type Props = {
    title: string;
    description: string;
    imageUrl?: string;
    imageAlt?: string;
};

const HeadComponent = ({
    title,
    description,

    imageUrl,
    imageAlt,
}: Props) => {
    const url = baseUrl + useRouter().asPath;
    return (
        <Head>
            {/* General */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <base href={baseUrl} />
            <meta name='theme-color' content={colors.blue} />

            {/* Facebook */}
            <meta property='og:title' content={title} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={url} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content='SSR Showcase' />
            <meta property='og:locale' content='en_EN' />
            <meta property='article:author' content='Elliot Revan' />
            {!!imageUrl && <meta property='og:image' content={imageUrl} />}
            {!!imageAlt && <meta property='og:image:alt' content={imageAlt} />}

            {/* Twitter */}
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content={url} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            {!!imageUrl && <meta property='twitter:image' content={imageUrl} />}
            {!!imageAlt && <meta property='og:image:alt' content={imageAlt} />}

            {/* <meta name='twitter:site' content='@site_account' /> */}
            {/* <meta name='twitter:creator' content='@individual_account' /> */}
        </Head>
    );
};

export default HeadComponent;
