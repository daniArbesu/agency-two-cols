import Link from 'next/link';
import { useRouter } from 'next/router';
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

const routes = [
  {
    name: 'Events',
    path: '/'
  },
  {
    name: 'Branding',
    path: '/branding'
  }
];

const BrandingSwitcher = () => {
  const { asPath } = useRouter();

  return (
    <BrandingSwitcherWrapper className="branding-switcher">
      {routes.map(({ name, path }, index) => (
        <Link href={path} className={asPath === path ? 'active' : ''} key={index}>
          {name}
        </Link>
      ))}
    </BrandingSwitcherWrapper>
  );
};

export default BrandingSwitcher;
