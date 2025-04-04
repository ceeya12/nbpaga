import {Container, Row, Col, Card} from "react-bootstrap";

function BoardMembers(){

    return(
        <>
            {/* Header Section */}
            <div
                className="header-section text-center text-white py-5"
                style={{
                    backgroundImage: `url('https://via.placeholder.com/1200x300.png?text=Golf+Course+Header')`, // Replace with actual golf course image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div className="overlay">
                    <h1 className="display-4">Meet Our Board of Directors</h1>
                    <p className="lead">The dedicated leaders steering NB PAGA toward success.</p>
                </div>
            </div>

            {/* Main Content */}
            <Container className="my-5">
                <Row className="g-4 justify-content-center">
                    {/* President */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=President+Photo" // Replace with actual photo
                                alt="President Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">President</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
                                <Card.Text>
                                    John has been a passionate golfer for over 20 years and has led NB PAGA with vision and
                                    dedication since 2020. A local business owner, he’s committed to growing the sport and
                                    supporting community initiatives.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Vice President */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Vice+President+Photo" // Replace with actual photo
                                alt="Vice President Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Vice President</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Jane Smith</Card.Subtitle>
                                <Card.Text>
                                    Jane brings 15 years of organizational experience to NB PAGA, supporting the President with
                                    strategic planning. An avid golfer, she loves mentoring new players and organizing local events.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Secretary */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Secretary+Photo" // Replace with actual photo
                                alt="Secretary Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Secretary</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Michael Brown</Card.Subtitle>
                                <Card.Text>
                                    Michael ensures smooth communication within NB PAGA, with a background in administration. A
                                    golf enthusiast, he enjoys documenting the chapter’s history and supporting its growth.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Tournament Director */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Tournament+Director+Photo" // Replace with actual photo
                                alt="Tournament Director Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Tournament Director</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Sarah Johnson</Card.Subtitle>
                                <Card.Text>
                                    Sarah has organized over 100 tournaments, bringing excitement to NB PAGA events. With a keen
                                    eye for detail, she ensures every swing and score is memorable for participants.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Treasurer */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Treasurer+Photo" // Replace with actual photo
                                alt="Treasurer Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Treasurer</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Robert Lee</Card.Subtitle>
                                <Card.Text>
                                    Robert manages NB PAGA’s finances with precision, ensuring funds support scholarships and
                                    events. A golf lover, he enjoys balancing the books and hitting the fairways on weekends.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Sergeant of Arms */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Sergeant+of+Arms+Photo" // Replace with actual photo
                                alt="Sergeant of Arms Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Sergeant of Arms</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">David Wilson</Card.Subtitle>
                                <Card.Text>
                                    David ensures order and safety at NB PAGA events, with a military background. His love for
                                    golf shines through as he supports a welcoming environment for all members.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Board Member 1 */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Board+Member+1+Photo" // Replace with actual photo
                                alt="Board Member 1 Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Board Member</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Emily Davis</Card.Subtitle>
                                <Card.Text>
                                    Emily contributes fresh ideas to NB PAGA, with a passion for community outreach. A newer
                                    golfer, she’s eager to help expand the chapter’s impact in the region.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Board Member 2 */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Board+Member+2+Photo" // Replace with actual photo
                                alt="Board Member 2 Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Board Member</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Thomas Clark</Card.Subtitle>
                                <Card.Text>
                                    Thomas brings a wealth of golf experience, having played competitively for years. He’s
                                    dedicated to mentoring young players and strengthening NB PAGA’s events.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Board Member 3 */}
                    <Col md={4}>
                        <Card className="board-card shadow-sm">
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/300x200.png?text=Board+Member+3+Photo" // Replace with actual photo
                                alt="Board Member 3 Photo"
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="text-success">Board Member</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Lisa Martinez</Card.Subtitle>
                                <Card.Text>
                                    Lisa is a community leader who joined NB PAGA to promote inclusivity in golf. Her enthusiasm
                                    for the sport inspires new members to get involved and enjoy the game.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default BoardMembers;