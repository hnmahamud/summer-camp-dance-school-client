import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="w-16 h-16" src={logo} alt="" />
          <p>
            DanceCampX
            <br />
            Copyright © 2023 - All right reserved
          </p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">
            456 XYZ Lane, Near Green Park Market <br /> Dhaka 1207, Bangladesh
          </a>
          <span className="footer-title mt-4">Contact</span>
          <a className="link link-hover">Phone: +1 123-456-7890</a>
          <a className="link link-hover">Email: info@example.com</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Awards and Recognition</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Refund Policy</a>
          <a className="link link-hover">Age Restriction</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
