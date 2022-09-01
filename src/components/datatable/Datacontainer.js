import React from "react";
import Table from "react-bootstrap/Table";

import bitman from "../../images/logos/bitmain.png";
import ArrowLight from "../../images/arrows/arrow-light.png";
import ArrowDark from "../../images/arrows/arrow-dark.png";

function Datacontainer(props) {
  const stylenames = props.styleNames;
  const logo_head = props.logo;

  function Arrow() {
    if (stylenames === "dark-blue") {
      return ArrowLight;
    }
    return ArrowDark;
  }
  return (
    <div className={`data-conteiner ${stylenames}`}>
      <div className="data-heading">
        <div class="crypto-logo">
          <img src={logo_head} alt="Logo" />
        </div>
        <div class="divider-arrow">
          <img src={Arrow()} alt="Arrow" />
        </div>
        <div class="crypto-link">
          <a href="www.cryptominers.ae">www.cryptominers.ae</a>
        </div>
      </div>
      <div className="data-table">
        <Table striped hover>
          <thead>
            <tr>
              <th>MODEL</th>
              <th>HASHRATE</th>
              <th>POWER</th>
              <th>PRICE</th>
              <th>INCOME</th>
              <th>LEAD TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ANTMINER E9</td>
              <td>2.4 Gh/s</td>
              <td>1920W</td>
              <td>AED 48,800</td>
              <td>AED 48,800</td>
              <td>October Batch - 100% Adv</td>
            </tr>
            <tr>
              <td>ANTMINER E9</td>
              <td>2.4 Gh/s</td>
              <td>1920W</td>
              <td>AED 48,800</td>
              <td>AED 48,800</td>
              <td>October Batch - 100% Adv</td>
            </tr>
            <tr>
              <td>ANTMINER E9</td>
              <td>2.4 Gh/s</td>
              <td>1920W</td>
              <td>AED 48,800</td>
              <td>AED 48,800</td>
              <td>October Batch - 100% Adv</td>
            </tr>
            <tr>
              <td>ANTMINER E9</td>
              <td>2.4 Gh/s</td>
              <td>1920W</td>
              <td>AED 48,800</td>
              <td>AED 48,800</td>
              <td>October Batch - 100% Adv</td>
            </tr>
            <tr>
              <td>ANTMINER E9</td>
              <td>2.4 Gh/s</td>
              <td>1920W</td>
              <td>AED 48,800</td>
              <td>AED 48,800</td>
              <td>October Batch - 100% Adv</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Datacontainer;
