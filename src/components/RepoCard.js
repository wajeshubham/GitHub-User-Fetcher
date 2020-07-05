import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCircle, FaCodeBranch, FaBook, FaBookmark } from "react-icons/fa";
import Axios from "axios";

const RepoCard = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepo = async () => {
    const response = await Axios.get(repos_url);
    console.log(response.data);
    setRepos(response.data);
  };

  useEffect(() => {
    fetchRepo();
  }, [repos_url]);

  return (
    <ListGroup
      className="mt-3"
      style={{ marginBottom: "50vh", padding: "0px" }}
    >
      <p style={{ fontSize: "15px", fontWeight: "600" }}>
        <FaBook className="mr-1 text-secondary" />
        <span className="mt-4">Repositories</span>
        <hr className="mb-0"></hr>
      </p>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id} style={{ border: "none", padding: "0px" }}>
          <hr className="mb-2"></hr>
          <div className="text-primary mt-4">
            <h2 color="white">
              <a href={repo.html_url}>{repo.name}</a>{" "}
              <span className="float-right text-secondary">
                <h6>Stars: {repo.stargazers_count}</h6>
              </span>
            </h2>
          </div>
          <div className="text-secondary mt-2">
            <h6 style={{ color: "grey" }}>
              {repo.description ? repo.description : " "}
            </h6>
          </div>
          <div>
            {repo.language ? (
              <p className="text-secondary mt-4">
                <FaCircle
                  className="mr-1"
                  {...(repo.language === "Ruby"
                    ? { color: "orange" }
                    : repo.language === "Erlang"
                    ? { color: "lightblue" }
                    : repo.language === "Java"
                    ? { color: "#b07219" }
                    : repo.language === "JavaScript"
                    ? { color: "#f1e05a" }
                    : repo.language === "Python"
                    ? { color: "#3572A5" }
                    : repo.language === "R"
                    ? { color: "#198CE7" }
                    : repo.language === "HTML"
                    ? { color: "red" }
                    : repo.language === "C++"
                    ? { color: "pink" }
                    : repo.language === "Dart"
                    ? { color: "#00B4AB" }
                    : repo.language === "CSS"
                    ? { color: "#563d7c" }
                    : repo.language === "Objective-C"
                    ? { color: "#438eff" }
                    : repo.language === "PHP"
                    ? { color: "#4F5D95" }
                    : repo.language === "MATLAB" || repo.language === "Matlab"
                    ? { color: "#e16737" }
                    : { color: "grey" })}
                />
                {repo.language}
                <FaCodeBranch className="mr-1 ml-3" />
                {repo.default_branch}
              </p>
            ) : (
              <p className="text-secondary mt-4">
                <FaCodeBranch className="mr-1" />
                No Language available
              </p>
            )}
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default RepoCard;
