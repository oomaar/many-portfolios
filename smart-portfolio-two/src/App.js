import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Portfolio,
  Project,
  Qualification,
  Scrollup,
  Services,
  Testimonial
} from "./Components";
import resumeData from "./data/resumeData.json";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Application>
        <Scrollup />
        <Header data={resumeData.header} />
        <Main>
          <Home />
          <About data={resumeData.about} />
          <Qualification data={resumeData.qualification} />
          <Services data={resumeData.services} />
          <Project />
          <Portfolio data={resumeData.portfolio} />
          <Testimonial data={resumeData.testimonial} />
          <Contact data={resumeData.contact} />
        </Main>
        <Footer data={resumeData.footer} />
      </Application>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.div``;

const Main = styled.main``;