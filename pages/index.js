import React, { useState, useCallback } from "react"
import Head from 'next/head'
import { fetchEntries } from '@utils/contentfulPosts'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from 'next/dynamic'
const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false
})
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Home({ posts }) {
  const paintingsHolder = []
  const paintings = posts[0].artwork.map((p, i) => {
    // console.log('paintings: ', p.fields?.file?.url)
    return (paintingsHolder.push({ src: `https:${p.fields?.file?.url}`, thumb: `https:${p.fields?.file?.url}?w=600`, responsive: `https:${p.fields?.file?.url}`, title: `${p.fields?.title}` }))
  })
  // console.log('paintingsHolder: ', paintingsHolder)
  // console.log('lg: ', LightGallery)
  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };

  const [items] = useState(paintingsHolder);
  const getItems = useCallback(() => {
    return items.map((item, i) => {
      return (
        <li
          key={i}
          data-lg-size={item.size}
          className="gallery-item"
          data-src={item.src}
          data-sub-html={item.title}
        >
          <img className="img-responsive" src={item.thumb} />
        </li>
      );
    });
  }, [items]);


  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>diana chelaru | fine art</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
      </Head>

      <main>

        <ul className={"gallery-container"}>
          <Header />
          <LightGallery
            id={"animated-thumbnails"}
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            thumbnail={false}
            licenseKey={'F216EF00-0E0049AE-8C365905-B584B23C'}
            animateThumb={false}
            zoomFromOrigin={true}
            allowMediaOverlap={true}
            toggleThumb={true}
          >
            {getItems()}
          </LightGallery>
        </ul>


      </main>

      <Footer />

      <style jsx>{`
        
      `}</style>

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
        .gallery-item { 
          cursor: pointer;
          padding: 3px 5px;
        }
        
        .gallery-item img {
          object-fit: cover;
          height: 5.5em;
          width: 5.5em;
          -webkit-transition: all .2s ease-in-out;
          -moz-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;            
        }

        .gallery-container {
          margin: 0 auto;
          max-width: 295px;
        }
        
        .gallery-container .lg-react-element  {
          display: flex;
          flex-wrap: wrap;
        }

        @media (min-width: 768px) {
          .gallery-item img {
            height: 8em;
            width: 8em;
          }
          .gallery-container {
            max-width: 690px;
          }
        }

        @media (min-width: 1200px) {
          .gallery-item img {
            height: 10em;
            width: 10em;
          }
          .gallery-container {
            max-width: 1200px;
          }
        }
      }
        

      `}</style>


    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}
