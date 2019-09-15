import styled from "styled-components";

const Footer = styled.footer`
  background: #eee;
  margin: 40px 0 20px;
  padding: 6px 12px;
  font-weight: 500;
  color: #888;
  font-size: 0.9em;
`;

const FooterComponent = () => {
  return (
    <Footer>
      Questions/feedback?{" "}
      <a href="mailto:progress@ruiramos.com">progress@ruiramos.com</a>
    </Footer>
  );
};

export default FooterComponent;
