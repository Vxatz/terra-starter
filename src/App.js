import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import Menu from './components/Menu';
import WalletAddress from './components/WalletAddress';


function App() {

  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect Wallet
          </button>
        </div>
      )
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect Wallet
        </button>
      )
    }
  }

  console.log("Wallet status: ", status);
  console.log("Available connections: ", availableConnectTypes);
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>☘️  Alafouzos vs All ☘️ </h1>
          <p>Greek SuperLeague War - Defend the title</p>
        </div>
        <WalletAddress />
      </header>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
      <div>
        <img
          src="https://i.giphy.com/media/1RhzZ0bWaXJavq8L5l/giphy.webp"
          alt="Savvidis gif"
        />
      </div> 
      )}

      {status === WalletStatus.WALLET_CONNECTED && (
        <div className="game-menu-container">
          <Menu />
        </div>
      )}
      {renderConnectButton()}
    </main>
  );
}

export default App;
