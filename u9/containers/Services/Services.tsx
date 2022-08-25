import Image from "next/image";
import Head from "u9/components/Head/Head";
import Menu from "u9/components/Menu/Menu";
import Footer from "../Footer/Footer";
import * as Styled from "./Services.styles";

const Services = () => {
  return (
    <>
     <Head title="Services" />
      <Menu isDark/>
      <Styled.Wrapper>
        <Styled.Title>Services</Styled.Title>
        <Styled.Separator />
        <Styled.TopContent>
          <div>We develop products</div>
          <div>
            <div>technologies + ART</div>
            <div>
              We have worked with international companies, helping them solve{" "}
              <span>complex problems</span> with state of{" "}
              <span>the art technologies</span>, such as:
            </div>
          </div>
        </Styled.TopContent>

        <Styled.Acc>
          <div>
              <div>
                <div>1</div>
                <div>
                  <div>Digital Twin</div>
                  <div>
                    A digital twin is a virtual representation that serves as the
                    real-time digital counterpart of a physical object or process.
                    Though the concept originated earlier (attributed to Michael
                    Grieves, then of the University of Michigan, in 2002) the
                    first practical definition of a digital twin originated from
                    NASA in an attempt to improve physical-model simulation of
                    spacecraft in 2010.
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="./images/services-digital-twin.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Digital twin"
                />
              </div>
              <div>
                <div>Read</div>
              </div>
            
          </div>
        </Styled.Acc>

        <Styled.HowWeWork>
          <div>How we Work</div>
          <div>
            <div>
              <div>Phase 1</div>
              <div>Discovery</div>
              <div>
                Nullam vulputate gravida enim, et tincidunt augue condimentum at.
                Nullam ultricies felis nisl, vitae pellen venenatis quis. Vitae
                vestibulum arcu, a semper metus nullam placerat.
              </div>
              <div>
                <Image
                  src="./images/services-phase-1.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Digital twin"
                />
              </div>
            </div>
          </div>
        </Styled.HowWeWork>
      </Styled.Wrapper>
      <Footer />
    </>
  );
};

export default Services;
