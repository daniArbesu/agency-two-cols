import styled from 'styled-components';
import { Column } from '../styles/sharedstyles';
import WorkCard from './WorkCard';
import { featuredWorkEvents } from '../utils/featuredWorkEvents';

const RightColumnWrapper = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const LanguageSelector = styled.div`
  font-size: 13px;

  a {
    padding: 6px 12px;
    opacity: 0.5;

    &.active {
      opacity: 1;
    }
  }
`;

const BrandingSwitcher = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  padding: 4px;
  font-size: 13px;
  line-height: 1.2;
  border-radius: 200px;
  background-color: #dadada66;
  backdrop-filter: blur(4px);

  a {
    padding: 6px 11px;
    border-radius: 20px;
    transition: 200ms;

    &.active {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.background};
    }
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
        <LanguageSelector>
          <a href="/" className="active">
            EN
          </a>
          | <a href="/">ES</a>
        </LanguageSelector>
        <BrandingSwitcher>
          <a href="/" className="active">
            Events
          </a>
          <a href="/branding">Branding</a>
        </BrandingSwitcher>
      </ColumnHeader>
      <FeaturedWork>
        {featuredWorkEvents.map(({ id, title, description, img, link }) => (
          <li key={id}>
            <WorkCard
              link={link}
              title={title}
              description={description}
              img={img}
            />
          </li>
        ))}
      </FeaturedWork>
    </RightColumnWrapper>
  );
};

export default RightColumn;
