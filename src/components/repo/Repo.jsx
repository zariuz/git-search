import React from 'react';
import {NavLink} from 'react-router-dom';
import './repo.less';

const Repo = ({repo}) => {
  return (
    <div className="repo">
      <div className="repo-header">
        <div className="repo-header-name">
          <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>
        </div>
        <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
      </div>
      <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
      <div>
        Ссылка на репозиторий:&nbsp;
        <a href={repo.html_url} className="repo-link">
          {repo.html_url}
        </a>
      </div>
    </div>
  );
};

export default Repo;
