import React from "react";

import Foooter from "./Footer";

import Datacontainer from "./datatable/Datacontainer";
import Goldshell from "./datatable/Goldshell";
import bitmans from "../images/logos/bitmain.png";
import goldshell from "../images/logos/goldshell.png";
import microbts from "../images/logos/microbts.png";
import canaan from "../images/logos/canaan.png";
import jasmainer from "../images/logos/jasmainer.png";
import yami from "../images/logos/yami.png";
import helium from "../images/logos/helium.png";
import ipollo from "../images/logos/ipollo.png";
import innosilicon from "../images/logos/innosilicon.png";

export default function Main() {
  return (
    <main id="main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Datacontainer styleNames="yellow" logo={bitmans} />
            <Datacontainer styleNames="dark-white" logo={goldshell} />
            <Datacontainer styleNames="dark-white" logo={microbts} />
            <Datacontainer styleNames="dark-blue" logo={canaan} />
            <Datacontainer styleNames="dark-white" logo={jasmainer} />
            <Datacontainer styleNames="dark-bluelight" logo={yami} />
            <Datacontainer styleNames="dark-skyblue" logo={ipollo} />
            <Datacontainer styleNames="dark-blueblack" logo={innosilicon} />
          </div>
        </div>
      </div>

      <Foooter />
    </main>
  );
}
