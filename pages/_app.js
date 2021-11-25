import Layout from "../layouts/Main";
import { Provider } from "context";

import "../styles/css/index.css";

const App = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
