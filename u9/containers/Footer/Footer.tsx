import Image from "next/image";
import Link from "next/link";
import * as Styled from "./Footer.styles";

type FooterProps = {
  isAbout?: boolean;
};
const Footer = ({ ...props }: FooterProps) => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.Shape />
        <Styled.WrapperInner>
          {props.isAbout ? (
            <Styled.WrapperContact>
              <div>
                <div>Let’s Talk</div>
                <div>
                  We will ask the right questions, discuss possibilities and
                  make an action plan.
                </div>
              </div>
              <div>
                <div>
                  155 Farrington Road <br />
                  EC1R 3AD <br />
                  London, UK
                </div>
                <div>
                  <div>
                    <div>Send an e-mail</div>
                    <Styled.WrapperIcon>
                      <Styled.IconLink>
                        <Image
                          src={"./images/icon-link.svg"}
                          layout="fill"
                          objectFit="cover"
                          alt="Icon mail"
                        />
                      </Styled.IconLink>
                    </Styled.WrapperIcon>
                  </div>
                </div>
              </div>
            </Styled.WrapperContact>
          ) : (
            <Styled.WrapperLinkCases>
              <Styled.Label>See Also</Styled.Label>
              <Link href="/about">
                <Styled.Link>Case Studies</Styled.Link>
              </Link>
            </Styled.WrapperLinkCases>
          )}
          <Styled.Separator />
          <Styled.WrapperRP>
            <div>Spatial Energy. All rights reserved.</div>
            <div>Cookie Policy</div>
          </Styled.WrapperRP>
        </Styled.WrapperInner>
      </Styled.Wrapper>
    </>
  );
};

export default Footer;
