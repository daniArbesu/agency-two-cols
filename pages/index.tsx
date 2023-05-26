import { Container, GridLayout } from '../styles/sharedstyles';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <GridLayout>
            <LeftColumn
              title="The Design for your event"
              subtitle="We build state-of-the-art fashion, lifestyle, luxury eCommerce stores on Shopify & Shopify Plus by bridging the gap between branding and conversion."
            />
            <RightColumn />
          </GridLayout>
        </Container>
      </main>
    </>
  );
}
