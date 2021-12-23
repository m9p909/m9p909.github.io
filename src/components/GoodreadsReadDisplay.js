import React from "react";

import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const GoodreadsReadDisplay = () => {
  useScript(
    "https://www.goodreads.com/review/grid_widget/67451152.Jack's%20bookshelf:%20read?cover_size=medium&hide_link=true&hide_title=true&num_books=200&order=d&shelf=read&sort=date_added&widget_id=1640139661"
  );

  return (
    <>
      <h2> Books I've read! From most to least recent</h2>
      <div className="text-center" id="gr_grid_widget_1640139661">
        <Spinner animation="grow"></Spinner>
      </div>
    </>
  );
};
export default GoodreadsReadDisplay;
