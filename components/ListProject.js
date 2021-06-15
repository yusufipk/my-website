import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

export default function ListProject({ project }) {
  return (
    <React.Fragment>
      {project.map((item) => (
        <div key={item.fields.number} className="projects__container">
          <div className="projects__container__content">
            <hr />
            <div className="projects__container__content-meta">
              <p className="projects__container__content-number">
                {item.fields.number}
              </p>
              <p className="projects__container__content-date">
                {item.fields.date.slice(8, 10)}
                {item.fields.date.slice(4, 8)}
                {item.fields.date.slice(0, 4)}
              </p>
            </div>
            <h1 className="heading-1 projects__heading">{item.fields.title}</h1>
            <div className="projects__container__content-description">
              {documentToReactComponents(item.fields.description)}
            </div>
          </div>
          <div className="projects__container-image">
            <Image
              src={`https:${item.fields.projectImage.fields.file.url}`}
              alt={item.fields.projectImage.fields.title}
              width={870}
              height={570}
            />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
