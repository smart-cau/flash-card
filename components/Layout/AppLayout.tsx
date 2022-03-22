import NavBar from 'components/NavBar/NavBar';
import TabBar from 'components/TabBar/TabBar';
import { navigations } from 'constants/navigationData';
import useNavigation from 'hooks/useNavigation';
// NavBar & TabBar 출처 : https://dev.to/franciscomendes10866/create-a-responsive-navbar-using-react-and-tailwind-3768
function AppLayout({ children }) {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div>
      <NavBar
        navigationData={navigations}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <TabBar
        navigationData={navigations}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div
        className={'my-0 mx-auto max-w-full lg:max-w-screen-lg px-5 lg:px-0 '}
      >
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
