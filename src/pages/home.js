import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import UserCard from "../components/UserCard";
import RepoCard from "../components/RepoCard";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";

function Home() {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");

  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(response.data);
    } catch (error) {
      toast("User does Not Exist", { type: "error", position: "top-center" });
    }
  };

  useEffect(() => {
    const localCreds = localStorage.getItem("user");
    if (localCreds) {
      context.setUser(JSON.parse(localCreds));
    }
  }, []);

  if (!context.user?.uid) {
    return <Redirect to="/signup" />;
  } else {
    return (
      <Container>
        <Row className="mt-3">
          <InputGroup>
            <Input
              type="text"
              value=""
              placeholder="Find a user..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={fetchDetails}>
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Row>
        <Row>
          <Col md="5">{user ? <UserCard user={user} /> : null}</Col>
          <Col md="7">
            {" "}
            {user ? <RepoCard repos_url={user.repos_url} /> : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

// import React, { useState, useContext } from "react";
// import Axios from "axios";

// import {
//   Row,
//   Container,
//   Col,
//   Input,
//   Button,
//   InputGroup,
//   InputGroupAddon
// } from "reactstrap";

// import UserCard from "../components/UserCard";
// import Repos from "../components/Repos";
// import { Redirect } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import { toast } from "react-toastify";

// return (
//     <Container>
//       <Row className=" mt-3">
//         <Col md="5">
//           <InputGroup>
//             <Input
//               type="text"
//               value=""
//               placeholder="Please provide the username"
//             />
//             <InputGroupAddon addonType="append">
//               <Button color="primary">Fetch User</Button>
//             </InputGroupAddon>
//           </InputGroup>
//         </Col>
//         <Col md="7"></Col>
//       </Row>
//     </Container>
//   );
