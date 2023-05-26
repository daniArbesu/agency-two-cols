import styled from 'styled-components';
import { Container, GridLayout } from '../styles/sharedstyles';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

export default function Home() {
  return (
    <>
      <main>
        <Container>
          <GridLayout>
            <LeftColumn />
            <RightColumn />
          </GridLayout>
        </Container>
      </main>
    </>
  );
}
