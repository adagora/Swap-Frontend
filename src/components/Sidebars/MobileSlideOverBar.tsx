import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Homepage from '../../assets/Elements/Design-2_0039_Layer-5.png';
import Games from '../../assets/Elements/Design-2_0037_Layer-7.png';
import Bonuses from '../../assets/Elements/Design-2_0036_Layer-8.png';
import Rules from '../../assets/Elements/Design-2_0035_Layer-9.png';
import P2P from '../../assets/Elements/Design-2_0038_Layer-6.png';
import Coinflip from '../../assets/Elements/Design-2_0051_Layer-11.png';
import Blackjack from '../../assets/Elements/Design-2_0050_Layer-12.png';
import Random from '../../assets/Elements/Design-2_0049_Layer-13.png';
import Swapicon from '../../assets/Elements/swap-icon.png';

export default function MobileSlideOverBar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {!open && (
        <div
          className="fixed inset-y-0 left-0 top-[50%] max-w-full pl-5 text-gray-100 cursor-pointer hover:text-[#d70a84]"
          onClick={() => setOpen(true)}
        >
          <HiOutlineChevronDoubleRight size={32} />
        </div>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-[#d70a84] bg-opacity-20 backdrop-blur-sm transition-opacity" />
            </Transition.Child>

            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-sm">
                  <div
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom left, #d70a84, #51127f)'
                    }}
                    className="flex h-full flex-col  py-6 shadow-xl"
                  >
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {' '}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-y-auto flex justify-center pointer-events-auto relative flex-1 px-4 sm:px-6">
                      <div className="border-2 border-2 rounded-[25px] border-gray-200 w-[90%] h-[750px] flex flex-col gap-4 justify-center items-center mt-4 sm:text-sm lg:text-lg text-white font-medium">
                        <Link
                          to="/"
                          className="hover:bg-white hover:text-[#d70a84] h-16 rounded-t-[22px] w-full flex gap-4 justify-center items-center "
                        >
                          <img src={Homepage} className=" h-[2vh] w-auto " />
                          {t('home_page')}
                        </Link>

                        <Link
                          to="/soon"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img src={Games} className="h-[2vh] w-auto" />
                          {t('games')}
                        </Link>
                        <Link
                          to="/stake"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={Bonuses}
                            className="pr-[15px] h-[2vh] w-auto "
                          />
                          {t('stake')}
                        </Link>
                        <Link
                          to="/swap"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={Swapicon}
                            className="pr-[15px] h-[2vh] w-auto "
                          />
                          {t('swap')}
                        </Link>
                        <Link
                          to="/soon"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={Rules}
                            className="pr-[15px] h-[2vh] w-auto "
                          />
                          {t('rules')}
                        </Link>
                        <Link
                          to="/soon"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={P2P}
                            className="pr-[15px] h-[2vh] w-auto "
                          />
                          {t('p2p_betting')}
                        </Link>
                        <span className="flex justify-center items-center font-normal h-16">
                          Popular Games
                        </span>
                        <Link
                          to="/games/coinflip"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={Coinflip}
                            className="hover:bg-white hover:text-[#d70a84] h-[45px] w-full pr-[15px] h-[2vh] w-auto "
                          />
                          {t('coinflip')}
                        </Link>
                        <Link
                          to="/games/roulette"
                          className="hover:bg-white hover:text-[#d70a84] h-16 w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={Blackjack}
                            className="pr-[15px] h-[2vh] w-auto "
                          />
                          {t('blackjack')}
                        </Link>
                        <Link
                          to="/soon"
                          className="hover:bg-white hover:text-[#d70a84] h-16 rounded-b-[22px] w-full flex gap-4 justify-center items-center "
                        >
                          <img
                            src={Random}
                            className="pr-[15px] h-[2vh] w-auto "
                          />
                          {t('random')}
                        </Link>
                      </div>
                      {/* <div className="absolute inset-0 px-4 sm:px-6">
												<div
													className="h-full border-2 border-dashed border-gray-200"
													aria-hidden="true"
												/>
											</div> */}
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
