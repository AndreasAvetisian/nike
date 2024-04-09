import  {
  Hero,
  CustomerReviews,
  Footer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProducts
} from './sections';
import Nav from './components/Nav';

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:pad-l wide:pad-r pad-b">
        <Hero />
      </section>
      <section className="pad">
        <PopularProducts />
      </section>
      <section className="pad">
        <SuperQuality />
      </section>
      <section className="pad-x py-10">
        <Services />
      </section>
      <section className="pad">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue pad">
        <CustomerReviews />
      </section>
      <section className="pad-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black pad-x pad-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App