import { IconButton } from "./button";
import { ErrorBoundary } from "./error";
import styles from "./mask.module.scss";
import "./learn.scss";
import CloseIcon from "../icons/close.svg";
import { useNavigate } from "react-router-dom";
import { FileName, Path } from "../constant";
import React, { useState, useEffect } from "react";

interface ArticleProps {
  article: {
    id: number;
    name: string;
    link: string;
    image: string;
  };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const handleClick = () => {
    window.open(article.link, "_blank");
  };

  return (
    <div className="article" onClick={handleClick}>
      <img src={article.image} alt="Article Image" />
      <a>{article.name}</a>
    </div>
  );
};


export function LearnPage() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/article.json");
      const data = await response.json();
      setArticles(data);
    };
    fetchData();
  }, []);

  return (

    <ErrorBoundary>
      <div className={styles["mask-page"]}>
        <div className="window-header">
          <div className="window-header-title">
            <div className="window-header-main-title">
              学习中心

            </div>
            <div className="window-header-submai-title">
              学习更多ChatGPT使用技巧

            </div>
          </div>
          <div className="window-actions">
            <div className="window-action-button">
              <IconButton
                icon={
                  <CloseIcon />}
                bordered
                onClick={() => navigate(Path.Home)}
              />
            </div>
          </div>
        </div>
        <div style={{ padding: "1rem", overflow: "scroll" }}>
          <div className="LearnConten">
            {articles.map((article: { id: any; }) => (

              <Article key={article.id} article={article} />
            ))}

          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

