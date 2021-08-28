import 'antd/dist/antd.css';
import 'styles/index.sass';
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import Header from 'components/common/header';
import Footer from 'components/common/footer';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className='main-container'>
        {/* <Header /> */}
        <div className='main-body'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  )

}

export default MyApp
