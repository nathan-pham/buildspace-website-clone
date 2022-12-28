import Button from "./components/Button";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionSubtitle from "./components/SectionSubtitle";
import SectionTitle from "./components/SectionTitle";

function App() {
    return (
        <>
            <Header />
            <Section backgroundImage="/section1.png" variant="grayscale">
                <SectionTitle variant="lg">
                    Dare to dream.
                    <br />
                    Dare to build.
                </SectionTitle>
                <SectionSubtitle className="mt-10">
                    We're building a new path for the world's best builders to
                    come together, explore promising domains and ship meaningful
                    products.
                </SectionSubtitle>
                <Button className="mt-20">Explore</Button>
            </Section>
            <Section backgroundImage="/section2.png"></Section>
        </>
    );
}

export default App;
