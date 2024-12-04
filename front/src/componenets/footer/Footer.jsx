import './Footer.css';

const Footer = () => {
    return (
      <>
        <footer className="footer">
        <div className="socials">
          <h3>Check our social media</h3>
        <a href="#"><box-icon name='facebook-square' type='logo' color='#fff' size='lg' style={{margin:"10px"}}></box-icon></a>
          <a href="#"><box-icon name='instagram-alt' type='logo' color='#fff' size='lg' style={{margin:"10px"}}></box-icon></a>
          <a href="#"><box-icon name='pinterest' type='logo' color='#fff' size='lg' style={{margin:"10px"}}></box-icon></a>
          <p>Copyright 2024@ Imene Dehimi - All Right Reserved.</p>
          </div>
      </footer>
      </>
    );
};

export default Footer;