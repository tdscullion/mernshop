import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to MernShop",
  description: "We sell the best products at the best prices",
  keywords: "Best deals, buy quality, cheap goods",
};

export default Meta;
