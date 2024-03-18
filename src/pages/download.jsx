import React, { useEffect } from 'react';

const DownloadRedirect = () => {
  useEffect(() => {
    // Put the destination URL here
    window.location.href = 'https://lens.ondsel.com/download-and-explore';
  }, []);

  return null; // or a loader if you want
};

export default DownloadRedirect;
