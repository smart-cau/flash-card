import { HOME } from 'constants/navigationData';
import { useCallback, useState } from 'react';

function useNavigation() {
  const [route, setRoute] = useState(HOME);

  const selectAction = useCallback(
    (option: string) => {
      if (route === option) return;
      setRoute(option);
    },
    [route],
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
}

export default useNavigation;
