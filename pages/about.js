import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'



const MyImage = (props) => {
  return (
    <Image      
      src="/profile.png"
      alt="Diana Chelaru"
      width={300}
      height={200}
    />
  )
}

function About() {
  return (      
      <div className="container">
        <Header />
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>diana chelaru | fine art</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
        </Head>
        <div className="aboutContents">
          <div className="profilePic">
            <MyImage />
          </div>
        <p>Diana Chelaru is an Expressionist artist and muralist whose work is known to delve into fragments of a secretive place where femininity and self are re-imagined — and triumph and vulnerability are laid bare.</p>

        <p>Her style is a unique blend of Symbolism, Human Allegory and Jugendstil ornamentation which results in a substantial body of highly moving and intensely decorated paintings, at the center of which stands the female figure.</p>

        <p>The feminine form is perhaps a hallmark subject of her works, they encompass much more than the reclamation of suppressed creativity, symbolic expression, and feministic re-interpretation. Figures look as if they are frozen into the rich flowering of modern ornament. The heightened sensuality of the decorative ornamentation almost obliterates the human figure, transforming extreme stylization and artifice into a meaningful and deeply symbolic visual expression.</p>
        <p>Her inspiration also draws upon her childhood in communist Romania - an experience and atmostphere that left her creative intuition stifled and unrealized.</p>

        <p>As an art student, Diana was offered the opportunity to work as a muralist and later on, she worked as a mural preservationist helping restore the elaborate 15th century frescoes of the Moldovita Monastery UNESCO World Heritage site. During this time, Diana not only learned the intricacies of old-world craftsmanship, but also the profound symbolism and spirituality in Byzantium art, which continue to influence her artistic sensibilities.</p>
        </div>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          min-height: -webkit-fill-available;
          font-family: 'Playfair Display', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        h1 {
          display: block;
        }
        ul {
          list-style: none;
          padding: 0px;
        }
        .profilePic {
          float: left;
          margin-right: 20px;
        }
        .container {
          margin: 0 auto;
          max-width: 295px;
        }
        @media (min-width: 768px) {
          .container {
            max-width: 690px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 970px;
          }
        }
        }`}</style>

    </div>
  )
}

export default About