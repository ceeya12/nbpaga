import React from 'react';
import CarouselPictures from "../components/CarouselPictures.jsx"
import "../components/Carousel.css";
import AboutCTN from "../components/AboutCTN.jsx";
import NewsSection from "../components/NewsSection.jsx";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import LeaderBoardSnapShot from "../components/LeaderBoardSnapShot";
import styles from "/src/components/LeaderBoardSnapShot.module.css";

import scholarship_img from '/src/assets/homepage_img/scholarship_img.jpg'
import nonprofitseal from '/src/assets/homepage_img/nonprofit-seal.png';
import golfNewsImage from '/src/assets/homepage_img/golf_news_img.jpeg';
import nbpagaLogo from '/src/assets/homepage_img/NPAGA-logo-200.png';

const otherNews = [{
    id: 1,
    title: "Scholarship Information",
    paragraph: "The NBPAGA is excited to announce that applications " +
        "are now open for our 2025 College Scholarship! This scholarship is dedicated to supporting passionate individuals " +
        "who are also committed to their academic goals. Whether you're pursuing a " +
        "degree in sports management, business, or any other field, this scholarship is designed " +
        "to help you further your education. If you’re a high school senior or current college student who embodies " +
        "dedication, hard work, and a love for golf, we encourage you to apply. Don't miss out on this incredible " +
        "opportunity to receive financial support for your academic journey. Apply today!",
    img: "/src/assets/homepage_img/scholarship_img.jpg",
},
    {
        id: 2,
        title: "New Milestone",
        paragraph: "We are thrilled to share that NBPAGA has officially achieved 501(c)(3) nonprofit status! This milestone " +
            "marks an exciting new chapter for our organization and enhances our ability to support our mission of promoting " +
            "golf and educational opportunities. As a 501(c)(3), we can now offer more resources, expand our programs, and " +
            "provide tax-deductible donations, making it easier for our community to get involved. This is a huge step forward, " +
            "and we look forward to continuing to grow and impact the lives of golfers and students alike. Thank you for your " +
            "continued support as we move into this new phase of our journey!",
        img: "/src/assets",
        link: "https://docs.google.com/document/d/1D2HUOkbOXPnqycmM6QW-37R3fspiG7m7S3tc9MMstJ8/edit?usp=sharing"
    },

    {
        id: 3,
        title: "New Headline",
        paragraph: "We are thrilled to share",
        img: "/src/assets"
    }
]


const playersFirstFlight = [
    {
        position: 1,
        name: 'Golfer A',
        country: 'Australia',
        total: -20,
        round: -3,
        scores: [66, 64, 63, 67],
        strokes: 260,
        proj: 16,
        starting: 60,
    },
    {
        position: '2',
        change: 4,
        name: 'Golfer B',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }, {
        position: '3',
        change: 4,
        name: 'Golfer C',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }

];

const playersSecondFlight = [
    {
        position: 1,
        name: 'John Smith',
        country: 'Australia',
        total: -20,
        round: -3,
        scores: [66, 64, 63, 67],
        strokes: 260,
        proj: 16,
        starting: 60,
    },
    {
        position: '2',
        change: 4,
        name: 'Austin Lopez',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }, {
        position: '3',
        change: 4,
        name: 'Ricky Ricardo',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }

];

const playersThirdFlight = [
    {
        position: 1,
        name: 'Nathan Medina',
        country: 'Australia',
        total: -20,
        round: -3,
        scores: [66, 64, 63, 67],
        strokes: 260,
        proj: 16,
        starting: 60,
    },
    {
        position: '2',
        change: 4,
        name: 'Richard Ramirez',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }, {
        position: '3',
        change: 4,
        name: 'Danny Mendoza',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }

];

const playersFourthFlight = [
    {
        position: 1,
        name: 'John Martinez',
        country: 'Australia',
        total: -20,
        round: -3,
        scores: [66, 64, 63, 67],
        strokes: 260,
        proj: 16,
        starting: 60,
    },
    {
        position: '2',
        change: 4,
        name: 'Benny Lopez',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }, {
        position: '3',
        change: 4,
        name: 'George Lopez',
        country: 'USA',
        total: -19,
        round: -8,
        scores: [69, 64, 66, 62],
        strokes: 261,
        proj: 46,
        starting: 95,
    }

];

function HomePage() {
    return (
        <div>
            {/*Carousel Images*/}
            <CarouselPictures/>
            {/*About Us CTN*/}
            <AboutCTN/>
            {/*Latest News CTN*/}
            <NewsSection>
                <Container fluid className="news-section p-3">
                    {/* Header with "Other News"*/}
                    <div className="d-flex justify-content-end align-items-center mb-3 border-black border-bottom">
                        <h2 className="section-title">Latest News</h2>
                    </div>
                    <Row className="d-flex justify-content-center">
                        <Col lg={12} md={12} xl={8} className="mb-4">
                            <Card className="main-news-card p-3">
                                <Card.Header>
                                    <Card.Title className="d-flex justify-content-start fw-bold">Scholarship
                                        Information</Card.Title>
                                </Card.Header>
                                <Card.Body className="d-flex flex-column flex-md-row">
                                    <div>
                                        <Card.Text>
                                            The NBPAGA is excited to announce that applications are now open
                                            for our 2025 College Scholarship! This scholarship is dedicated to
                                            supporting
                                            passionate individuals who are also committed to their academic goals.
                                            Whether
                                            you're pursuing a degree in sports management, business, or any other field,
                                            this
                                            scholarship is designed to help you further your education.
                                            If you’re a high school senior or current college student who
                                            embodies dedication, hard work, and a love for golf, we encourage you to
                                            apply.
                                            Don't miss out on this incredible opportunity to receive financial support
                                            for
                                            your academic journey. Apply today!
                                        </Card.Text>
                                    </div>
                                    <div className="ms-auto">
                                        <Card.Img src={scholarship_img} variant="bottom"/>
                                    </div>
                                </Card.Body>
                                <h3><em>Deadline to Apply is June 6, 2025</em></h3>
                                <a href="https://docs.google.com/document/d/1D2HUOkbOXPnqycmM6QW-37R3fspiG7m7S3tc9MMstJ8/edit?usp=sharing">
                                    <span className="badge rounded-pill text-bg-danger">Apply Today</span>
                                </a>
                            </Card>


                        </Col>
                    </Row>

                    <Row className="mt-2 d-flex justify-content-center">
                        <Col lg={12} md={12} xl={8}>
                            <Card className="main-news-card p-3">
                                <Card.Header>
                                    <Card.Title className="d-flex justify-content-start fw-bold">New
                                        Milestone</Card.Title>
                                </Card.Header>
                                <Card.Body className="d-flex flex-column flex-md-row">
                                    <div>
                                        <Card.Text>
                                            We are thrilled to share that NBPAGA has officially achieved 501(c)(3)
                                            nonprofit status! This milestone marks an exciting new chapter for our
                                            organization
                                            and
                                            enhances our ability to support our mission of promoting golf and
                                            educational
                                            opportunities. As a 501(c)(3), we can now offer more resources, expand our
                                            programs,
                                            and
                                            provide tax-deductible donations, making it easier for our community to get
                                            involved.
                                            This is a huge step forward, and we look forward to continuing to grow and
                                            impact
                                            the
                                            lives of golfers and students alike. Consider Donating to a great cause!
                                            Thank you for your continued support as we move
                                            into this new phase of our journey!
                                        </Card.Text>
                                    </div>
                                    <div className="ms-auto">
                                        <Card.Img src={nonprofitseal} variant="bottom"/>
                                    </div>
                                </Card.Body>
                                <a href="https://docs.google.com/document/d/1D2HUOkbOXPnqycmM6QW-37R3fspiG7m7S3tc9MMstJ8/edit?usp=sharing">
                                    <span className="badge rounded-pill text-bg-danger">Donate Today</span>
                                </a>
                            </Card>

                        </Col>
                    </Row>


                </Container>
            </NewsSection>

            {/*Player Results*/}
            <Container fluid className="news-section p-3">
                {/* Header with "Latest" and "View More" */}
                <div className="d-flex justify-content-between align-items-center mb-3 border-black border-bottom">
                    <h2 className="section-title">Player Highlights</h2>
                    <a href="#" className="view-more">
                        VIEW MORE <span>&gt;</span>
                    </a>
                </div>
            </Container>
            <LeaderBoardSnapShot title="All Players-First Flight" players={playersFirstFlight}/>
            <LeaderBoardSnapShot title="All Players-Second Flight" players={playersSecondFlight}/>
            <LeaderBoardSnapShot title="All Players-Third Flight" players={playersThirdFlight}/>
            <LeaderBoardSnapShot title="All Players-Fourth Flight" players={playersFourthFlight}/>

            {/*Other News*/}
            <NewsSection>
                <Container fluid className="news-section p-3">
                    {/* Header with "Latest" and "View More" */}
                    <div className="d-flex justify-content-between align-items-center mb-3 border-black border-bottom">
                        <h2 className="section-title">Other News</h2>
                        <a href="#" className="view-more">
                            VIEW MORE <span>&gt;</span>
                        </a>
                    </div>

                    <Row>
                        {/* Main News (Left Section) */}
                        <Col lg={6} md={12} className="mb-4">
                            <Card className="main-news-card">
                                <Card.Img
                                    variant="top"
                                    src={golfNewsImage}
                                    alt="Main news"
                                    className="main-news-image"
                                />
                            </Card>
                        </Col>

                        {/* Side News (Right Section) */}
                        <Col lg={6} md={12}>
                            <div className="side-news">
                                {/* News Item 1 */}
                                <div className="side-news-item d-flex mb-3">
                                    <div className="side-news-text">
                                        <h5>2025 PAGA National Tournament-Myrtle Beach, SC</h5>
                                        <a href="http://nationalpaga.org/wp-content/uploads/2024/08/Myrtle-Beach-2025-aug24.pdf" className="view-more">
                                            Learn more <span>&gt;</span>
                                        </a>
                                    </div>
                                    <Image
                                        src={nbpagaLogo}
                                        alt="Side news 1"
                                        rounded
                                        className="side-news-image"
                                    />
                                </div>

                                {/* News Item 2 */}
                                <div className="side-news-item d-flex mb-3">
                                    <div className="side-news-text">
                                        <h5>2021 Fort Worth Scholarship Invitational</h5>
                                        <a href="http://nationalpaga.org/2025-fort-worth-invitational-scholarship-tournament/" className="view-more">
                                            Learn more <span>&gt;</span>
                                        </a>
                                    </div>

                                    <Image
                                        src={nbpagaLogo}
                                        alt="Side news 2"
                                        rounded
                                        className="side-news-image"
                                    />
                                </div>

                                {/* News Item 3 */}
                                <div className="side-news-item d-flex mb-3">
                                    <div className="side-news-text">
                                        <h5>2025 Fred Salinas 3RD Delegates Meeting</h5>
                                        <a href="http://nationalpaga.org/wp-content/uploads/2024/09/NPAGA-3rd-Meeting-Tournament-2024-Preliminary-Schedule-of-Events.pdf" className="view-more">
                                            Learn more <span>&gt;</span>
                                        </a>
                                    </div>

                                    <Image
                                        src={nbpagaLogo}
                                        alt="Side news 2"
                                        rounded
                                        className="side-news-image"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </NewsSection>
        </div>
    );
}

export default HomePage;

