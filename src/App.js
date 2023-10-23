import { Container } from "react-bootstrap";
import "./App.css";
import heroImg from "../src/components/assets/images/womenfocued.jpg";
import gaming from "../src/components/assets/images/games1.png";
import cookingwomen from "../src/components/assets/images/cooking women.jpg";
import MyLogo from "../src/components/assets/images/Mylogo.png";
import complimentry from "../src/components/assets/images/complimentary.png";
import { FaHandHoldingWater } from "react-icons/fa";
import dinein from "../src/components/assets/images/dinein.png";

import takeaway from "../src/components/assets/images/takaway.png";
import { FaWifi } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import {
  FaWhatsapp,
  FaCoffee,
  FaGlassCheers,
  FaVestPatches,
  FaGlassMartini,
  FaPeopleCarry,
  FaBirthdayCake,
  FaMugHot,
  FaAppleAlt,
  FaRaspberryPi,
  FaCoins,
  FaIceCream,
  FaBreadSlice,
  FaSearchLocation,
} from "react-icons/fa";
import logoWhite from "../src/components/assets/images/whiteLogo.png";
import womenFocusede from "../src/components/assets/images/womenFocused.png";
import lady from "../src/components/assets/images/lady.svg";
import delivery from "../src/components/assets/images/deliveryBoy.png";
function App() {
  return (
    <>
      <Container fluid className="p-0 m-0">
        <marquee
          behavior="scroll"
          direction="left"
          className="scrolling-text bgPurp text-white choc"
        >
          Please place your order on our Whatsapp for a delightful experience!
        </marquee>
        {/* navbar */}

        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand" href="#home">
              <img src={MyLogo} width={250} className="img-fluid" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#menu">
                    Our Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#gaming">
                    Game's
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#offer">
                    Women's exclusive
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#unique">
                    Our Unique Feature
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* hero section */}
        <section id="home" className="herosection img-fluid ">
          <div className=" d-flex flex-column justify-content-center align-items-center hero-section-text">
            <h1 className="m-0 choc">Women's Cafe Coffee Shop</h1>

            <p>For Women's by Women's</p>
          </div>
          <div className=" d-flex justify-content-end align-items-end   whtslink">
            <a href="https://chatwith.io/s/womens-cafe" target="blank">
              <FaWhatsapp size={35} className=" text-white whtsappicon" />
            </a>
          </div>
        </section>
      </Container>
      {/* about us */}
      <Container id="about">
        {/* about us */}
        <section>
          <div className="row mt-5 pt-5">
            <div className="col-5 p-0">
              <img src={heroImg} className="img-fluid w-75 rounded-1" alt="" />
            </div>
            <div className="col-7">
              <h1 className=" mt-4  abt-us border-1">
                About Women's Focused Cafe
              </h1>
              <p className="">
                Welcome to Women's Cafe, a haven created exclusively for women.
                We understand that every woman is unique, and our cafe is
                designed to celebrate that uniqueness. Our mission is to provide
                a safe, comfortable, and vibrant space where women of all
                backgrounds can come together to relax, connect, and unwind.{" "}
                <b>
                  we believe Coffee in one hand, confidence in the other – the
                  daily secret of empowered women .
                </b>
                We are not just a cafe; we are a gathering place, a retreat, for
                women.
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* our menu*/}
      <Container id="menu">
        <section>
          <h1 className="mt-lg-5 text-center mb-3  abt-us border-1">
            Our Menu
          </h1>
          <p className="text-center">
            Our menu is full of baverages cold/hot coffee <br></br> shakes ,
            bakery items and much more <br />
            check the menu below
          </p>
          <div className="row mt-4">
            <div className="col-4">
              <div className="bg-purple d-flex flex-column justify-content-center p-3 rounded ">
                <h2 className="border-1">Baverages</h2>
                <ul>
                  <li className="mt-3">
                    <FaCoffee className="abt-us" size={25} /> Coffee (all types)
                  </li>
                  <li className="mt-3">
                    {" "}
                    <FaVestPatches className="abt-us" size={20} /> Milk jucies
                  </li>
                  <li className="mt-3">
                    <FaGlassCheers className="abt-us" size={30} />
                    Smoothies (fresh fuits and dry fruits)
                  </li>
                  <li className="mt-3">
                    <FaGlassMartini className="abt-us" size={20} /> Soft Drinks
                    (pepsi,coke,sprite)
                  </li>
                  <li className="mt-3">
                    <FaMugHot className="abt-us" size={25} /> Tea (all types)
                  </li>
                  <li className="mt-3">
                    <FaIceCream className="abt-us" size={25} /> Ice Cream
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-4">
              <div className="bg-purple d-flex flex-column justify-content-center p-3 rounded ">
                <img
                  src={cookingwomen}
                  className="img-fluid rounded-1"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4">
              <div className="bg-purple d-flex flex-column justify-content-center p-3 rounded ">
                <h2 className="border-1">Bakery Products</h2>
                <ul>
                  <li className="mt-3">
                    <FaBirthdayCake className="abt-us" size={25} /> Cakes
                  </li>
                  <li className="mt-3">
                    <FaAppleAlt className="abt-us" size={20} />
                    &nbsp; Cupcakes
                  </li>
                  <li className="mt-3">
                    <FaRaspberryPi className="abt-us" size={30} />
                    Pastries
                  </li>
                  <li className="mt-3">
                    <FaGlassMartini className="abt-us" size={20} /> Muffins
                  </li>
                  <li className="mt-3">
                    <FaCoins className="abt-us" size={25} />
                    &nbsp; Biscuits
                  </li>
                  <li className="mt-3">
                    <FaBreadSlice className="abt-us" size={25} />
                    &nbsp; Sandwitch
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* free offers  */}

      <Container id="offer" className="mb-5 pb-5">
        <section>
          <h1 className="mt-5 text-center pt-5  abt-us border-1">
            Offerings for Women's
          </h1>
          <p className="text-center">
            We are Offering some exclusive benifts to women's however they
            deserve more than<br></br> it but these are our small initial steps
            toward women's welfare
          </p>
          <div className="row mt-5">
            <div className="col-4">
              <div className="freeofeers">
                <FaHandHoldingWater className="text-white" size={30} />
              </div>
              <div className="text-center bg-white bg-purple p-3 mt-3 rounded">
                <h4 className="mt-3 border-1">Free Water</h4>
                <p>
                  We are providing free of cost pure clean and purified water in
                  our caffee
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="freeofeers">
                <FaWifi className="text-white" size={30} />
              </div>
              <div className="text-center bg-white bg-purple p-3 mt-3 rounded">
                <h4 className="mt-3 border-1">Free Internet</h4>
                <p>
                  We are providing free of cost fast and secure internet
                  Internet Connection
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="freeofeers">
                <FaGamepad className="text-white" size={30} />
              </div>
              <div className="text-center bg-white bg-purple p-3 mt-3 rounded">
                <h4 className="mt-3 border-1">Free Indoor Games</h4>
                <p>
                  We are providing free of cost gaming for entertainment and fun
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      {/* gaming */}
      <Container id="gaming" className=" mt-5 pt-5">
        <section id="home ">
          <div className="row">
            <div className="col-7">
              <div className=" d-flex flex-column  mt-3">
                <h1 className="m-0 abt-us border-1">Game's & Entertainment</h1>

                <p className="pt-3">
                  At Women’s Cafe, we understand that a delightful coffee and
                  snack menu is only part of the experience. We believe in
                  providing an environment where connections flourish and where
                  moments of joy and relaxation abound. That's why we've curated
                  a diverse array of indoor games and entertainment options to
                  enhance your time with us.
                </p>
              </div>
            </div>
            <div className="col-5">
              <div>
                <img src={gaming} className="img-fluid rounded-1" alt="" />
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/*unique*/}
      <Container id="unique" className="mt-5 pt-5">
        <section className="mt-5">
          <h1 className="mt-lg-5 text-center mb-3  abt-us border-1">
            Our Unique Features
          </h1>
          <p className="text-center">
            Our menu is full of baverages cold,hot coffee , shakes , bakery{" "}
            <br></br> items and much more... check the menu below
          </p>
          <div className="row mt-4 uniqFeature">
            <div className="col-4 text-center">
              <div className="text-center d-flex justify-content-center mb-3">
                <img src={lady} width={50} className=" img-fluid" alt="" />
              </div>
              <h5 className="text-center">1st Women's Focused Cafe</h5>
              <p>
                With a commitment to providing a safe and inclusive space, we've
                crafted an environment that honors the unique needs and desires
                of women from all walks of life.
              </p>
            </div>

            <div className="col-4  text-center">
              <div className="text-center d-flex justify-content-center mb-3">
                <img
                  src={complimentry}
                  width={70}
                  className=" img-fluid"
                  alt=""
                />
              </div>

              <h5>Compilimentary Service for Women's</h5>
              <p>
                Our commitment to women's empowerment goes beyond just providing
                great coffee; it extends to delivering exceptional amenities and
                services. As part of our unwavering support, we offer
                complimentary services such as
              </p>
            </div>
            <div className="col-4 text-center">
              <div className="text-center d-flex justify-content-center mb-3">
                <img src={womenFocusede} className=" img-fluid" alt="" />
              </div>
              <h5>Empowring Through Coffee</h5>
              <p>
                Our mission is simple but powerful: we aim to create a safe,
                comfortable, and vibrant space where women can connect, relax,
                and uplift each other. With every cup of coffee, we're building
                a community that embodies the spirit of empowerment
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* dining sevice */}
      <Container id="unique" className="mt-5 pt-5">
        <section className="mt-5">
          <h1 className="mt-lg-5 text-center mb-3  abt-us border-1">
            Our Dining Service
          </h1>
          <p className="text-center">
            Our menu is full of baverages cold,hot coffee , shakes , bakery
            <br></br> items and much more... check the menu below
          </p>
          <div className="row mt-4 uniqFeature">
            <div className="col-4 text-center ">
              <div className="bg-purple pt-2 pb-2">
                <div className="text-center d-flex justify-content-center mb-3">
                  <img src={dinein} className=" img-fluid" alt="" />
                </div>
                <h5 className="text-center abt-us">
                  Dine In
                  <span className="abt-us">
                    <b> (Ladies Only)</b>
                  </span>
                </h5>
              </div>
            </div>

            <div className="col-4  text-center ">
              <div className=" bg-purple pt-2 pb-2">
                <div className="text-center d-flex justify-content-center mb-3">
                  <img src={delivery} className=" img-fluid" alt="" />
                </div>

                <h5 className="abt-us">Delivery</h5>
              </div>
            </div>
            <div className="col-4 text-center ">
              <div className="bg-purple pt-2 pb-2">
                <div className="text-center d-flex justify-content-center mb-3">
                  <img src={takeaway} className=" img-fluid" alt="" />
                </div>
                <h5 className="abt-us">  Take Away</h5>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* contact us  */}

      <Container id="contact">
        <section>
          <h1 className="mt-5 text-center mb-3 pt-5  abt-us border-1">
            Contact Us
          </h1>
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="col-8 d-flex flex-column justify-content-center shadow">
              <form
                className="p-3"
                action="action=https://formsubmit.co/el/confirm/320b4baaefff2d4d5358e55cea102759"
                method="POST"
              >
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    autoComplete="off"
                    required
                    name="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    autoComplete="off"
                    required
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputNumber" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="number"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    required
                    name="number"
                  />
                </div>
                <label for="exampleInputEmail1" class="form-label">
                  Your Query
                </label>
                <div class="">
                  <textarea
                    class="form-control"
                    id="floatingTextarea"
                    autoComplete="off"
                    required
                    name="message"
                    minLength={10}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class=" text-white border-0 p-2 rounded bgPurp w-100 mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </Container>

      <footer>
        <div className="container-fluid mt-5  bgPurp pt-5 pb-5 ">
          <div className="row">
            <div className="col-4">
              <img src={logoWhite} alt="" className="" width={220} />
              <p className="text-white mt-3 mb-0">
                Welcome to Women's Cafe, a haven created exclusively for women.
                We understand that every woman is unique, and our cafe is
                designed to celebrate that uniqueness.
              </p>
              <div className="d-flex align-items-center mt-3">
                <BiLocationPlus size={20} className="text-white" />
                <span className="text-white">
                  <b> Shahi Road Bashir Mall 1st Floor</b>
                </span>
                &nbsp;
              </div>
            </div>
            <div className="col-lg-4 col-md-6  col-12  d-flex flex-column justify-content-center align-items-center">
              <div className=" ">
                <h4 className="border-1  text-white">Links</h4>
                <ul className=" list-unstyled footerUl m-0 ">
                  <li className="pt-1 pb-1 text-white">
                    <a href="#home" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="pt-1 pb-1 text-white">
                    <a href="#about" className="text-white">
                      About us
                    </a>
                  </li>
                  <li className="pt-1 pb-1 text-white">
                    <a href="#menu" className="text-white">
                      Our Menu
                    </a>
                  </li>
                  <li className="pt-1 pb-1 text-white">
                    <a href="#gaming" className="text-white">
                      Games
                    </a>
                  </li>
                  <li className="pt-1 pb-1 text-white">
                    <a href="#contact" className="text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="">
                <div className="d-flex justify-content-between   ">
                  <div className="freeofeers1">
                    <a href="https://www.instagram.com/womenscaferyk/">
                      <FaInstagramSquare size={20} />
                    </a>
                  </div>
                  <div className="freeofeers1">
                    <a href="https://www.facebook.com/your-facebook-profile">
                      <FaFacebook size={20} />
                    </a>
                  </div>
                  <div className="freeofeers1">
                    <a href="https://www.linkedin.com/company/womens-cafe-ryk/">
                      <FaLinkedin className="" size={20} />
                    </a>
                  </div>
                  <div className="freeofeers1">
                    <a href="https://www.tiktok.com/@womenscaferyk?is_from_webapp=1&sender_device=pc">
                      <FaTiktok className="" size={20} />
                    </a>
                  </div>
                  <div className="freeofeers1">
                    <a href="https://www.tiktok.com/@womenscaferyk?is_from_webapp=1&sender_device=pc">
                      <FaYoutubeSquare className="" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4  border-top ">
          @Copyrights are reserved by <b>Women's Cafe</b>{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
