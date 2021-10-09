import { Switch, Route } from "react-router-dom";
import Wallet from "./Wallet";
import NftDetail from "./nftDetail";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Wallet />} />
        <Route exact path="/nft-detail/:id" render={() => <NftDetail />} />
      </Switch>
    </div>
  );
};

export default App;
