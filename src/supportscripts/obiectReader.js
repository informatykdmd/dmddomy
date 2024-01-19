// import React, { useState, useEffect } from 'react';
import myDatabaseConfig from './env_connect'

const ObiectReader = () => {
  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
	console.log('ApiAddress: ', ApiAddress)
  return (
    <div>
      <h1>User Information</h1>
			{ApiAddress}
    </div>
  );
};

export default ObiectReader;
