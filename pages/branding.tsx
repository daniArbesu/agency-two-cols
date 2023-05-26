import LeftColumn from '@/components/LeftColumn';
import RightColumn from '@/components/RightColumn';
import { Container, GridLayout } from '@/styles/sharedstyles';

const branding = () => {
  return (
    <>
      <main>
        <Container>
          <GridLayout>
            <LeftColumn
              title="Tailor-made Branding"
              subtitle="We craft outstanding direct-to-consumer brands with the common ambition to offer true
          craftsmanship, timeless products that are carbon neutral – and this without ever making
          any concessions"
            />
            <RightColumn />
          </GridLayout>
        </Container>
      </main>
    </>
  );
};

export default branding;
