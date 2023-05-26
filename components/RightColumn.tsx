import styled from 'styled-components';
import { Column } from '../styles/sharedstyles';
import WorkCard from './WorkCard';
import { featuredWorkEvents } from '../utils/featuredWorkEvents';
import LanguageSelector from './LanguageSelector';
import BrandingSwitcher from './BrandingSwitcher';
import FeaturedClients from './FeaturedClients';
import Footer from './Footer';
import FeaturedNumbers from './FeaturedNumbers';

const RightColumnWrapper = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  footer {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    footer {
      display: block;
    }
  }
`;

const ColumnHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const FeaturedWork = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RightColumn = () => {
  return (
    <RightColumnWrapper>
      <ColumnHeader>
        <LanguageSelector />
        <BrandingSwitcher />
      </ColumnHeader>
      <FeaturedWork>
        {featuredWorkEvents.map(({ id, title, description, img, link }) => (
          <li key={id}>
            <WorkCard link={link} title={title} description={description} img={img} />
          </li>
        ))}
      </FeaturedWork>
      <FeaturedClients />
      <FeaturedNumbers />
      <Footer />
    </RightColumnWrapper>
  );
};

export default RightColumn;
