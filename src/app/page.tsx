import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import TextWrapper from "@/components/_core/containers/text-wrapper";
import {AiFillCode} from "react-icons/ai";
import Text from "@/components/_core/text/text";
import {TbBrandNextjs, TbBrandTailwind} from "react-icons/tb";
import {SiHeadlessui} from "react-icons/si";
import {BiLogoReact} from "react-icons/bi";
import ModalExample from "@/app/modal-example";

const Home = () => {
  return (
    <PageWrapper>
      <Container className="bg-background shadow" screen>
        <Container responsive flow={false}>
          <Container>
            <TextWrapper center={false} className="w-max">
              <Title size="sm">DigitalCyan&apos;s</Title>
              <Title size="lg">next-boilerplate</Title>
            </TextWrapper>
          </Container>
          <Container center={false}>
            <AiFillCode size={80} />
          </Container>
        </Container>

        <div className="absolute bottom-0 p-2 animate-bounce">
          <Text>Scroll to continue</Text>
        </div>
      </Container>

      <Container className="bg-background rounded-xl p-10 shadow">
        <Title>What is this?</Title>
        <Text>
          This is a simple example of the boilerplate. It serves as a simple demonstration of what batteries are
          included and which you have to go buy yourself.
        </Text>
      </Container>
      <Container className="bg-background p-10 mx-10 rounded-xl">
        <Title>What technologies am I using?</Title>
        <Container responsive>
          <Container flow>
            <Text>
              Just the bare minimum on top of Next.js I consider necessary to build a nice looking website quickly and
              efficiently.
            </Text>
          </Container>
          <Container flow>
            <div className="grid grid-cols-2 gap-5">
              {[
                {title: "Next.js", Icon: TbBrandNextjs},
                {title: "Tailwind", Icon: TbBrandTailwind},
                {title: "Headless UI", Icon: SiHeadlessui},
                {title: "React Icons", Icon: BiLogoReact}
              ].map(({title, Icon}, i) => (
                <div key={i}>
                  <TextWrapper>
                    <Icon size={40} />
                    <Text>{title}</Text>
                  </TextWrapper>
                </div>
              ))}
            </div>
          </Container>
        </Container>
      </Container>

      <Container flow>
        <Title>What about modals?</Title>
        <Text>Yes! We have some basic modal logic too. Click the button below and see for yourself!</Text>
        <ModalExample />
      </Container>
    </PageWrapper>
  );
};

export default Home;