import React from "react";
import RepoCard from "./RepoCard/RepoCard";
import "./RepoList.css";
import { ReactComponent as SeacrhIcon } from "../resources/icons/search.svg";

function RepoList() {
  return (
    <div className={"repo-list"}>
      <input
        className={"repo-list__search-input"}
        placeholder={"Введите название организации"}
      />
      <button className={"repo-list__search-button flex-align-center"}>
        <SeacrhIcon />
      </button>
      <div className={"repo-list__container"}>
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
    </div>
  );
}

export default RepoList;