import React, { useEffect, useContext } from "react";

import WeaponF from "../../fetch/Weapon.js";
import { ApiContext } from "../useContext/apiContext.jsx";

const Skins = () => {
  const { Api, ApiDispatch } = useContext(ApiContext);

  useEffect(() => {
    const fetchWeapon = async () => {
      try {
        const weapon = await WeaponF();
        ApiDispatch({ type: "Weapon", payload: weapon });
      } catch (error) {
        throw Error("Fehler beim Laden der Bundles:", error);
      }
    };

    fetchWeapon();
  }, []);
  return (
    <div className="SkinsCon">
      <div className="Weapons">
        {Api.weapons.length === 0
          ? "Weapons loading"
          : Api.weapons.map((weapon, i) => (
              <div key={weapon.displayName} className={`Weapon Weapon${i + 1}`}>
                <img
                  src={weapon.displayIcon}
                  alt={weapon.displayName}
                  key={weapon.displayName}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = `${weapon.skins.at(4).displayIcon}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = `${weapon.skins.at(7).displayIcon}`)
                  }
                />
                <h3>{weapon.displayName}</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Skins;
