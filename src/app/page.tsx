import Image from 'next/image';
import PageWrapper from "@/components/_core/containers/page-wrapper";
import Container from "@/components/_core/containers/container";
import Title from "@/components/_core/text/title";
import TextWrapper from "@/components/_core/containers/text-wrapper";

const Home = () => {
  return (
    <PageWrapper>
      <Container className="p-10">
        <TextWrapper>
          <Title>Welcome to</Title>
          <Title>next-boilerplate</Title>
          <Title>by: DigitalCyan</Title>
        </TextWrapper>
      </Container>
    </PageWrapper>
  );
};

export default Home;