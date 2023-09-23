const Footer = () => {
    return (
      <footer className="bg-light p-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Your content like privacy policy, terms, etc. */}
              <a href="/privacy-policy">Privacy Policy</a> | 
              <a href="/terms-of-service">Terms of Service</a> |
              {/* ... Add social media links and other details ... */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;