/* eslint-disable */
import { useContext, useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import wallet_pink from '../../assets/Elements/wallet_pink.png';
import metamask from '../../assets/Elements/metamask.png';
import safewIcon from '../../assets/Elements/safew_icon_32.png';
import WalletHover from '../Header/WalletHover/WalletHover';
import wallet from '../../assets/Elements/Design-2_0026_Layer-17.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import { ArchiveIcon } from '@heroicons/react/solid';
import '../Header/WalletHover/WalletHover.css';
import { useAccount } from '../../store/accounts';
import { truncateMiddle } from '../../utils/truncateMiddle';
import { disconnect } from 'process';

const backend = process.env.BACKEND_FQDN || 'localhost';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NANOERG_TO_ERG = 1000000000;
const TOKENID_NO_TEST =
  'afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032';
const TOKENID_FAKE_SIGUSD =
  '96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5';

function AddWallet(props) {
  const { t } = useTranslation();
  const [balance, setBalance] = useState(0);
  const [usdBalance, setUSDBalance] = useState(0);
  const [owlBalance, setOwlBalance] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [walletHover, setWalletHover] = useState(false);
  const [readOnlyNautilus, setReadOnlyNautilus] = useState(false);
  const [open, setOpen] = useState(true);

  const balanceValue = () => {
    return 0;
  };

  const { address, isConnected, hasMetamask, connect, disconnect } =
    useAccount();

  const toggleSelector = () => {
    if (!isConnected) setShowSelector(!showSelector);
  };

  const handleWalletTrue = () => {
    if (isConnected) setWalletHover(prev => !prev);
    else {
      setShowSelector(prev => !prev);
    }
  };

  const handleWalletFalse = () => {
    setWalletHover(false);
  };

  return (
    <>
      {!isConnected && showSelector && (
        <Menu as="div" className="mainDiv">
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="mainMenuItem"
              style={{ left: '-32px', marginTop: '3.5rem' }}
            >
              <div
                style={{ padding: '0.25rem 0 0.25rem', marginBottom: '1px' }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'item1' : 'item2',
                        'item3'
                      )}
                      onClick={() => connect()}
                    >
                      <img
                        src={metamask}
                        style={{ height: '30px', marginRight: '3rem' }}
                      />
                      Metamask
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}

      <div id="header-wallet-wrapper" onClick={handleWalletTrue}>
        <div id="header-wallet">
          {!isConnected && <img src={wallet_pink} id="header-wallet-image" />}
          <div id="wallet-connect">
            <span>
              {isConnected ? (
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <p
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    {owlBalance}
                    <span>ETH</span>
                  </p>
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'center',
                      gap: '3px'
                    }}
                  >
                    <img src={metamask} style={{ height: '20px' }} />
                    <p>{truncateMiddle(address, 3)}</p>
                  </span>
                </span>
              ) : hasMetamask ? (
                'Connect Wallet'
              ) : (
                'Install Metamask'
              )}
            </span>
          </div>
          {walletHover && isConnected && (
            <WalletHover
              disconnect={disconnect}
              balance={owlBalance}
              usdbalance={usdBalance}
              balanceSecond={balance}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AddWallet;
