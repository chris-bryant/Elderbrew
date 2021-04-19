import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'
import tentacles from '../images/tentacles.png'
import zahaStone from '../images/zaha-stone.jpg'
import 'typeface-saira-semi-condensed';
import logoGrayscale from '../images/Elderbrew_full_bw.png'
import logo from '../images/Elderbrew_full.png'
import blackLodgeIcon from '../images/black-lodge-icon.png'
import mildIcon from '../images/english-dark-mild-icon.png'
import halflingIcon from '../images/halfling-icon.png'
import pintGlassIcon from '../images/pint-glass-icon.png'
import thaiFighterIcon from '../images/thai-fighter-icon.png'
import owlsIcon from '../images/owls-icon.png'
import owls from '../images/owls.jpg'
import fbIcon from '../images/FB-f-Logo__white_50.png'
import igIcon from '../images/glyph-logo_May2016.png'

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    padding-top: 100px;
    background-color: #000;
    background-image:
      url(${tentacles}),
      url(${zahaStone});
    background-repeat: no-repeat, no-repeat;
    background-position: bottom left, top left;
    background-attachment: fixed, fixed;
    color: #eee;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-size: 18px;
  
    h4 span {
      font-weight: normal;
    }

    h2 span {
      display: block;
      font-size: 1.2rem;
      font-weight: normal;
    }

    .selection-banner {
      background: rgba(255, 255, 255, 0.4);
      border-radius: 0.25em;
      width: 600px;
      max-width: 80vw;
      margin: 2em auto;
      padding: 1em;
    }
  
    img {
      max-width: 90%;
    }
  
    h1, h2, h3, h4, h5 {
      color: #eee;
    }
  
    a,
    a:visited {
      color: #eee;
    }
    
    a:hover {
      color: #aaa;
    }
  }
`

const Logo = styled.a`
  position: relative;
  display: inline-block;

  img.logo {
    transition: all 1s;
    width: 600px;
    max-width: 80vw;
    cursor: pointer;
  }

  img.logo.color {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover img.logo.color {
    opacity: 1;
  }
`

const BrewsSection = styled.div`
  text-align: left;
  width: 600px;
  max-width: 80vw;
  margin: 0 auto;
`

const SocialLinks = styled.div`
  margin-top: 1em;

  a {
    text-decoration: none;
  }

  img {
    width: 50px;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
`

const Hours = styled.div`
  p {
    margin: 0;
  }
`

const BeerIcon = styled.img`
  width: 40px;
  vertical-align: middle;
`

const BeerSection = styled.section`
  margin-top: 3em;
  background: rgba(0, 0, 0, 0.75);
  padding: 1em;
  border-radius: 0.5em;

  & > h3 > span {
    font-weight: normal;
    font-size: 0.8em;
  }

  & > .stats > p {
    margin: 0;
    font-size: 0.8em;
  }

  & > .stats > p:last-child {
    margin-bottom: 1em;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Logo>
      <img src={logoGrayscale} className="logo" alt="Elderbrew" />
      <img src={logo} className="logo color" alt="Elderbrew" />
    </Logo>
    <h1>Bristol, TN's First Small Batch Brewery</h1>
    <h2>24 6th Street, Bristol, TN 37620</h2>
    <h3>Hours</h3>
    <Hours>
      <p>
        Monday - Tuesday: Gone Fishin'
      </p>
      <p>
        Wednesday - Friday: 5pm-10pm
      </p>
      <p>
        Saturday: 3pm - 10pm
      </p>
      <p>
        Sunday: 1pm-6pm
      </p>
    </Hours>
    <h3>Contact</h3>
    <p>
      <a href="mailto:elderbrewtn@gmail.com">elderbrewtn@gmail.com</a>
    </p>
    <h2 className="selection-banner">
      Our beer selection changes weekly!
      <span>
        Follow us on Facebook and Instagram for the latest updates!
      </span>
      <SocialLinks>
        <a href="https://www.facebook.com/elderbrew/">
          <img src={fbIcon} alt="Elderbrew on Facebook"/>
        </a>
        <a href="https://www.instagram.com/elderbrew/">
          <img src={igIcon} alt="Elderbrew on Instagram" />
        </a>
      </SocialLinks>
    </h2>
    {/* <img src={owls} alt="The Owls Are Not What They Seem" />
    <h1>The Owls Are Not What They Seem</h1>
    <h4>Brett Saison with EKG, Amarillo, and Grains of Paradise</h4>
    <BrewsSection>
      <p>
        We are delighted to present our first collaboration ever, with the inimitable Depot Street Brewing.
        Owls is a farmhouse Brett saison with complexity stacked into every part of it. Tart, malty, even
        a little hoppy for its style, spicy, estery. At 6.6%, you can (and will) drink the whole 750ml bottle
        on your own! Each bottle was hand corked and caged by your ol' pals at Elderbrew and Depot Street.
        Available for $12 per bottle, or for a limited time, you can get our custom and highly limited glassware
        and a bottle for $20! Don't wait. Neither the glasses nor the beer will last long!
      </p>
    </BrewsSection> */}
    <h1>Elderbrew Beers</h1>
    <BrewsSection>
      <p>
        We pride ourself on quality, craftsmanship, and creativity. For that reason, Elderbrew is a
        small batch brewery, brewing only one barrel at a time (31 gallons). Our beer is only available
        at our taproom. That gives us the opportunity to focus entirely on brewing consistently
        amazing beer.
      </p>
      <BeerSection>
        <h3>
          <BeerIcon src={blackLodgeIcon} alt="Black Lodge" />
          Black Lodge
          <span> - Imperial Porter</span>
        </h3>
        <div className="stats">
          <p>
            <strong>ABV: </strong> 7%
          </p>
          <p>
            <strong>IBU: </strong> 55
          </p>
        </div>
        <p>
          Black Lodge is the Elderbrew flagship beer. A big, bold, bitter Imperial porter,
          black as midnight on a moonless night. Strongly roasty, but surprisingly smooth,
          it's an easy drinker even in the dead of summer.
        </p>
      </BeerSection>
      <BeerSection>
        <h3>
          <BeerIcon src={blackLodgeIcon} alt="Black Lodge" />
          Take the Black
          <span> - Black IPA</span>
        </h3>
        <div className="stats">
          <p>
            <strong>ABV: </strong> 7.4%
          </p>
          <p>
            <strong>IBU: </strong> 61
          </p>
        </div>
        <p>
          We took a pale ale grain bill, made it totally black with debittered chocolate wheat malt,
          threw in a ton of Cascade and Centennial, and called it Take the Black. For an additional unique bitter note,
          we also add a touch of wormwood, the very same herb used in absinthe. Take the Black is brewed especially
          for lovers of a bitter beer.
        </p>
      </BeerSection>
      <BeerSection>
        <h3>
          <BeerIcon src={thaiFighterIcon} alt="Thai Fighter" />
          Thai Fighter
          <span> - Pad Thai Inspired Pale Ale</span>
        </h3>
        <div className="stats">
          <p>
            <strong>ABV: </strong> 6.6%
          </p>
          <p>
            <strong>IBU: </strong> 46
          </p>
        </div>
        <p>
          Inspired by the flavor profile of pad thai, we created the now-infamous Thai Fighter--
          a pale-ale base with Motueka and Pacific Jade, with toasted coconut, peanut flour, and
          locally-grown Thai chilies in secondary. It's a fiery beverage unlike any you've had before.
        </p>
      </BeerSection>
      <BeerSection>
        <h3>
          <BeerIcon src={halflingIcon} alt="Halfling" />
          Halfling
          <span> - Pale Ale</span>
        </h3>
        <div className="stats">
          <p>
            <strong>ABV: </strong> 4.1%
          </p>
          <p>
            <strong>IBU: </strong> 55
          </p>
        </div>
        <p>
          Coming in at just over 4%, Halfling is a very drinkable pale ale hopped with Loral,
          and dry hopped with Amarillo and Citra. It's a big hop punch in a very drinkable format.
        </p>
      </BeerSection>
      <BeerSection>
        <h3>
          <BeerIcon src={mildIcon} alt="Bring Out Your Dead" />
          Bring Out Your Dead
          <span> - English Dark Mild</span>
        </h3>
        <div className="stats">
          <p>
            <strong>ABV: </strong> 3.8%
          </p>
          <p>
            <strong>IBU: </strong> 19
          </p>
        </div>
        <p>
          The historical English dark mild was nearly extinct by the middle of the 20th century.
          In recent years, however, there has been a revival of what has been described as the
          original session beer. Focusing totally on the grain, this ale has almost no hop aroma,
          and is served fresh, with low carbonation. Expect to find a surprisingly malty beer for its
          strength, with a slightly fruity finish thanks to the English ale yeast.
        </p>
      </BeerSection>
      <BeerSection>
        <h3>
          <BeerIcon src={owlsIcon} alt="The Owls Are Not What They Seem" />
          The Owls Are Not What They Seem
          <span> - Brett Saison</span>
        </h3>
        <div className="stats">
          <p>
            <strong>ABV: </strong> 6.6%
          </p>
          <p>
            <strong>IBU: </strong> 28
          </p>
        </div>
        <p>
          We are delighted to present our first collaboration ever, with the inimitable Depot Street Brewing.
          Owls is a farmhouse Brett saison with complexity stacked in every corner. Tart, malty, even
          a little hoppy for its style, spicy, estery. At 6.6%, you can (and will) drink the whole 750ml bottle
          on your own! Each bottle was hand corked and caged by your ol' pals at Elderbrew and Depot Street.
          Available for $12 per bottle, or for a limited time, you can get our custom and highly limited glassware
          and a bottle for $20! Don't wait. Neither the glasses nor the beer will last long!
        </p>
      </BeerSection>
    </BrewsSection>
  </>
)

export default IndexPage
