import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

import { FaMapMarkedAlt, FaSuitcase, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card className="float-left mt-3 mb-4" style={{ border: "none" }}>
      <img
        src={user.avatar_url}
        className="img-thumbnail"
        width="260"
        height="260"
        style={{ borderRadius: "50%" }}
      />
      <CardBody>
        <Row>
          <div className="text-dark">
            <h1 className="header float-left">
              <span>{user.name}</span>
            </h1>
            <br></br>
            <h4>
              <span
                className="float-left text-secondary"
                style={{ fontWeight: "lighter" }}
              >
                <a href={user.html_url} style={{ color: "grey" }}>
                  {user.login}
                </a>
              </span>
            </h4>
          </div>
        </Row>
        <Row className="float-left mt-2">
          <div className="text-secondary" style={{ fontColor: "grey" }}>
            Followers:{" "}
            <span className="text-dark" style={{ fontWeight: "600" }}>
              {user.followers}
            </span>{" "}
            ·{" "}
          </div>
          <div className="text-secondary ml-2" style={{ fontColor: "grey" }}>
            Following:{" "}
            <span className="text-dark" style={{ fontWeight: "600" }}>
              {user.following}
            </span>{" "}
          </div>
        </Row>
        <Row
          className="float-left mt-2 mb-2"
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <div className="text-dark">
            <p
              className="float-left"
              style={{
                fontSize: "15px",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              {user.bio}
            </p>
          </div>
        </Row>
        {user.location === null || user.location === "" ? null : (
          <Row
            className="float-left"
            style={{ width: "100%", maxWidth: "100%" }}
          >
            <div className="text-dark">
              <p
                className="float-left"
                style={{
                  fontSize: "14px",
                  overflow: "hidden",
                  textAlign: "left",
                }}
              >
                <FaMapMarkedAlt className="mr-2" />
                {user.location}
              </p>
            </div>
          </Row>
        )}

        {user.company === null || user.company === "" ? null : (
          <Row
            className="float-left"
            style={{ width: "100%", maxWidth: "100%" }}
          >
            <div className="text-dark">
              <p
                className="float-left"
                style={{
                  fontSize: "14px",
                  overflow: "hidden",
                  textAlign: "left",
                }}
              >
                <FaSuitcase className="mr-2" />
                {user.company}
              </p>
            </div>
          </Row>
        )}
        {user.blog === null || user.blog === "" ? null : (
          <Row
            className="float-left"
            style={{ width: "100%", maxWidth: "100%" }}
          >
            <div className="text-dark">
              <p
                className="float-left"
                style={{
                  fontSize: "14px",
                  overflow: "hidden",
                  textAlign: "left",
                }}
              >
                <FaLink className="mr-2" />
                <a href={user.blog}>{user.blog}</a>
              </p>
            </div>
          </Row>
        )}

        {/* <div className="text-primary">{user.location}</div>

        <div className="text-info">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>

        <div className="text-primary">Company: {user.company}</div> */}
      </CardBody>
    </Card>
  );
};

export default UserCard;
