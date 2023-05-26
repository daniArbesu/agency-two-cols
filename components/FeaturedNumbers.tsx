import { SectionWrapper } from '@/styles/sharedstyles';
import styled from 'styled-components';

const Subtitle = styled.h3`
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.03em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
    line-height: 1.4;
  }
`;

const NumbersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
`;

const FactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 40px;
    line-height: 1.6;
    letter-spacing: -0.03em;
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
  }

  p {
    font-size: 12px;
    line-height: 1.6;
    letter-spacing: 0.01em;
    opacity: 0.5;
  }
`;

const FeaturedNumbers = () => {
  return (
    <SectionWrapper>
      <h2>Some Numbers</h2>
      <Subtitle>We love what we do & we do it with love</Subtitle>
      <NumbersWrapper>
        <FactWrapper>
          <h3>150</h3>
          <p>Designs for Weddings</p>
        </FactWrapper>
        <FactWrapper>
          <h3>150</h3>
          <p>Designs for Weddings</p>
        </FactWrapper>
        <FactWrapper>
          <h3>150</h3>
          <p>Designs for Weddings</p>
        </FactWrapper>
        <FactWrapper>
          <h3>150</h3>
          <p>Designs for Weddings</p>
        </FactWrapper>
        <FactWrapper>
          <h3>150</h3>
          <p>Designs for Weddings</p>
        </FactWrapper>
        <FactWrapper>
          <h3>150</h3>
          <p>Designs for Weddings</p>
        </FactWrapper>
      </NumbersWrapper>
    </SectionWrapper>
  );
};

export default FeaturedNumbers;
