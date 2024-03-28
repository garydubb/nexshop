import Container from '@/components/themes/nexPressShop/Container';
import NexPressFooter from '@/components/themes/nexPressShop/Footer/Footer.component';
import NexPressNavbar from '@/components/themes/nexPressShop/Header/NavBar.component';
import Category from './Components/Category';
import HeroShop from './Components/Hero';
import HomeCta from './Components/HomeCta';
import HomeLogos from './Components/HomeLogos';
// Import the NodeByUri query here

export default function NexPressShopPage() {
  return (
    <>
      <NexPressNavbar />
      <Container>
        <HeroShop />
      </Container>
      <Container>
        <Category />
      </Container>
      <Container>
        <HomeLogos />
      </Container>
      <Container>
        <HomeCta />
      </Container>

      <NexPressFooter />
    </>
  );
}
