import React from "react";
import styled from "styled-components";
import details from "./FooterLinks";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #ffffff;
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  margin-right: 50px;
  @media screen and (max-width: 800px) and (min-width: 200px) {
  }
  > * {
    flex: 1;
  }
  .title {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;
const FooterDown = styled.div`
  float: left;
  padding: 10px;
  border-bottom: 1px solid;
  color: #d3d2d2;
  height: 2px;
  margin: 0 0 17px;
  > div {
    color: white;
    float: left;
    width: 20%;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        {details?.map((item, i) => (
          <FooterSection key={i}>
            <div style={{ color: "#4a4a4a", marginBottom: "10px" }}>
              <strong>{item.title}</strong>
            </div>
            {item.links.map((link, i) => (
              <Link
                style={{
                  color: "#858585",
                  textDecoration: "none",
                  lineHeight: "1.5",
                }}
                to={link.url}
                key={i}
              >
                {link.title}
              </Link>
            ))}
          </FooterSection>
        ))}
        <FooterSection>
          <div style={{ color: "#4a4a4a" }}>SIGN UP TO STAY UPDATED</div>
          <input
            style={{ width: "300px" }}
            placeholder="    ENTER YOUR EMAIL ADDRESS"
          />
          <button
            style={{
              color: "white",
              background: "#99c655",
              width: "120px",
              margin: "10px",
              border: "none",
            }}
          >
            SUBSCRIBE
          </button>
        </FooterSection>
      </FooterContainer>

      <FooterContainer>
        <div style={{ float: "left", marginRight: "52%" }}>
          <div
            style={{
              color: "#4a4a4a",
              textDecoration: "none",
              lineHeight: "2.5",
            }}
          >
            <strong>CAREERS</strong>
          </div>
          <Link
            style={{
              color: "#858585",
              textDecoration: "none",
              lineHeight: "1.5",
            }}
            to="/"
          >
            work with us
          </Link>
        </div>
      </FooterContainer>
      <hr />

      <FooterContainer>
        {/* <div>
                        <img width="100px" src="https://originserver-static1-uat.pvrcinemas.com/images/panacea.png" alt="tag" />
                    </div>
                    <div>
                        <img width="100px" src="https://originserver-static1-uat.pvrcinemas.com/images/nortan.png" alt="tag" />
                    </div>
                    <div>PRIVACY POLICY</div>
                    <div>TERMS & CONDITION</div>
                    <div>TERMS OF USE</div>
                </FooterDown>
                <FooterDown>
                    <div>

                        <img width="20px" src="/apple.svg" alt="apple" />
                    </div>
                    <div>
                        <img width="20px" src="/apple-google.png" alt="apple" />
                    </div>
                    <div>
                        <img width="20px" src="/master.svg" alt="apple" />
                    </div>
                    <div>
                        <img width="20px" src="/visa.svg" alt="apple" />

                    </div>
                    <div><img width="20px" src="/amex.svg" alt="apple" />
                    </div>
                </FooterDown>  */}
      </FooterContainer>
      <FooterContainer>
        <div style={{ color: "#858585" }}>
          © 2020 Natures Basket Limited. All rights reserved.|Privacy
          Policy|Terms of Use|Site Map|Mobile Site|FSSAI License Number -
          11519002000496
        </div>
      </FooterContainer>
      <div style={{ paddingBottom: "50px" }}></div>
    </>
  );
}
