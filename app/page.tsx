"use client";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <nav className='w-full'>
<div className="w-10/12 flex justify-between p-3">
<Link href="..">

<Image alt='logo' width="150" height="28" src="/logo.png"/>


</Link>
<div className='flex justify-between'>
<ul>
  <li>
    Home
  </li>
</ul>
</div>
</div>

    </nav> */}

      <nav className="lg:block sm:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="..">
                  <Image alt="logo" width="150" height="28" src="/logo.png" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Dropdown
                  label="Our Products"
                  className="border-0 focus-within:border-0"
                >
                  <Dropdown.Item>
                    <Link
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white rounded  md:p-0 dark:text-white "
                      aria-current="page"
                    >
                      New Products
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="signup flex  text-white gap-2">
            <Link href="" className="px-3 py-3 ">
              Log in
            </Link>
            <Link
              href=".."
              className="signInBtn px-3 py-3 rounded-md hover:bg-blue-500 hover:translate-x-2 transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <Navbar fluid={true} rounded={false} className="lg:hidden">
        <Navbar.Brand>
          <Link href="..">
            <Image alt="logo" width="150" height="28" src="/logo.png" />
          </Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-white ">
          <div className="">
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">Our Products</Navbar.Link>
            <Navbar.Link href="/navbars">Resources</Navbar.Link>
          </div>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>

          <div className="signup flex  text-white gap-2">
            <Navbar.Link href="" className="px-3 py-3 ">
              Log in
            </Navbar.Link>
            <Navbar.Link
              href=".."
              className="signInBtn px-3 py-3 rounded-md hover:bg-blue-500 hover:translate-x-2 transition-all"
            >
              Sign Up
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="banner"
      >
        <motion.section className=" max-w-screen-xl ">
          <div className="lg:grid lg:grid-cols-2 lg:grid-flow-col sm:flex  sm:flex-col-reverse md:flex  md:flex-col-reverse ">
            <motion.div
              initial={{
                x: -1000,
              }}
              animate={{
                x: [2, 0],
              }}
              transition={{
                delay: 0.1,
                duration: 2,
              }}
              className="col mt-12 "
            >
              <section className=" ">
                <motion.p
                  animate={{
                    x: [2, 0],
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 3,
                  }}
                  className="font-bold lg:text-5xl  text-white mt-9 md:mt-0 md:w-[83%] sm:mx-auto  sm:text-3xl sm:w-[90%] md:mx-auto"
                >
                  Your Supercharged <br /> Design Workflow.
                </motion.p>
                <p className=" font-thin text-left faintText mt-9  text-lg md:w-[83%] md:mx-auto sm:mx-auto sm:w-[90%]">
                  We’ve been told it is not possible to overachieve our
                  customers’ expectations. We have not reinvented the wheel, we
                  decided to build upon it.
                </p>
                <div className="mt-12 md:w-[83%] md:mx-auto  sm:mx-auto sm:w-[90%] ">
                  <motion.button
                    initial={{
                      x: 0,
                    }}
                    animate={{
                      x: [0, 3, 0],
                      y: [2, 0],
                    }}
                    whileHover={{
                      scale: 1.3,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 2,
                    }}
                    className="signInBtn sm:w-full md:w-1/4 lg:w-1/4 transition ease-in-out delay-150 bg-blue-500 hover:translate-y-1 hover:scale-110 hover:bg-indigo duration-150 px-3 py-3  font-bold rounded-md text-slate-200  "
                  >
                    Get Started
                  </motion.button>
                </div>

                <p className="mt-20 text-slate-200 text-sm md:w-[83%] md:mx-auto  sm:w-[90%] sm:text-start sm:mx-auto">
                  Who supports us
                </p>
                <footer className="md:w-[83%] md:mx-auto pb-7 sm:w-[90%] sm:text-start sm:mx-auto ">
                  <ul className="lg:flex md:flex gap-5 mt-5 sm:grid sm:grid-cols-2  sm:gap-3">
                    <li>
                      {" "}
                      <Link href="">
                        <Image
                          className="sm:w-[55%] md:w-[70%] lg:w-[100%]"
                          sizes="(min-width:200px), 80vw"
                          alt="git"
                          width="110"
                          height="28"
                          src="/git.png"
                        />
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link href="">
                        <Image
                          className="sm:w-[55%] md:w-[70%] lg:w-[100%]"
                          alt="git"
                          width="110"
                          height="28"
                          src="/slack.png"
                        />
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link href="">
                        <Image
                          className="sm:w-[55%] md:w-[70%] lg:w-[100%]"
                          sizes="(min-width:200px), 80vw"
                          alt="git"
                          width="110"
                          height="28"
                          src="/netflix.png"
                        />
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link href="">
                        <Image
                          className="sm:w-[55%] md:w-[70%] lg:w-[100%]"
                          sizes="(min-width:200px), 80vw"
                          alt="git"
                          width="112"
                          height="28"
                          src="/paypal.png"
                        />
                      </Link>
                    </li>
                  </ul>
                </footer>
              </section>
            </motion.div>

            <motion.div
              initial={{
                y: -10000,
              }}
              animate={{
                y: [0, 2, 0],
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="col md:mx-auto "
            >
              <Image
                alt="graphic"
                className="object-fit"
                sizes="(max-width:768px) 70vw, (max-width:320px) 70vw"
                src="/img1.png"
                width="528"
                height="528"
              />
            </motion.div>
          </div>
        </motion.section>
      </motion.main>

      <motion.section
        className="text-center mt-4 sm:mx-auto sm:w-[90%] "
        whileInView={{
          opacity:1,
          
        }}
        initial={{
          x: -10000,
          opacity:0
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        animate={{
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <motion.h1 className="font-bold text-3xl text-center mt-12 sm:text-2xl">
          Messaging for all
        </motion.h1>
        <p className="mt-2 ">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }
      
      }
      transition={{
        delay: 0.2,
        duration: 0.2,
      }}
        className="lg:grid lg:grid-cols-3  gap-y-12 gap-x-5 max-w-screen-xl md:w-[80%] mx-auto mt-5 md:grid-cols-2
      sm:mx-auto sm:w-[90%] sm:grid-cols-1
      "
      >
        <motion.div
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0
            }}

            transition={{
              delay: 0.6,
              duration: 0.4,
            }}
        >
          <section>
            <Image
              alt="icon"
              src="/icon1.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="48"
              height="48"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Easier Work Organization
            </h1>
            <p className="textGray font-normal mt-5 minHeight">
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.{" "}
            </p>
          </section>

          <Link
            href=".."
            className="flex blue mt-5 gap-3 font-bold p-2 my-auto group"
          >
            Learn More{" "}
            <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{
            x: -1000,
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
        >
          <section>
            <Image
              alt="icon"
              src="/icon2.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="48"
              height="48"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Fast Connection
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Collaboratively administrate turnkey service channels whereas
              virtual e-tailers. This is objectively scalable metrics whereas.
            </p>
          </section>

          <Link
            href=".."
            className="flex blue mt-5 gap-3 font-bold p-2 my-auto group"
          >
            Learn More{" "}
            <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </motion.div>

        <motion.div
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0
            }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
        >
          <section>
            <Image
              alt="icon"
              src="/icon3.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="48"
              height="48"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Streamlined Processes
            </h1>
            <p className="textGray font-normal mt-5 minHeight">
              Phosfluorescently engage worldwide methodologies with web-enabled
              Interactively coordinate.{" "}
            </p>
          </section>

          <Link
            href=".."
            className="flex blue mt-5 gap-3 font-bold p-2 my-auto group"
          >
            Learn More{" "}
            <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </motion.div>

        <motion.div
           initial={{
            x: -1000,
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <section>
            <Image
              alt="icon"
              src="/icon4.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="48"
              height="48"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Easier Integrations
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Completely pursue scalable customer try through potentialities.
              Pontificate portals installed. Efficiently unleash information.{" "}
            </p>
          </section>

          <Link
            href=".."
            className="flex blue mt-5 gap-3 font-bold p-2 my-auto group"
          >
            Learn More{" "}
            <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </motion.div>

        <motion.div
           initial={{
            x: -1000,
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
        >
          <section>
            <Image
              alt="icon"
              src="/icon5.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="48"
              height="48"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Marketing Analytics
            </h1>
            <p className="textGray font-normal mt-5 minHeight">
              Phosfluorescently engage worldwide methodologies with web-enabled
              Interactively coordinate..{" "}
            </p>
          </section>

          <Link
            href=".."
            className="flex blue mt-5 gap-3 font-bold p-2 my-auto group"
          >
            Learn More{" "}
            <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{
            x: -1000,
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
        >
          <section>
            <Image
              alt="icon"
              src="/icon6.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="48"
              height="48"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Workflow Builder
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Collaboratively administrate turnkey service channels whereas
              virtual e-tailers. This is objectively scalable metrics whereas.{" "}
            </p>
          </section>

          <Link
            href=".."
            className="flex blue mt-2 gap-3 font-bold p-2 my-auto group"
          >
            Learn More{" "}
            <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
              <AiOutlineArrowRight />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.section
        className="text-center mt-4 sm:mx-auto sm:w-[90%] "
        whileInView={{
          opacity:1,

        }}
       
        initial={{
          x: -1000,
          opacity:0
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        animate={{
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <motion.h1 className="font-bold text-3xl text-center mt-12">
          Redefining Product Features
        </motion.h1>
        <p className="mt-2">
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence on cross-platform
          integration.
        </p>
      </motion.section>

      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-screen-xl mx-auto mt-8 md:w-[80%] container sm:mx-auto sm:w-[90%]"
      >
        <div className="lg:grid lg:grid-cols-2  gap-x-4 md:flex sm:max-md:gap-y-6 md:max-lg:gap-y-6 md:flex-col-reverse   md-mx-auto sm:flex sm:flex-col-reverse sm-gap-x-4 p-8">
          <section className=" flex flex-col gap-y-8 md:mx-auto md:mt-8">
            <motion.div className="col flex gap-x-6 ">
              <Image
                alt="icon"
                src="/icon7.png"
                className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out sm:hidden"
                width="44"
                height="44"
              />

              <Image
                alt="icon"
                src="/icon8.png"
                className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out hidden sm:block"
                width="44"
                height="44"
              />
              <aside>
                <h1 className="font-bold text-xl text-slate-900 ">
                  Easier Work Organization
                </h1>
                <p className="textGray font-normal mt-5 minHeight">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.{" "}
                </p>

                <Link
                  href=".."
                  className="flex blue mt-1 gap-3 font-bold  my-auto group sm:mt-8"
                >
                  Learn More{" "}
                  <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle  ">
                    <AiOutlineArrowRight />
                  </span>
                </Link>
              </aside>
            </motion.div>

            <motion.div className="col flex gap-x-6">
              <Image
                alt="icon"
                src="/icon8.png"
                className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out"
                width="44"
                height="44"
              />

              <aside>
                <h1 className="font-bold text-xl text-slate-900 ">
                  Easier Work Organization
                </h1>
                <p className="textGray font-normal mt-5 minHeight">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>

                <Link
                  href=".."
                  className="flex blue mt-2 gap-3 font-bold  my-auto group sm:mt-8"
                >
                  Learn More{" "}
                  <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
                    <AiOutlineArrowRight />
                  </span>
                </Link>
              </aside>
            </motion.div>

            <motion.div className="col flex gap-x-6">
              <Image
                alt="icon"
                src="/icon9.png"
                className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out"
                width="44"
                height="44"
              />

              <aside>
                <h1 className="font-bold text-xl text-slate-900 ">
                  Easier Work Organization
                </h1>
                <p className="textGray font-normal mt-5 minHeight">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.{" "}
                </p>

                <Link
                  href=".."
                  className="flex blue mt-1 gap-3 font-bold  my-auto group sm:mt-8"
                >
                  Learn More{" "}
                  <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
                    <AiOutlineArrowRight />
                  </span>
                </Link>
              </aside>
            </motion.div>
          </section>

          <section className=" md:mx-auto sm:max-lg:mt-5 ">
            <Image
              sizes="(max-width:768px) 80vw, (max-width:320px) 80vw"
              alt="photo"
              src="/Photo.png"
              className=""
              width="560"
              height="560"
            />
          </section>
        </div>
      </motion.main>

      <div className="grayBg  pb-5 sm:pt-5">
        <motion.section
          className="max-w-screen-xl mx-auto pt-12 sm:mx-auto  sm:w-[90%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="lg:grid lg:grid-cols-2  gap-x-4 md:grid-cols-1  md:gap-y-8 sm:grid-cols-1 sm:gap-y-8">
            <motion.section
              className="mx-auto"
              initial={{
                x: -10000,
              }}
              animate={{
                x: 0,

              }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
            >
              <Image
                alt="photo"
                src="/Photo2.png"
                className="object-fill"
                width="560"
                height="560"
              />
            </motion.section>

            <section className=" flex flex-col gap-y-8 mx-auto my-auto">
              <motion.div
                initial={{
                  x: -10000,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: "0.6",
                  delay: 0.4,
                }}
                className="col flex gap-x-6"
              >
                <Image
                  alt="icon"
                  src="/icon7.png"
                  className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out"
                  width="44"
                  height="44"
                />

                <aside>
                  <h1 className=" font-semibold text-2xl  text-slate-200  ">
                    Explore ideas together
                  </h1>
                  <p className="textGray font-normal mt-3 minHeight textNeutralGray">
                    Engage audience segments and finally create actionable
                    insights. <br /> Amplify vertical integration.{" "}
                  </p>

                  <Link
                    href=".."
                    className="flex blue  gap-x-3 font-bold sm:mt-8  group"
                  >
                    Learn More{" "}
                    <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
                      <AiOutlineArrowRight />
                    </span>
                  </Link>
                </aside>
              </motion.div>

              <motion.div
                initial={{
                  x: -10000,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: "0.6",
                  delay: 0.7,
                }}
                className="col flex gap-x-6"
              >
                <Image
                  alt="icon"
                  src="/icon8.png"
                  className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out"
                  width="44"
                  height="44"
                />

                <aside>
                  <h1 className=" font-semibold text-2xl  text-slate-200  ">
                    Ship better outcomes
                  </h1>
                  <p className="textGray font-normal mt-3 minHeight textNeutralGray">
                    Engage audience segments and finally create actionable
                    insights. <br /> Amplify vertical integration.{" "}
                  </p>

                  <Link
                    href=".."
                    className="flex blue  gap-x-3 font-bold sm:mt-8  group"
                  >
                    Learn More{" "}
                    <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
                      <AiOutlineArrowRight />
                    </span>
                  </Link>
                </aside>
              </motion.div>

              <motion.div
                initial={{
                  x: -10000,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: "0.6",
                  delay: 0.8,
                }}
                className="col flex gap-x-6"
              >
                <Image
                  alt="icon"
                  src="/icon9.png"
                  className=" cursor-pointer object-contain mb-auto hover:rotate-180 transition-all ease-in-out"
                  width="44"
                  height="44"
                />

                <aside>
                  <h1 className=" font-semibold text-2xl  text-slate-200  ">
                    Bring those ideas to life
                  </h1>
                  <p className="textGray font-normal mt-3 minHeight textNeutralGray">
                    Engage audience segments and finally create actionable
                    insights. <br /> Amplify vertical integration.{" "}
                  </p>

                  <Link
                    href=".."
                    className="flex blue  gap-x-3 font-bold sm:mt-8  group"
                  >
                    Learn More{" "}
                    <span className="  group-hover:translate-x-4 : hover:translate-x-4 my-auto transition-all duration-300 ease-in-out blue text-xl font-bold align-middle ">
                      <AiOutlineArrowRight />
                    </span>
                  </Link>
                </aside>
              </motion.div>
            </section>
          </div>
        </motion.section>
      </div>
      <motion.section
        className="text-center mt-4 lg:hidden md:block sm:block  sm:w-[90%] sm:mx-auto"
        initial={{ x: -10000,opacity:0 }}
     
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        animate={{
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <motion.h1 className="font-bold text-3xl text-center mt-12 sm:text-xl ">
          What Our Customers Say
        </motion.h1>
        <p className="mt-2 textGray font-normal sm:text-md">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
      </motion.section>

      <motion.div className="mt-5"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
      >
        <section className=" bgNeutralGray justify-center md:w-[90%] sm:w-[90%] mx-auto rounded-md p-7 ">
          <Image
            alt="icon"
            src="/lookscout.png"
            className="  cursor-pointer transition-all translate-x-2 duration-300 ease-in-out lg:mx-auto "
            width="120"
            height="22"
          />

          <p className=" text-center lg:w-[72%] lg:object-fill lg:mx-auto lg:text-center font-semibold  text-2xl  lg:text-3xl text-slate-800 p-4 sm:p-0 mt-5 rounded sm-text-start sm:text-sm">
            Thank you for making it painless, pleasant and most of all hassle{" "}
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again!{" "}
          </p>
          <Link
            href=".."
            className="flex blue lg:w-[72%] lg:text-center lg:mx-auto lg:mt-5  gap-3 font-bold  lg:justify-ccenter  group"
          >
            <div>
              <Image
                src="/Avatar 3.png"
                className="rounded-full group:"
                width="40"
                height="40"
                alt=""
              />
            </div>
            <span className="text-sm flex flex-col  group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue  font-bold  ">
              <p className="font-bold  text-slate-900">Lisa smith</p>

              <p className="font-light textGray">CEO</p>
            </span>
          </Link>
        </section>
      </motion.div>

      <motion.section
        className="text-center mt-4 sm:w-[90%] lg:pt-5 lg:pb-5 "
      
        whileInView={{ opacity: 1 }}
        initial={{
          x: -10000,
          opacity:0
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        animate={{
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <motion.h1 className="font-bold text-3xl text-center mt-12 sm:text-lg">
          Latest Blog Post
        </motion.h1>
        <p className="mt-2 textGray font-normal lg:w-[72%] lg:object-fill lg:mx-auto">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate <br /> one-to-one customer service
          with robust ideas.
        </p>
      </motion.section>

      {/* large screen visible */}
      <motion.div
         initial={{ opacity: 0,y:-1000000 }}
         whileInView={{ opacity: 1 }}
         animate={{
          y:0
         }}
         transition={{
          duration:0.6,
          delay:0.3
         }}
      className="lg:grid lg:grid-cols-3 md:grid-cols-2  sm:gap-y-6 gap-y-12 gap-x-5 max-w-screen-xl mx-auto mt-5  md:w-[90%] sm:w-[90%] sm:hidden ">
        <motion.div>
          <section>
            <Image
              sizes="(max-width:768px) 80vw, (max-width:320px) 90vw"
              alt="icon"
              src="/Rectangle 1.png"
              className=" rounded-md cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="384"
              height="300"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively..{" "}
            </p>
          </section>

          <section className="flex justify-between container">
            <Link
              href=".."
              className="flex blue  gap-3 font-bold   my-auto group"
            >
              <div>
                <Image
                  src="/Avatar 3.png"
                  className="rounded-full group:"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <span className="text-sm flex flex-col  group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue  font-bold  ">
                <p className="font-bold  text-slate-900">Andrew Miller</p>

                <p className="font-light textGray">CEO</p>
              </span>
            </Link>
            <p className="font-light textGray">25Apr</p>
          </section>
        </motion.div>

        <motion.div>
          <section>
            <Image
              alt="icon"
              src="/Rectangle 2.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="384"
              height="300"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="textGray font-normal mt-5 minHeight">
              Keeping your eye while performing a deep dive on the start-up
              mentality to derive convergence collaboratively.{" "}
            </p>
          </section>

          <section className="flex justify-between">
            <Link
              href=".."
              className="flex blue  gap-3 font-bold   my-auto group"
            >
              <div>
                <Image
                  src="/Avatar 3.png"
                  className="rounded-full group:"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <span className=" flex flex-col text-sm  group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue font-bold  ">
                <p className="font-bold  text-slate-900">Andrew Miller</p>

                <p className="font-light textGray">CEO</p>
              </span>
            </Link>
            <p className="font-light">25Apr</p>
          </section>
        </motion.div>

        <motion.div className="sm:hidden md:hidden lg:block">
          <section>
            <Image
              alt="icon"
              src="/Rectangle 3.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="384"
              height="300"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C ..{" "}
            </p>
          </section>

          <section className="flex justify-between">
            <Link
              href=".."
              className="text-sm flex blue  gap-3 font-bold   my-auto group"
            >
              <div>
                <Image
                  src="/Avatar 3.png"
                  className="rounded-full group:"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <span className=" flex flex-col text-sm group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue  font-bold  ">
                <p className="font-bold text-slate-900">Andrew Miller</p>

                <p className="font-light textGray">CEO</p>
              </span>
            </Link>
            <p className="font-light textGray">25Apr</p>
          </section>
        </motion.div>
      </motion.div>

      {/* small screen visible */}
      <motion.div
        initial={{ opacity: 0,y:-1000000 }}
        whileInView={{ opacity: 1 }}
        animate={{
         y:0
        }}
        transition={{
         duration:0.6,
         delay:0.3
        }}
      className="sm:grid sm:grid-cols-1    sm:gap-y-6  gap-x-5  mx-auto mt-5  sm:w-[90%] lg:hidden ">
        <motion.div>
          <section>
            <Image
              sizes="(max-width:768px) 80vw, (max-width:320px) 90vw"
              alt="icon"
              src="/Rectangle 1.png"
              className=" rounded-md cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="384"
              height="300"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Generate social with the aim to take this offline.
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Synchronising scrum masters with the possibility to surprise and
              delight to the surprise and delight scrum masters.
            </p>
          </section>

          <section className="flex justify-between sm:mt-8 container">
            <Link
              href=".."
              className="flex blue  gap-3 font-bold   my-auto group"
            >
              <div>
                <Image
                  src="/Avatar 3.png"
                  className="rounded-full group:"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <span className="text-sm flex flex-col  group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue  font-bold  ">
                <p className="font-bold  text-slate-900">Andrew Miller</p>

                <p className="font-light textGray">CEO</p>
              </span>
            </Link>
            <p className="font-light textGray">25Apr</p>
          </section>
        </motion.div>

        <motion.div>
          <section>
            <Image
              alt="icon"
              src="/Rectangle 2.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="384"
              height="300"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Generate social with the aim to take this offline.
            </h1>
            <p className="textGray font-normal mt-5 minHeight">
              Synchronising scrum masters with the possibility to surprise and
              delight to the surprise and delight scrum masters.
            </p>
          </section>

          <section className="flex justify-between sm:mt-8">
            <Link
              href=".."
              className="flex blue  gap-3 font-bold   my-auto group"
            >
              <div>
                <Image
                  src="/Avatar 3.png"
                  className="rounded-full group:"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <span className=" flex flex-col text-sm  group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue font-bold  ">
                <p className="font-bold  text-slate-900">Andrew Miller</p>

                <p className="font-light textGray">CEO</p>
              </span>
            </Link>
            <p className="font-light">25Apr</p>
          </section>
        </motion.div>

        <motion.div className="sm:hidden md:hidden">
          <section>
            <Image
              alt="icon"
              src="/Rectangle 3.png"
              className=" cursor-pointer object-fit hover:rotate-180 transition-all ease-in-out"
              width="384"
              height="300"
            />
            <h1 className="font-bold text-xl text-slate-900 mt-5">
              Generate social with the aim to take this offline.
            </h1>
            <p className="textGray font-normal mt-5 minHeight ">
              Synchronising scrum masters with the possibility to surprise and
              delight to the surprise and delight scrum masters.
            </p>
          </section>

          <section className="flex justify-between sm:mt-8">
            <Link
              href=".."
              className="text-sm flex blue  gap-3 font-bold   my-auto group"
            >
              <div>
                <Image
                  src="/Avatar 3.png"
                  className="rounded-full group:"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <span className=" flex flex-col text-sm group-hover:translate-x-4 : hover:translate-x-4 transition-all duration-300 ease-in-out blue  font-bold  ">
                <p className="font-bold text-slate-900">Andrew Miller</p>

                <p className="font-light textGray">CEO</p>
              </span>
            </Link>
            <p className="font-light textGray">25Apr</p>
          </section>
        </motion.div>
      </motion.div>

      <motion.section
        className="text-center mt-4  mx-auto md:w-[90%] sm:w-[90%] sm:mx-auto "
        initial={{
          x: -10000,
        }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        animate={{
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <motion.h1 className="font-bold text-3xl text-center mt-12 sm:text-xl">
          Proud to Be Used By
        </motion.h1>
        <p className="mt-2 textGray font-normal  md: break-words lg:w-[72%] lg:object-fill lg:mx-auto lg:pt-5 lg:pb-5">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>

        <section className="container flex justify-between mx-auto p-12 lg:flex-row md:flex-row sm:flex-col sm:gap-10">
          <Image
            src="/sp1.png"
            className="rounded-full group:"
            width="120"
            height="21"
            alt=""
          />
          <Image
            src="/sp2.png"
            className="rounded-full group:"
            width="120"
            height="21"
            alt=""
          />
          <Image
            src="/sp3.png"
            className="rounded-full group:"
            width="120"
            height="21"
            alt=""
          />
          <Image
            src="/sp4.png"
            className="rounded-full group:"
            width="120"
            height="21"
            alt=""
          />
          <Image
            src="/sp5.png"
            className="rounded-full group:"
            width="120"
            height="21"
            alt=""
          />
          <Image
            src="/sp6.png"
            className="rounded-full group:"
            width="120"
            height="21"
            alt=""
          />
        </section>
      </motion.section>

      <motion.div
        initial={{ opacity: 0,x:-1000 }}
        whileInView={{ opacity: 1 }}
        animate={{
         x:0
        }}
        transition={{
         duration:1,
         delay:0.3
        }}
      className="mt-5">
        <section className=" mx-auto bgNeutralGray justify-center text-center p-6 sm:w-[98%]  ">
          <p className="blue sm:text-sm">1% OF THE INDUSRTY</p>

          <p className=" text-center  font-bold lg:text-3xl sm:text-xl  text-slate-800 p-4 mt-5 lg:mx-auto lg:pt-5 lg:pb-5 lg:w-[72%] ">
            Welcome to your new digital reality that will rock your world truly
            at all throughout.{" "}
          </p>
          {/* large screen */}
          <form action="" className="sm:hidden md:block lg:block">
            <div className="mb-6 ">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>

              <div className="flex justify-center   gap-0">
                <input
                  type="text"
                  id="base-input"
                  placeholder="Enter your email"
                  className="  bg-gray-50 border  w-4/12 border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <button className="bg-blue-500 text-sm px-5  py-2.5 rounded-e-lg hover:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue text-white font-semibold transition-all ease-in-out duration-300 ">
                  Submit
                </button>
              </div>
            </div>
          </form>

          {/* small screen */}
          <form action="" className="lg:hidden md:hidden sm:block sm:w-[98%]">
            <div className="mb-6 ">
              <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>

              <div className="sm:flex sm:flex-col  sm:gap-4">
                <input
                  type="text"
                  id="base-input"
                  placeholder="Your e-mail"
                  className="  bg-gray-50 border rounded  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <button className="bg-blue-500 w-full text-sm px-5  py-2.5 rounded hover:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue text-white font-semibold transition-all ease-in-out duration-300 ">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className="flex lg:justify-center sm:justify-start gap-8 sm:flex-wrap  sm:text-xs lg:p-5">
            <motion.p
            
            initial={{ opacity: 0,x:-1000 }}
            whileInView={{ opacity: 1 }}
            animate={{
             x:0
            }}
            transition={{
             duration:0.6,
             delay:0.7
            }}
            className="flex gap-5 font-semibold ">
              
              <Image
                alt="checkbox"
                src="/Checkbox.png"
                width="20"
                height="20"
                className=""
              />{" "}
              Fully Secure
            </motion.p>

            <motion.p
                initial={{ opacity: 0,x:-1000 }}
                whileInView={{ opacity: 1 }}
                animate={{
                 x:0
                }}
                transition={{
                 duration:0.6,
                 delay:0.5
                }}
            className="flex gap-5 font-semibold ">
            
              <Image
                alt="checkbox"
                src="/Checkbox.png"
                width="20"
                height="20"
              />{" "}
              24/7 Support
            </motion.p>

            <motion.p
                initial={{ opacity: 0,x:-1000 }}
                whileInView={{ opacity: 1 }}
                animate={{
                 x:0
                }}
                transition={{
                 duration:0.6,
                 delay:0.3
                }}
            className="flex gap-5 font-semibold">
              {" "}
              <Image
                alt="checkbox"
                src="/Checkbox.png"
                width="20"
                height="20"
              />{" "}
              Done Deal
            </motion.p>
          </div>
        </section>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0,x:-1000 }}
        whileInView={{ opacity: 1 }}
        animate={{
         x:0
        }}
        transition={{
         duration:1,
         delay:0.3
        }}
      className=" dark:bg-gray-900 grayBg">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-flow-row-dense sm:grid-rows-2 gap-8 px-4 py-6 lg:py-8 ">
            <div className=" md:max-lg:order-1 sm:max-md:col-span-2">
              <ul className="text-gray-500 dark:text-gray-400 font-medium mt-4">
                <li className="mb-4">
                  <Link href="#" className="font-bold text-slate-200">
                    <Image alt="logo" src="/logo.png" width="150" height="28" />
                  </Link>
                </li>
                <li className="mb-4">
                  <p className="text-left">
                    Generate outside the box <br /> thinking with the
                    possibility to <br /> targtet the low.
                  </p>
                </li>
              </ul>
            </div>
            <div className=" md:max-lg:order-3">
              <ul className="text-gray-500 dark:text-gray-400 font-medium mt-4">
                <li className="mb-4">
                  <Link href="#" className=" font-bold text-slate-200">
                    Resources
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Community
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Events
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" md:max-lg:order-4">
              <ul className="text-gray-500 dark:text-gray-400 font-medium mt-4">
                <li className="mb-4">
                  <Link href="#" className="font-bold text-slate-200">
                    Products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Integration
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Solutions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Enterpise
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:max-lg:order-2 sm:max-md:col-span-2">
              <ul className="text-gray-500 dark:text-gray-400 font-medium mt-4">
                <li className="mb-4">
                  <Link href="#" className="font-bold text-slate-200">
                    Get Email Notification
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="#"
                    className="hover:underline transition-all duration-100"
                  >
                    Generate outside the box thinking with the possibility to
                    targtet the low
                  </Link>
                </li>
                <li className="mb-4">
                  <form action="">
                    <div className="mb-6 ">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>

                      <div className="flex justify-center   gap-0">
                        <input
                          type="text"
                          id="base-input"
                          placeholder="Enter your email..."
                          className="  bg-gray-500 border bg-opacity-0  w-full border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block placeholder:text-white  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />

                        <button className="bg-blue-500 text-sm px-5  py-2.5 rounded-e-lg hover:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue text-white font-semibold transition-all ease-in-out duration-300 ">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className=" pt-3 px-4 py-6 border-t-2 border-gray-500 border-1 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <Link href="...">Lookscout.</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <motion.a
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 350,
                  opacity: 0.8,
                }}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Image
                  alt="facebook"
                  src="/facebook.png"
                  width="24"
                  height="23"
                />
                <span className="sr-only">Facebook page</span>
              </motion.a>

              <motion.a
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 350,
                  opacity: 0.8,
                }}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Image alt="google" src="/google.png" width="24" height="23" />
                {/* <span className="">Google community</span> */}
              </motion.a>
              <motion.a
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 350,
                  opacity: 0.8,
                }}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Image alt="facebook" src="/apple.png" width="24" height="23" />
                <span className="sr-only">Apple page</span>
              </motion.a>
              <motion.a
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 350,
                  opacity: 0.8,
                }}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Image
                  alt="facebook"
                  src="/instagram.png"
                  width="24"
                  height="23"
                />
                <span className="sr-only">Instagram account</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
