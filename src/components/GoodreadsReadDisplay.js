import React from "react";

import { useEffect } from "react";

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
      <div id="gr_grid_widget_1640139661">
        <div class="gr_grid_container">
          <div class="gr_grid_book_container">
            <a
              title="This Is How You Lose the Time War"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/43352954-this-is-how-you-lose-the-time-war"
            >
              <img
                alt="This Is How You Lose the Time War"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545755487l/43352954._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Velvet Was the Night"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/54746205-velvet-was-the-night"
            >
              <img
                alt="Velvet Was the Night"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617426360l/54746205._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Pride and Prejudice"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/1885.Pride_and_Prejudice"
            >
              <img
                alt="Pride and Prejudice"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Jennifer's Way: My Journey with Celiac Disease--What Doctors Don't Tell You and How You Can Learn to Live Again"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/18210766-jennifer-s-way"
            >
              <img
                alt="Jennifer's Way: My Journey with Celiac Disease--What Doctors Don't Tell You and How You Can Learn to Live Again"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412063156l/18210766._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Rhythm of War (The Stormlight Archive, #4)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/49021976-rhythm-of-war"
            >
              <img
                alt="Rhythm of War"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="The Pragmatic Programmer: From Journeyman to Master"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer"
            >
              <img
                alt="The Pragmatic Programmer: From Journeyman to Master"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Clojure for the Brave and True"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/20873338-clojure-for-the-brave-and-true"
            >
              <img
                alt="Clojure for the Brave and True"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432497082l/20873338._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Murder on the Orient Express"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/34734250-murder-on-the-orient-express"
            >
              <img
                alt="Murder on the Orient Express"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502948890l/34734250._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Clean Code: A Handbook of Agile Software Craftsmanship"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/3735293-clean-code"
            >
              <img
                alt="Clean Code: A Handbook of Agile Software Craftsmanship"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Red Rising (Red Rising Saga, #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/15839976-red-rising"
            >
              <img
                alt="Red Rising"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461354651l/15839976._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="The Samurai's Garden"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/51113.The_Samurai_s_Garden"
            >
              <img
                alt="The Samurai's Garden"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327876036l/51113._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="The Marrow Thieves"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/34649348-the-marrow-thieves"
            >
              <img
                alt="The Marrow Thieves"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490885548l/34649348._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="The Three-Body Problem (Remembrance of Earth’s Past #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/20518872-the-three-body-problem"
            >
              <img
                alt="The Three-Body Problem"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1415428227l/20518872._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="The Blue Castle"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/56470660-the-blue-castle"
            >
              <img
                alt="The Blue Castle"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609262248l/56470660._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Coraline"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/6283504-coraline"
            >
              <img
                alt="Coraline"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334489022l/6283504._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Dawnshard (The Stormlight Archive, #3.5)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/54511226-dawnshard"
            >
              <img
                alt="Dawnshard"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603931041l/54511226._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="From the Ashes: My Story of Being Métis, Homeless, and Finding My Way"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/52149264-from-the-ashes"
            >
              <img
                alt="From the Ashes: My Story of Being Métis, Homeless, and Finding My Way"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561088373l/52149264._SX98_SY160_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="The Art of War"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/28178146-the-art-of-war"
            >
              <img
                alt="The Art of War"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449910572l/28178146._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Amusing Ourselves to Death: Public Discourse in the Age of Show Business"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/6594462-amusing-ourselves-to-death"
            >
              <img
                alt="Amusing Ourselves to Death: Public Discourse in the Age of Show Business"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1623240447l/6594462._SX98_.jpg"
              />
            </a>
          </div>
          <div class="gr_grid_book_container">
            <a
              title="Holes (Holes, #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/38709.Holes"
            >
              <img
                alt="Holes"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618269830l/38709._SX98_.jpg"
              />
            </a>
          </div>
          <noscript>
            <br />
            Share{" "}
            <a rel="nofollow" href="/">
              book reviews
            </a>{" "}
            and ratings with Jack, and even join a{" "}
            <a rel="nofollow" href="/group">
              book club
            </a>{" "}
            on Goodreads.
          </noscript>
        </div>
      </div>
    </>
  );
};
export default GoodreadsReadDisplay;
