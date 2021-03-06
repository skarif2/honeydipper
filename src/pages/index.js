import Head from 'next/head'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Create Next App</title>
      <link
        rel='apple-touch-icon-precomposed'
        sizes='57x57'
        href='/favicon/apple-touch-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='114x114'
        href='/favicon/apple-touch-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='72x72'
        href='/favicon/apple-touch-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='144x144'
        href='/favicon/apple-touch-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='60x60'
        href='/favicon/apple-touch-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='120x120'
        href='/favicon/apple-touch-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='76x76'
        href='/favicon/apple-touch-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon-precomposed'
        sizes='152x152'
        href='/favicon/apple-touch-icon-152x152.png'
      />
      <link
        rel='icon'
        type='image/png'
        href='/favicon/favicon-196x196.png'
        sizes='196x196'
      />
      <link
        rel='icon'
        type='image/png'
        href='/favicon/favicon-96x96.png'
        sizes='96x96'
      />
      <link
        rel='icon'
        type='image/png'
        href='/favicon/favicon-32x32.png'
        sizes='32x32'
      />
      <link
        rel='icon'
        type='image/png'
        href='/favicon/favicon-16x16.png'
        sizes='16x16'
      />
      <link
        rel='icon'
        type='image/png'
        href='/favicon/favicon-128.png'
        sizes='128x128'
      />
      <meta name='application-name' content='Dhamaka Admin' />
      <meta name='msapplication-TileColor' content='#EB3E32' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/mstile-144x144.png'
      />
      <meta
        name='msapplication-square70x70logo'
        content='/favicon/mstile-70x70.png'
      />
      <meta
        name='msapplication-square150x150logo'
        content='/favicon/mstile-150x150.png'
      />
      <meta
        name='msapplication-wide310x150logo'
        content='/favicon/mstile-310x150.png'
      />
      <meta
        name='msapplication-square310x310logo'
        content='/favicon/mstile-310x310.png'
      />
    </Head>

    <main>
      <h1 className='title'>
        Welcome to <a href='https://nextjs.org'>Honeydipper</a>
      </h1>
    </main>

    <style jsx>{`
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #F9B80F;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
