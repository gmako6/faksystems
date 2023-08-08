import React from "react";
import { FaFacebook, FaGithubAlt, FaGoogle, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiArrowCircleRight } from "react-icons/hi";

const FAQs = () => {
  return (
    <div
      id="faqs"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:py-24 py-10"
    >
      <div className="container mx-auto px-5">
        <div>
          <div className="flex items-center justify-start  gap-2">
            <span className="p-2 bg-white rounded-full"></span>
            <span className="p-2 bg-red-500 rounded-full"></span>
            <h5 className="text-sm text-white">OUR SERVICES</h5>
          </div>
          <h1 className="md:text-4xl mt-5 tracking-wide font-bold text-center md:text-start text-slate-100 ">
            Find out more about our services.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:gap-20 gap-5 content-center">
          <div className="col-span-2">
            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-white   p-5  font-bold text-lg text-primary-content group-focus:bg-indigo-500 group-focus:text-secondary-content  flex justify-between items-center">
                <h1> 01. Managed IT Services.</h1>
                <div>
                  <HiArrowCircleRight size={32} />
                </div>
              </div>
              <div className="collapse-content bg-white text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  GreenGPT is a new community owned project inspired by chainGPT
                  with contract address deploy by chainGPT, audited by chainGPT
                  AI module, it combines AI and blockchain to create a
                  decentralized platform for environmental sustainability
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-white p-5 font-bold text-lg text-primary-content group-focus:bg-indigo-500 group-focus:text-secondary-content flex justify-between items-center ">
                <h1> 02. Cybersecurity.</h1>
                <div>
                  <HiArrowCircleRight size={32} />
                </div>
              </div>
              <div className="collapse-content bg-white text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  Staking offers individuals free and unlimited access to
                  ChainGPT without spending their $gGPT tokens with each
                  request. On the other hand, businesses and developers
                  interested in using the ChainGPT API must stake a spendable
                  amount of $gGPT that will reduce each API request
                </p>
              </div>
            </div>
            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-white p-5 font-bold text-lg text-primary-content group-focus:bg-indigo-500  group-focus:text-secondary-content  flex justify-between items-center">
                <h1> 03. Website Development & Hosting.</h1>
                <div>
                  <HiArrowCircleRight size={32} />
                </div>
              </div>
              <div className="collapse-content bg-white text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  You can get involved with GreenGPT by purchasing their
                  cryptocurrency, participating in their platform, and spreading
                  the word about their mission to promote environmental
                  sustainability through AI & blockchain technology.
                </p>
              </div>
            </div>

            <div tabIndex={0} className="collapse group mt-3">
              <div className="collapse-title bg-white p-5 font-bold text-lg text-primary-content group-focus:bg-indigo-500 group-focus:text-secondary-content  flex justify-between items-center">
                <h1>04. IT Consultants.</h1>
                <div>
                  <HiArrowCircleRight size={32} />
                </div>
              </div>
              <div className="collapse-content bg-white text-slate-900 group-focus:bg-base-200 group-focus:text-slate-900">
                <p className="p-5">
                  A fair launch will be held from there users can earn
                  cryptocurrency by participating in the Answer to earn mode,
                  where they answer questions and perform tasks related to
                  sustainability. Additionally, users can earn rewards for
                  staking their tokens or participating in other activities on
                  the platform.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-5">
            <div className="stats stats-horizontal md:stats-vertical shadow">
              <div className="stat">
                <a
                  href="https://github.com/greengpt_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaGoogle className="text-red-500" size={40} />
                  </div>
                  {/* <div className="stat-desc mt-2">@GreenGTP</div> */}
                </a>
              </div>
              <div className="stat">
                <a
                  href="https://t.me/greengpt_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaTelegram className="text-red-500" size={40} />
                  </div>
                  {/* <div className="stat-desc mt-2">@GreenGTP</div> */}
                </a>
              </div>
              <div className="stat">
                <a
                  href="https://t.me/greengpt_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaFacebook className="text-red-500" size={40} />
                  </div>
                  {/* <div className="stat-desc mt-2">@GreenGTP</div> */}
                </a>
              </div>
              <div className="stat">
                <a
                  href="https://twitter.com/gGPT_ai"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <div className="stat-value">
                    <FaTwitter className="text-red-500" size={40} />
                  </div>
                  {/* <div className="stat-desc mt-2">@GreenGTP</div> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
