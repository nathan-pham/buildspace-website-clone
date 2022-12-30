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
                <div className="bg-white bg-opacity-10 text-white py-2 px-6 border border-white border-opacity-10 backdrop-blur-2xl rounded-full text-lg font-semibold flex items-center gap-3 transition-all hover:gap-5 hover:bg-opacity-5 cursor-pointer duration-500">
                    Buildspace raises $10M from a16z
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <SectionTitle variant="lg" className="mt-10">
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
            <Section backgroundImage="/section2.png">
                <SectionTitle>
                    Build cutting edge products in various domains.
                </SectionTitle>
                <SectionSubtitle>
                    web3, machine learning, artificial intelligence and other
                    promising domains like robotics, no-code and music coming
                    soon.
                </SectionSubtitle>
            </Section>
            <Section backgroundImage="/section3.png">
                <SectionTitle>
                    See how far you can get in just one weekend.
                </SectionTitle>
                <SectionSubtitle>
                    A weekend is all it takes to activate yourself. All projects
                    are specifically designed to be finished over a weekend with
                    your besties.
                </SectionSubtitle>

                <Button variant="md hollow" className="mt-20">
                    Start a weekend build
                </Button>
            </Section>
            <Section backgroundImage="/section4.png">
                <SectionTitle>Take it to the next level.</SectionTitle>
                <SectionSubtitle>
                    Join a select group of builders that are working on their
                    dreams on nights & weekends. Learn from those that have done
                    it. Build with those that don't give up.
                </SectionSubtitle>

                <Button variant="md hollow" className="mt-20">
                    Request to join
                </Button>
            </Section>
            <Section backgroundImage="/section5.png">
                <SectionTitle>Build online. Build IRL.</SectionTitle>
                <SectionSubtitle>
                    Join 124,000+ builders around the world hacking on cool
                    shit. Make friends. Set ambitious goals and climb your inner
                    mountain. You got this!
                </SectionSubtitle>
                <Button variant="md hollow" className="mt-20">
                    'Sup on the cord
                </Button>
            </Section>
        </>
    );
}

export default App;
