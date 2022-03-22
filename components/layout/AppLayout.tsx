import Header from 'components/header/Header';

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default AppLayout;
