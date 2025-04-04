import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import "./Carousel.css";


const upcomingTournaments = [{
    id: 1,
    name: "Quint City",
    date: "April 13,2025",
    location: "Landa Park Golf Course",
    link: "https://www.google.com",

}, {
    id: 2,
    name: "Lockhart Invitational",
    date: "April 27,2025",
    location: "TBD",
    link: "https://www.ceeyasinfo.net",
},
    {
        id: 3,
        name: "San Marcos Invitational",
        date: "May 17,2025",
        location: "TBD",
        link: "https://www.nbpaga.com",
    }]


function CarouselPictures() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            {/* Right Section */}
            <div style={{
                flex: '0 0 25%',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }} className="right-section">

                <div className="vertical-carousel-container">
                    <h4>Upcoming Events</h4>
                    <Carousel
                        direction="vertical" // Custom prop for vertical orientation (requires CSS)
                        interval={3000} // Auto-slide every 3 seconds
                        controls={false}
                        indicators={false}
                        pause="hover" // Pause on hover
                    >
                        {upcomingTournaments.map((tournament) => (
                            <Carousel.Item key={tournament.id}>
                                <Card style={{width: '14rem'}}>
                                    {/*<Card.Img variant="top" src={tournament.img} />*/}
                                    <Card.Body>
                                        <Card.Title as={'h6'}>{tournament.name}</Card.Title>
                                        <Card.Text>
                                            <strong className="fst-italic">Date:</strong>{tournament.date}
                                        </Card.Text>
                                        <strong className="fst-italic">Location:</strong>{tournament.location}
                                        <Card.Footer>
                                            <a href={tournament.link}><span
                                                className="badge rounded-pill text-bg-danger">Sign Up</span></a>
                                        </Card.Footer>

                                    </Card.Body>

                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                    <a href="https://paga.startershack.club"><button className="badge rounded-pill text-bg-danger mt-4">Starter Shack</button></a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScQYVM57RwmqIdQwqUM8pZeoQdLPWljl6UuR9shgcfxoj91cA/viewform?usp=header">
                        <button className="badge rounded-pill text-bg-danger mt-1">Membership Enroll</button>
                    </a>

            </div>

            {/* Carousel Section */}
            <div style={{flex: '0 0 75%'}} className="carousel-section">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/homepage_img/homepage_01.jpg"
                            alt="First slide"
                            style={{height: '400px', objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/homepage_img/homepage_02.jpg"
                            alt="Second slide"
                            style={{height: '400px', objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/homepage_img/homepage_03.jpg"
                            alt="Third slide"
                            style={{height: '400px', objectFit: 'cover'}}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselPictures;