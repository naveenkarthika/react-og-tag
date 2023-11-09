import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const metaDecorator = require("./metaDecorator.json");


const MetaDecorator = ({ title, description, imageUrl, id = '' }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta
      property="og:url"
      content={metaDecorator + id}
    />
  </Helmet>
);

export default MetaDecorator;
