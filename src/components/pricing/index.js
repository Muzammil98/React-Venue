import React, { Component } from "react";
import Button from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Silver", "Gold", "Platinum"],
    desc: [
      "asdasd sadsadas asldalkdasnd saldanskd dasd, sadasdlk asdmsad",
      "asdasd sadsadas asldalkdasnd saldanskd dasd, sadasdlk asdmsad",
      "asdasd sadsadas asldalkdasnd saldanskd dasd, sadasdlk asdmsad"
    ],
    linkto: ["http://sales/s", "http://sales/g", "http://sales/p"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((price, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]} </div>
            <div className="pricing_buttons">
              <Button
                text="Purchase"
                bck="#ffa800"
                link={this.state.linkto[i]}
                color="#fff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
