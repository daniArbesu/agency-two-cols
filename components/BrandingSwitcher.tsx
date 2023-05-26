import Link from 'next/link';
import styled from 'styled-components';

const BrandingSwitcherWrapper = styled.div`
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

const BrandingSwitcher = () => {
  return (
    <BrandingSwitcherWrapper className="branding-switcher">
      <Link href="/" className="active">
        Events
      </Link>
      <Link href="/branding">Branding</Link>
    </BrandingSwitcherWrapper>
  );
};

export default BrandingSwitcher;
