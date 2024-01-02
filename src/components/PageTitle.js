import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>밥은 묵고 다니나? | {titleName} </title>
      </Helmet>
    </HelmetProvider>
  );
};
