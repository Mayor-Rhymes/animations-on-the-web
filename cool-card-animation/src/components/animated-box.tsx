import { Volleyball, Airplay, Brain, Cat } from "lucide-react";
import { ReactElement, ReactSVGElement } from "react";

interface AnimatedBoxProps {
  image: string;
  description: string;
  companyName: string;
  children?: ReactElement | ReactElement[]
}
export const AnimatedBox = ({
  image,
  description,
    companyName,
  children,
}: AnimatedBoxProps) => {
  return (
    <div className="anime-box">
      <img src={image} alt="logo" className="company-logo" />

      <p className="description">{description}</p>

      <p className="company-name">{companyName}</p>

          <HiddenDiv>
              {children!}
          </HiddenDiv>
        
    </div>
  );
};

interface HiddenDivProps {
  children: ReactElement | ReactElement[];
}
export const HiddenDiv = ({ children }: HiddenDivProps) => {
  return (
    <div className="hidden-div">
      <p className="temp">templates mentioned</p>

      <div className="icon-line">{children}</div>

      <button className="learn-more-button">Learn more</button>
    </div>
  );
};
