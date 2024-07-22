import React, { useEffect, useContext, useRef, useState } from 'react'
import { ApiContext } from '../useContext/apiContext.jsx';

import BundleF from '../../fetch/Bundle.js'

const Home = () => {
  const {Api, ApiDispatch} = useContext(ApiContext);
  const [bar, setbar] = useState({
    bundle: false,
    agent: false,
    skins: false,
  });

  const latest = useRef(null);
  const agent = useRef(null);
  const skins = useRef(null);

  const barToggle = (name) => {
    setbar({
      bundle: name === 'late',
      agent: name === 'agent',
      skins: name === 'skin',
    });
  };

  useEffect(() => {
    const fetchBundles = async () => {
      try {
        const bundles = await BundleF();
        ApiDispatch({ type: 'Bundle', payload: bundles });
      } catch (error) {
        throw Error('Fehler beim Laden der Bundles:', error);
      }
    };

    fetchBundles();
    barToggle('late');
  }, [ApiDispatch]);

  return (
    <>
    <div className="mainCon">
      <div className="mainCon1">
        <div className="mainTab">
          <p ref={latest} onClick={() => barToggle('late')}>LATEST BUNDLE</p>
          <div className='break' />
          <p ref={agent} onClick={() => barToggle('agent')}>AGENT</p>
          <div className='break' />
          <p ref={skins} onClick={() => barToggle('skin')}>SKINS</p>
          <div className='break' />
        </div>
        <div className="window">
          {bar.bundle && (
            Api.bundle.length === 0 ? <h1>Image Loading</h1> : <img className='mainImg' src={`${Api.bundle[0].displayIcon}`} alt="bundle1" />
          )}
          {bar.bundle && (
            <div className="titel">
              {Api.bundle.length === 0 ? <h1>Name Loading</h1> : <h2>{`${Api.bundle[0].displayName}`}</h2>}
            </div>
          )}
          {bar.agent && (
            <div>
              Agent stufff
            </div>
          )}
          {bar.skins && (
            <div>
              skins stufff
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="sideCon">
      {/* Side content goes here */}
    </div>
    </>
  );
}

export default Home;
