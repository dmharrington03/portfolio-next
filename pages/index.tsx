import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Contact from '../components/contact'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const bio = "Hello! I'm Daniel, an undergraduate physics student at Tufts University. I am interested in pursuing condensed matter physics, specifically techniques relating to quantum computing theory and development, though I remain open and curious as I continue to learn and explore. I also plan to minor in computer science and mathematics. My goal is to use computing to supplement experimental and theoretical techniques to solve novel problems in physics. Outside of science, I love jazz and weightlifting. Read more about my work here or on my Github:"

  const research = "Currently, I am looking for a new internship/assistantship in any area of physics research, either for credit or experience."

  return (
    <>
      <Layout>
        <Head>
          <title>Daniel Harrington Portfolio</title>
        </Head>
        <Intro />
        <Container>
          <section>
            <div className="maintext relative uk-margin">
              <div className="text-sky-800 text-2xl">
                <h2 className="absolute block -left-8">#</h2>
                <h2 className="mt-10 mb-5">ABOUT ME</h2>
              </div>
              <p className="text-base text-neutral-600">{ bio }</p>
              <h3 className="text-neutral-700 mt-10 mb-2 uk-margin-small-bottom">CONTACT</h3>

              <Contact />

              {/* Text Section */}
              <h3 className="uk-margin-medium-top uk-margin-small-bottom">RESEARCH</h3>
              <h4 className="uk-margin-remove"><i>Open</i></h4>
              <p className="text-neutral-600 uk-margin-remove-top uk-margin-large-bottom">{ research }</p>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
