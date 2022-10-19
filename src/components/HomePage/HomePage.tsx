import React from 'react';
import './HomePage.css';
import image1 from '../../assets/Elements/Design-2_0000_Layer-21.png';
import topSectionRightImg from '../../assets/Elements/homePageRightImg.png';

const HomePage = () => {
  return (
    <div className="mx-2 lg:mx-0 max-w-full flex flex-col justify-center xl:items-start xl:ml-20 items-center ">
      <header
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #190551,#420d7c)'
        }}
        className="border-4 border-[#bd0b83] rounded-[25px] max-w-[1400px] w-[80%] 2xl:w-[90%] flex flex-col lg:flex-row lg:gap-0 xl:gap-12 justify-evenly lg:justify-between items-center object-contain rounded-3xl h-[600px] text-white"
      >
        <div className="lg:text-left lg:h-full lg:flex lg:flex-col lg:justify-between lg:ml-20">
          <div className="top-para hidden lg:block mt-4">
            <p>Hot right</p>
            <p>now!</p>
          </div>
          <div className="mb-8">
            <div className="font-semibold leading-relaxed tracking-wider mb-4">
              <h1 className="text-sm lg:text-5xl mb-4">Win 100$ and</h1>
              <h1 className="text-5xl">5 free spins!</h1>
            </div>
            <p className="hidden lg:block mb-4">
              Have fun in a decentralized way and enjoy <br />
              the freedom of the blockchain!
            </p>

            <div className="w-full h-full">
              <button
                style={{
                  backgroundImage: 'linear-gradient(to right, #420d7c,#bd0b83)',
                  lineHeight: '1.6'
                }}
                className="w-[60%] h-[40px] lg:w-[200px] lg:h-[50px] rounded-3xl text-lg "
              >
                CLAIM HERE
              </button>
            </div>
          </div>
        </div>

        <img
          src={topSectionRightImg}
          className="lg:mr-14 h-auto w-[60vw] sm:w-[55vw] md:w-[45vw] lg:w-[24vw] xl:w-[28vw] max-w-[340px] lg:max-w-[600px] 2xl:w-[32vw] "
        />
      </header>
      <div className="w-[90%] lg:w-[100%] xl:w-[80%] 2xl:w-[90%] flex flex-col xl:flex-row items-center mt-[25px] lg:gap-4">
        <div className="mt-[2rem] text-white bg-[#1f0452] border-[5px] border-[#bd0b83] rounded-[25px] w-[90%] mt-0 lg:w-[80%] xl:w-[60%] h-[150px] sm:h-[180px] flex flex-col justify-center ">
          <div className="bottom-top-section ml-[15px]">
            <h2>Leaderboard</h2>
          </div>

          <div className="table-div w-full">
            <table>
              <tbody>
                <th>
                  <span>Address</span>
                  <span>Amount</span>
                  <span className="hidden lg:inline">TXID</span>
                </th>

                {/* {map the table rows here} */}

                <tr>
                  <td>
                    <span>2hRSbf...FKbhnz</span>
                    <span>1534 ERG</span>
                    <span className="hidden lg:inline">kjj3nDS...d342sz</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span>2hRSbf...FKbhnz</span>
                    <span>1534 ERG</span>
                    <span className="hidden lg:inline">kjj3nDS...d342sz</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-evenly text-white bg-[#1f0452] border-[5px] border-[#bd0b83] rounded-[25px] w-[90%] lg:w-[80%] xl:w-[45%] h-[150px] sm:h-[180px] mt-[20px] lg:mt-0">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2
                style={{
                  textAlign: 'start',
                  marginLeft: '15px',
                  padding: '0',
                  top: 0
                }}
              >
                Popular games
              </h2>
              <p
                style={{
                  textAlign: 'start',
                  marginLeft: '15px',
                  padding: '0',
                  top: 0
                }}
              >
                Slots
              </p>
            </div>

            <button className="mb-2 ml-[15px] w-[90%] h-[38px] border-2 border-[#bd0b83] rounded-2xl ">
              Play it now
            </button>
          </div>

          <img
            src={image1}
            className="min-w-[150px] max-w-[200px] w-[25%] sm:w-[22%] lg:w-[15vw] mb-2 h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
