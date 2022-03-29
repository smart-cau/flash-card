import { navigations } from 'constants/navigationData';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

function useNavigation() {
  const router = useRouter();
  const [route, setRoute] = useState(
    navigations.filter((item) => item.link === router.pathname)[0].name,
  );

  const selectAction = useCallback(
    (routeName: string) => {
      if (router.pathname === routeName) return;
      setRoute(routeName);
    },
    [route],
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
}

export default useNavigation;
