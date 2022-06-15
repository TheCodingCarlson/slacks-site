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
    <div id="about" className="content-section">
      <h1 className="header">About</h1>
      <p className="text-medium">
        <b>Introducing The Slacks</b> - the World's Greatest Cover Band!!! This
        band explodes with energy every time they strap on their instruments and
        they're guaranteed to deliver an awesome time! The Slacks provide tons
        of energy, high-quality musicianship, 5-part vocal harmonies and
        professionalism with each and every performance. They'll keep the dance
        floor packed with unforgettable versions of the classics you love and
        others you'd forgotten you dug!
      </p>
      <p className="text-medium">
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
      <p className="text-medium">
        Book The Slacks for your next event, you will not be disappointed!!!
      </p>
    </div>
    <div id="photos" className="content-section">
      <h1 className="header">Photos</h1>
    </div>
    <div id="shows" className="content-section">
      <h1 className="header">Shows</h1>
    </div>
    <div id="songs" className="content-section">
      <h1 className="header">Song List</h1>
      <p className="text-medium center">
        Any Way You Want It - Journey ★ Bennie and the Jets - Elton John ★
        Billie Jean - Michael Jackson ★ Boogie Shoes - KC &amp; the Sunshine
        Band ★ Can't Take My Eyes Off of You - Frankie Avalon ★ Careless Whisper
        - Wham ★ China Girl - David Bowie ★ Copacabana - Barry Manilow ★
        December, 1963 - Frankie Vallie ★ Disco Inferno - The Trammps ★ Don't
        Stop Believing - Journey ★ Emotional Rescue - The Rolling Stones ★
        Escape (Pina Colada Song) - Rupert Holmes ★ Faithfully - Journey ★ Fly
        Me to the Moon - Frank Sinatra ★ Funkytown - Lipps ★ Get Down On It -
        Kool &amp; the Gang ★ Get Right Back - Maxine Nightengale ★ Good Times -
        Chic ★ Got to be Real - Cheryl Lynn ★ Hit Me With Your Best Shot - Pat
        Benetar ★ I Believe in a Thing Called Love - The Darkness ★ I Can't Go
        For That - Hall &amp; Oates ★ I Love the Nightlife - Alicia Bridges ★
        I'll Be Around - The Spinners ★ In the Meantime - Spacehog ★ It's Not
        Unusual - Tom Jones ★ Just the Way You Are - Billy Joel ★ Kiss - Prince
        ★ Ladies Night - Kool &amp; the Gang ★ Le Freak - Chic ★ Let's Dance -
        David Bowie ★ Let's Get It On - Marvin Gaye ★ Let's Groove - Earth, Wind
        &amp; Fire ★ Lil' Red Corvette - Prince ★ Love Rollercoaster - The Ohio
        Players ★ Lovin Touchin Squeezin - Journey ★ Madonna - Papa Don't Preach
        ★ Miss You - The Rolling Stones ★ Modern Love - David Bowie ★ Moonlight
        Feels Right - Starbuck ★ More More More - Andrea True Connection ★ More
        Than a Woman - The Bee Gees ★ Off the Wall - Michael Jackson ★ Peg -
        Steely Dan ★ Poison Arrow - ABC ★ Private Eyes - Hall &amp; Oates ★
        P.Y.T. - Michael Jackson ★ Return of the Mack - Mark Morrison ★ Rio -
        Duran Duran ★ Rubberband Man - The Spinners ★ September - Earth, Wind
        &amp; Fire ★ Shout it Out Loud - KISS ★ Surrender - Cheap Trick ★
        Suspicious Minds - Elvis Presley ★ Sweet Caroline - Neil Diamond ★ Team
        America - America, F*** Yeah! - Trey Parker &amp; Matt Stone ★ Team
        America - Freedom Isn't Free - Trey Parker &amp; Matt Stone ★ The Final
        Countdown - Europe ★ The Way You Look Tonight - Frank Sinatra ★ Thriller
        - Michael Jackson ★ Thunder Island - Jay Ferguson ★ Walking on Sunshine
        - Katrina &amp; the Waves ★ What a Wonderful World - Louie Armstrong ★
        Whip It - Devo ★ You Make My Dreams Come True - Hall &amp; Oates ★ You
        Sexy Thing - Hot Chocolate ★
      </p>
    </div>
    <div id="partners" className="content-section">
      <h1 className="header">Corporate Partners</h1>
      <p className="text-medium text-orange center">
        ♦ American Cancer Society ♦ Bear Creek Country Club ♦ Bella Luna Farms ♦
        Bellingham Golf Club ♦ Chateau St. Michelle Winery ♦ City of Leavenworth
        ♦ City of Longview ♦ City of Redmond ♦ City of Seattle ♦ Crysalis Inn
        &amp; Spa ♦ Efeste Winery ♦ Lairmont Manor ♦ Livestrong Foundation ♦
        Loudmouth Golf ♦ Maverick's Casino ♦ Microsoft Exchange ♦ Movember ♦
        Neumos ♦ Nordicfest ♦ Oak Harbor Yacht Club ♦ Oregon City ♦ Salty's ♦
        Seattle Aquarium ♦ Seattle Art Museum ♦ Seattle Yacht Club ♦ The Four
        Seasons Hotel ♦ The Point Casino ♦ Thrill the World ♦ Tractor Tavern ♦
        US Navy Beer Crawl 2010-2013 ♦ US Navy Officer's Ball ♦ West Coast
        Entertainment ♦
      </p>
    </div>
  </>
);

export default HomePage;
