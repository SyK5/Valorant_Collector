import React, { useEffect, useContext } from "react";

import WeaponF from "../../fetch/Weapon.js";
import { ApiContext } from "../useContext/apiContext.jsx";

const WeaponsTable = () => {
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

  const extractWallPenetration = (wallPenetration) => {
    if (!wallPenetration) return "n/a";
    const parts = wallPenetration.split("::");
    return parts.length > 1 ? parts[1] : wallPenetration;
  };

  return (
    <div className="ArmorCon">
      <table>
        <thead>
          <tr>
            <th className="th1">Weapon</th>
            <th className="th2">$</th>
            <th className="th3">Mag.</th>
            <th className="th4">Fire Rate</th>
            <th className="th5">Zoom</th>
            <th className="th6">Pen.</th>
            <th className="th7">Max. DMG</th>
          </tr>
        </thead>
        <tbody>
          {Api.weapons.map((weapon) => (
            <tr key={weapon.displayName}>
              <td>{weapon.displayName}</td>
              <td>{weapon.shopData ? weapon.shopData.cost : "n/a"}</td>
              <td>
                {weapon.weaponStats ? weapon.weaponStats.magazineSize : "n/a"}
              </td>
              <td>
                {weapon.weaponStats ? weapon.weaponStats.fireRate : "n/a"}
              </td>
              <td>
                {weapon.weaponStats && weapon.weaponStats.adsStats
                  ? `${weapon.weaponStats.adsStats.zoomMultiplier}x`
                  : "n/a"}
              </td>
              <td>
                {weapon.weaponStats
                  ? extractWallPenetration(weapon.weaponStats.wallPenetration)
                  : "n/a"}
              </td>
              <td>
                {weapon.weaponStats
                  ? `${weapon.weaponStats.damageRanges[0].headDamage}/${
                      weapon.weaponStats.damageRanges[0].bodyDamage
                    }/${weapon.weaponStats.damageRanges[0].legDamage.toFixed(
                      2
                    )}`
                  : "n/a"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeaponsTable;
