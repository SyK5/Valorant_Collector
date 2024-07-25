import React, { useEffect, useContext, useState } from "react";
import { ApiContext } from "../useContext/apiContext.jsx";

import BundleF from "../../fetch/Bundle.js";
import AgentF from "../../fetch/Agent.js";
import RankF from "../../fetch/Rank.js";

import SelectRank from "../SelectRank.jsx";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { Api, ApiDispatch } = useContext(ApiContext);

  const [bar, setbar] = useState({
    bundle: false,
    agent: false,
    rank: false,
  });

  const [selectedRank, setSelectedRank] = useState("");

  let favTeam = [];
  let favTeam2 = [];

  const barToggle = (name) => {
    setbar({
      bundle: name === "late",
      agent: name === "agent",
      rank: name === "rank",
    });
  };

  const handleChange = (event) => {
    setSelectedRank(event.target.value);
  };

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const bundles = await BundleF();
        ApiDispatch({ type: "Bundle", payload: bundles });
      } catch (error) {
        throw Error("Fehler beim Laden der Bundles:", error);
      }
    };

    const fetchAgents = async () => {
      try {
        const agents = await AgentF();
        const playableAgents = agents.filter(
          (agent) => agent.isPlayableCharacter
        );
        ApiDispatch({ type: "Agent", payload: playableAgents });
      } catch (error) {
        throw new Error("Fehler beim Laden der Agents:", error);
      }
    };

    const fetchRank = async () => {
      try {
        const ranks = await RankF();
        const lastRankSys = ranks.pop(-1).tiers;
        ApiDispatch({ type: "Rank", payload: lastRankSys });
      } catch (error) {
        throw Error("Fehler beim Laden der Bundles:", error);
      }
    };

    fetchBundles();
    fetchAgents();
    fetchRank();
    barToggle("late");
    console.log(Api);
  }, [ApiDispatch]);

  Api.agent.length === 0
    ? ""
    : (favTeam = Api.agent.filter(
        (agent) =>
          agent.displayName === "Clove" ||
          agent.displayName === "Gekko" ||
          agent.displayName === "Iso" ||
          agent.displayName === "Harbor" ||
          agent.displayName === "Skye"
      ));

  Api.agent.length === 0
    ? ""
    : (favTeam2 = Api.agent.filter(
        (agent) =>
          agent.displayName === "Breach" ||
          agent.displayName === "Omen" ||
          agent.displayName === "Killjoy" ||
          agent.displayName === "Sage" ||
          agent.displayName === "Fade"
      ));

  return (
    <div className="HomeCon">
      <div className="mainCon">
        <div className="mainCon1">
          <div className="mainTab">
            <p
              className={bar.bundle ? "active" : ""}
              onClick={() => barToggle("late")}
            >
              LATEST BUNDLE
            </p>
            <div className="break" />
            <p
              className={bar.agent ? "active" : ""}
              onClick={() => barToggle("agent")}
            >
              AGENT
            </p>
            <div className="break" />
            <p
              className={bar.rank ? "active" : ""}
              onClick={() => barToggle("rank")}
            >
              RANK ABLE
            </p>
            <div className="break" />
          </div>
          <div className="window">
            {bar.bundle && (
              <>
                {Api.bundle.length === 0 ? (
                  <h1>Image Loading</h1>
                ) : (
                  <img
                    className="mainImg"
                    src={`${Api.bundle[0].displayIcon}`}
                    alt="bundle1"
                  />
                )}
                <div className="titel">
                  {Api.bundle.length === 0 ? (
                    <h2>Name Loading</h2>
                  ) : (
                    <h2>{`${Api.bundle[0].displayName}`}</h2>
                  )}
                </div>
              </>
            )}
            {bar.agent && (
              <div className="agents-Window">
                <h2 className="agent-Titel">MY FAVORITE AVERAGE TEAM COMP</h2>
                {favTeam.length === 0 && favTeam2.length === 0 ? (
                  <h1>Image loading</h1>
                ) : (
                  [...favTeam, ...favTeam2].map((agent, i) => (
                    <div
                      className={`agent agent${i + 1}`}
                      key={agent.displayName}
                    >
                      <img src={agent.displayIcon} alt={agent.displayName} />
                      <h3>{agent.displayName}</h3>
                    </div>
                  ))
                )}
              </div>
            )}
            {bar.rank && (
              <div className="rank-Window">
                <h1 className="rankTitel">
                  Give you Rank Here and see up to wich rank play able{" "}
                </h1>
                <SelectRank Api={Api} actualRank={selectedRank} />
                <form className="selectForm">
                  <select
                    value={selectedRank}
                    onChange={handleChange}
                    className="selectRank"
                  >
                    <option>Select Rank</option>
                    {Api.rank.length === 0
                      ? ""
                      : Api.rank.map((rank, i) =>
                          i <= 2 ? (
                            ""
                          ) : (
                            <option key={`${rank.tier}`}>
                              {rank.tierName}
                            </option>
                          )
                        )}
                  </select>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sideCon">
        <div className="sideWindow">
          <ul className="Skinlist">
            <h3>
              <NavLink to={"skins"}>Skins</NavLink>
            </h3>
            <li>
              <NavLink to={"skins"}>All Skins</NavLink>
            </li>
            <li>
              <NavLink to={"skins"}>Skins by Type</NavLink>
            </li>
            <li>
              <NavLink to={"skins"}>Bundles</NavLink>
            </li>
          </ul>
          <ul className="Weaponlist">
            <h3>
              <NavLink to={"armory"}>Weapon</NavLink>
            </h3>
            <li>
              <NavLink to={"armory"}>Weapon list</NavLink>
            </li>
            <li>
              <NavLink to={"armory"}>Weapon stats</NavLink>
            </li>
            <li>
              <NavLink to={"armory"}>Weapon costs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
