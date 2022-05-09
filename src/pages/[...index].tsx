import { useRouter } from 'next/router';
import Home from 'src/components/pages/Home';
// import Component404 from 'src/components/pages/Component404';

export default function App(): JSX.Element {
  const { index } = useRouter().query;

  if (index?.[0] === 'home') {
    return <Home />;
  } else {
    // return <Component404 />;
    return <div></div>;
  }
}

App.props = {
  layout: 'main',
};
