import React from "react";
import { Link } from "react-router-dom";
import musicImg from "../assets/images/music-beat.gif";
import Card from "react-bootstrap/Card";
import musicPic from "../assets/images/music.jpg";

const Content = () => {
  return (
    <div className="container">
      {/* STARTING PART */}
      <div className="row align-items-center">
        <div className="col-5">
          <h3>
            Welcom to <span className="text-warning">Media Player</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            laudantium vero optio voluptatum architecto, excepturi quo minima
            quidem quis sequi sed ex, ut maxime obcaecati saepe omnis provident
            quisquam voluptas. Accusamus dignissimos voluptatibus voluptatem
            placeat odit impedit, modi dolorem officia delectus magni repellat
            exercitationem, maxime alias architecto perspiciatis quos cum ullam
            molestiae dolorum provident quam vel? Sed odit reiciendis cum.
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get Started
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={musicImg} alt="" />
        </div>
      </div>

      {/* CARD PART SECOND */}
      <div className="row">
        <h3 className="text-center mt-5 mb-5">Features</h3>

        <div className="col-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={musicPic} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={musicPic} />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={musicPic} />
            <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* THIRD PART */}

      <div
        className="row border border-2 rounded-4 p-5 align-items-center"
        style={{ marginTop: "100px" }}
      >
        <div className="col-5">
          <h3 className="text-warning fw-bolder">Simple, Fast and Powerful</h3>
          <p style={{textAlign:"justify"}}>
            <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
              Lorem ipsum:
            </span>{" "}
            dolor sit amet consectetur adipisicing elit. Itaque doloribus
            distinctio voluptates, recusandae sint perspiciatis laborum, illo
            quaerat natus numquam similique soluta iusto eveniet, debitis odit
            fuga temporibus quia saepe.
          </p>
          <p style={{textAlign:"justify"}}>
            <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
              Lorem ipsum:
            </span>{" "}
            dolor sit amet consectetur adipisicing elit. Itaque doloribus
            distinctio voluptates, recusandae sint perspiciatis laborum, illo
            quaerat natus numquam similique soluta iusto eveniet, debitis odit
            fuga temporibus quia saepe.
          </p>
          <p style={{textAlign:"justify"}}>
            <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
              Lorem ipsum:
            </span>{" "}
            dolor sit amet consectetur adipisicing elit. Itaque doloribus
            distinctio voluptates, recusandae sint perspiciatis laborum, illo
            quaerat natus numquam similique soluta iusto eveniet, debitis odit
            fuga temporibus quia saepe.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AY3Yea6hBbI?si=8YlfsKqZ3jDtVCed"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Content;
