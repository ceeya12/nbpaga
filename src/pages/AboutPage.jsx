import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';


function AboutPage(){

        return (
            <>
                {/* Hero Section */}
                <div
                    className="hero-section text-center text-white"
                    style={{
                        backgroundImage: `url('https://picsum.photos/seed/picsum/200/300')`, // Replace with actual golf course image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div>
                        <h1>About NB PAGA</h1>
                        <p>Join our vibrant golf community in New Braunfels!</p>
                    </div>
                </div>

                {/* Main Content */}
                <Container className="my-5">
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="text-success">New Braunfels Pan American Golf Association (NB PAGA)</h2>
                            <p>
                                The New Braunfels Pan American Golf Association (NB PAGA) is not just a local chapter but also a
                                member of a robust National Organization, spanning across 44 chapters located in numerous states such
                                as Arizona, California, Illinois, Michigan, Oklahoma, Kansas, and Texas. Reinstated in 1998, the NB
                                chapter has maintained an active presence ever since. We are also an integral part of The Quad City
                                Organization, fostering collaboration and participation from New Braunfels, Seguin, San Marcos, and
                                Lockhart. Our golf tournaments, held weekly within our locality and neighboring chapters like San
                                Antonio, San Marcos, Austin, and more, create a vibrant and engaging golf scene.
                            </p>
                            <p>
                                Furthermore, NB PAGA is deeply entrenched in the local community, with initiatives such as scholarship
                                and active community involvement.
                            </p>
                            <Button variant="success" href="#learn-more">
                                Learn More
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/200/300?grayscale" // Replace with actual image
                                        alt="Golf Player 1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/200/300/?grayscale" // Replace with actual image
                                        alt="Golf Player 2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/200/300/?blur" // Replace with actual image
                                        alt="Golf Course"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

                    {/* Mission Section */}
                    <Row className="my-5 text-center">
                        <Col>
                            <h3 className="text-success mb-4">Our Mission</h3>
                            <p className="lead">
                                At NB PAGA, we’re not just about sinking putts—we’re about building a thriving community where the love
                                for golf brings people together. Our mission is to create a welcoming space for golfers of all skill
                                levels to connect, compete, and grow, while leaving a lasting impact on and off the course.
                            </p>
                        </Col>
                    </Row>

                    <Row className="my-5">
                        <Col md={4} className="text-center">
                            <h4 className="text-success">Inspiring Passion for Golf</h4>
                            <p>
                                We believe golf is more than a game—it’s a journey of growth and camaraderie. Through our weekly
                                tournaments, clinics, and mentorship programs, we ignite a passion for the sport in players of all ages.
                                Whether you’re a seasoned pro or just learning to swing, NB PAGA is here to help you find joy in every
                                shot.
                            </p>
                        </Col>
                        <Col md={4} className="text-center">
                            <h4 className="text-success">Empowering Our Community</h4>
                            <p>
                                Golf has the power to unite, and we’re committed to giving back. From offering scholarships to young
                                golfers to hosting charity events on the green, we strive to make a difference in New Braunfels and
                                beyond. Our community initiatives ensure that the spirit of golf uplifts everyone, from players to
                                local families.
                            </p>
                        </Col>
                        <Col md={4} className="text-center">
                            <h4 className="text-success">Shaping the Future of Golf</h4>
                            <p>
                                Looking ahead, NB PAGA is dedicated to growing the sport sustainably. We’re exploring eco-friendly
                                practices for our events, fostering inclusivity to welcome diverse players, and partnering with schools
                                to introduce golf to the next generation. Together, we’re teeing up a brighter future for golf in the
                                Quad City region and beyond.
                            </p>
                        </Col>
                    </Row>
                </Container>


                {/* New Section: Our Impact & Vision */}
                <Container className="my-5">
                    <Row className="text-center">
                        <Col>
                            <h3 className="text-success mb-4">Our Impact & Vision</h3>
                            <p className="lead">
                                Since our reinstatement in 1998, NB PAGA has been a driving force in the New Braunfels golf community,
                                creating opportunities for connection, growth, and celebration through the sport we love.
                            </p>
                        </Col>
                    </Row>

                    <Row className="my-5 align-items-center">
                        <Col md={6}>
                            <h4 className="text-success">Celebrating Milestones</h4>
                            <p>
                                Over the years, NB PAGA has hosted over 500 tournaments, bringing together thousands of golfers across
                                the Quad City region. We’ve awarded more than $50,000 in scholarships to aspiring young athletes,
                                helping them pursue their dreams both on the course and in the classroom. Our annual charity golf
                                events have raised funds for local causes, from supporting youth sports programs to aiding community
                                wellness initiatives.
                            </p>
                            <h4 className="text-success mt-4">A Vision for Tomorrow</h4>
                            <p>
                                We’re dreaming big for the future! NB PAGA is working on launching a Junior Golf Academy to nurture
                                young talent, expanding our outreach to include adaptive golf programs for players with disabilities,
                                and hosting an annual NB PAGA Golf Festival to celebrate the sport with live music, food, and family-friendly
                                activities. Our goal is to make golf a cornerstone of community life in New Braunfels for generations to come.
                            </p>
                            <Button variant="success" href="#get-involved" className="mt-3">
                                Get Involved
                            </Button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src="https://via.placeholder.com/500x400.png?text=Community+Golf+Event" // Replace with actual image
                                alt="Community Golf Event"
                                className="img-fluid rounded"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                            <p className="mt-2 text-muted">
                                A moment from our 2024 Charity Golf Classic—bringing the community together for a great cause!
                            </p>
                        </Col>
                    </Row>
                </Container>


    </>);


}

export default AboutPage;





