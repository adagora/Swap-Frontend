import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ArchiveIcon } from '@heroicons/react/solid';

import './WalletHover.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function WalletHover({
  disconnect,
  balanceSecond,
  usdbalance,
  balance
}) {
  const [open, setOpen] = useState(true);

  return (
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
        <Menu.Items className="mainMenuItem">
          <div style={{ padding: '0.25rem 0 0.25rem', marginBottom: '1px' }}>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'item1' : 'item2', 'item3')}
                >
                  <ArchiveIcon className="icon" aria-hidden="true" />
                  Wallet Ballance - {balance} ERG
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'item1' : 'item2', 'item3')}
                >
                  <ArchiveIcon className="icon" aria-hidden="true" />
                  Wallet Ballance - {usdbalance} USD
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'item1' : 'item2', 'item3')}
                >
                  <ArchiveIcon className="icon" aria-hidden="true" />
                  Wallet Ballance - {balanceSecond} ADA
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => disconnect()}
                  className={classNames(active ? 'item1' : 'item2', 'item3')}
                >
                  <ArchiveIcon className="icon" aria-hidden="true" />
                  Disconnect
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
