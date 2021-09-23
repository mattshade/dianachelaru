import { fetchEntries } from '@utils/contentfulPosts'

export default function Paintings({posts}) {

    return(
        <>
        {posts[0].artwork.map((p, i) => {
        return(<a key={i} data-lg-size="1600-1067" className="gallery-item" data-src={p.fields.file.url} href={p.fields.file.url} >
      <img alt={p.fields.title} className="img-responsive" src={p.fields.file.url} />
      </a>)})}
      hi
      </>
    )
}

export async function getStaticProps() {
    const res = await fetchEntries()
    const posts = await res.map((p) => {
      console.log('posts: ', p)
      return p
    })
  
    return {
      props: {
        posts,
      },
    }
  }
  