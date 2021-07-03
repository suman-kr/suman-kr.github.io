import { Description } from "./Description";
import { Header } from "./Header";
import { Social } from "./SocialLinks";

export const Portfolio = () => {
  return (
    <>
      <Header />
      <div style={{ marginRight: "4em" }}>
        <Description />
      </div>
      <Social />
    </>
  );
};
