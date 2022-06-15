import React from 'react';
import Nav from '../components/Nav';
import SiteHeader from '../components/SiteHeader';
import Video from '../components/Video';

const HomePage = () => (
  <>
    <SiteHeader />
    <Nav />
    <div className="content-section">
      <Video
        videoSrcURL="https://www.youtube.com/embed/vtYNV56MvxU"
        videoTitle="The Slacks at the Tractor Tavern in Seattle, WA"
      />
    </div>
    <div className="content-section">
      <h1>About</h1>
      <p>
        <b>Introducing The Slacks</b> - the World's Greatest Cover Band!!! This
        band explodes with energy every time they strap on their instruments and
        they're guaranteed to deliver an awesome time! The Slacks provide tons
        of energy, high-quality musicianship, 5-part vocal harmonies and
        professionalism with each and every performance. They'll keep the dance
        floor packed with unforgettable versions of the classics you love and
        others you'd forgotten you dug!
      </p>
      <p>
        Have you ever wondered why other Seattle cover bands don't play enough
        Prince, Journey, Hall &amp; Oates, Pat Benatar or Michael Jackson? The
        reason is − THEY CAN'T!! Most singers simply do not have the vocal range
        necessary to deliver the goods on your favorite songs. Not a problem
        with The Slacks!! They feature world-class, spot-on vocals and offer the
        most diverse blend of Soulful Seventies, Eighties and (a few) Nineties
        jams you will ever hear − all in their ORIGINAL KEYS!! In addition to
        the artists that have been mentioned, you'll hear Kool &amp; the Gang,
        Earth Wind and Fire, Al Green, Steely Dan, Elton John, Neil Diamond, The
        Trammps, Tom Jones, Chic and countless others you love! Complete song
        list can be found below!
      </p>
      <p>
        Book The Slacks for your next event, you will not be disappointed!!!
      </p>
    </div>
    <div className="content-section">
      <h1>Photos</h1>
    </div>
    <div className="content-section">
      <h1>Shows</h1>
    </div>
    <div className="content-section">
      <h1>Song List</h1>
    </div>
    <div className="content-section">
      <h1>Corporate Partners</h1>
    </div>
  </>
);

export default HomePage;
