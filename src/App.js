import './App.css';
import Notification from './components/notification/Notification';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import Product from './components/product/Product';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div class="overlay" data-overlay></div>
      <Notification />
      <Header />
      <main>
        <Banner />
        <Category />
        <Product />
        <Testimonials />
      </main>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
