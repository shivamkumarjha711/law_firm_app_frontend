import React from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/law_logo.png";

function HelmetSEO(props) {
  const { title, description, keywords } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="India Law Firm" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      {/* // Update This With Your Live Web URL  */}
      <meta property="og:url" content="https://example.com/my-page" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:card" content={logo} />
    </Helmet>
  );
}

export default HelmetSEO;
