import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';
import './AboutCTN.css'; // Custom CSS for styling

function AboutCTN() {
    return (
        <Container fluid className="about-us p-3">
            {/* Header with "Latest" and "View More" */}
            <div className="mb-3 border-black border-bottom">
                <h2 className="about-us-title">About Us</h2>
                {/*<a href="#" className="view-more">*/}
                {/*    VIEW MORE <span>&gt;</span>*/}
                {/*</a>*/}
            </div>

            <Row>
                {/* About Us (Left Section) */}
                <Col lg={6} md={12} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-5 fw-bolder">New Braunfels Pan American Golf Association (NB
                                PAGA)</Card.Title>
                            <Card.Text className="fw-bold">
                                The New Braunfels Pan American Golf Association (NB PAGA) is not just a local golf
                                chapter but also a member of a robust National Organization, spanning across 44 chapters
                                located in numerous states such as Arizona, California, Illinois, Michigan, Oklahoma,
                                Kansas, and Texas. Reinstated in 1998, the NB chapter has maintained an active presence
                                ever since. We are also an integral part of The Quad City Organization, fostering
                                collaboration and participation from New Braunfels, Seguin, San Marcos, and Lockhart.
                                Our golf tournaments, held weekly within our locality and neighboring chapters like San
                                Antonio, San Marcos, Austin, and more, create a vibrant and engaging golf scene.
                                Furthermore, NB PAGA is deeply entrenched in the local community, with initiatives such
                                as scholarships and active community involvement.
                            </Card.Text>
                            <Card.Link href="#">Learn More...</Card.Link>

                        </Card.Body>
                    </Card>
                </Col>

                {/* About Us (Right Section with photo Collage) */}
                <Col lg={6} md={12}>
                    <div className="about-us-right">
                        {/* Photo Collage */}
                        <div className="photo-collage">
                            <Image
                                src="/src/assets/aboutus_pics/collage01.jpg"
                                alt="Golf Photo 1"
                                className="collage-image collage-image-1"
                            />
                            <Image
                                src="/src/assets/aboutus_pics/collage02.jpg"
                                alt="Golf Photo 2"
                                className="collage-image collage-image-2"
                            />
                            <Image
                                src="/src/assets/aboutus_pics/collage03.jpg"
                                alt="Golf Photo 3"
                                className="collage-image collage-image-3"
                            />
                            <Image
                                src="/src/assets/aboutus_pics/collage04.jpg"
                                alt="Golf Photo 4"
                                className="collage-image collage-image-4"
                            />
                            <Image
                                src="/src/assets/aboutus_pics/collage05.jpg"
                                alt="Golf Photo 5"
                                className="collage-image collage-image-5"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutCTN;