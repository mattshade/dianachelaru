import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsletterForm from '@components/NewsletterForm'

const NewsletterSubscribe = () => {

    const MAILCHIMP_URL = "https://gmail.us5.list-manage.com/subscribe/post?u=3ef4a942ae42be16cbae3de0c&amp;id=fb02b3a54a";
  
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
        <div className="signUpForm">
            <h1>Join Our Mailing List!</h1>
            <MailchimpSubscribe
                url={ MAILCHIMP_URL }
                render={ ( props ) => {
                const { subscribe, status, message } = props || {};
                return (
                    <NewsletterForm
                    status={ status }
                    message={ message }
                    onValidated={ formData => subscribe( formData ) }
                    />
                );
                } }
            />
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
        .container {
          margin: 0 auto;
          max-width: 295px;
        }
        .signUpForm {
            margin: 0 auto;
            max-width: 600px;
            text-align: center;
        }
        .wp-block-button__link {
            background: #AAF0D1;
            color: #3e3f3a;
            border: none;
            padding:10px 20px;
            border-radius: 3px;
            font-size: 1.2em;
            cursor: pointer;
            -webkit-transition: all .2s ease-in-out;
            -moz-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
            width: 300px;
            margin: 20px 0px;
        }
        .wp-block-button__link:hover {
            background: #B9F2D9;
            color: black;
        }
        .mr-2 {
            padding: 10px 20px;
            font-size: 1em;
            width: 300px;
        }
        .newsletter-form-info {
            margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .container {
            max-width: 690px;
          }
          .wp-block-button__link, .mr-2 {
              width: 400px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 970px;
          }
        }
        }`}</style>

    </div>
    );
  };
  
  export default NewsletterSubscribe;

