import { Linkedin } from 'lucide-react';
import React, { useEffect } from 'react';

const LinkedInBadge: React.FC = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";

    // Append the script to the body or a specific container
    document.body.appendChild(script);

    // Optional: Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="medium" 
      data-theme="light" 
      data-type="VERTICAL" 
      data-vanity="sivaramakrishnan-s-257294228" 
      data-version="v1"
    >
      <a 
        className="badge-base__link LI-simple-link" 
        href="https://in.linkedin.com/in/sivaramakrishnan-s-257294228?trk=profile-badge"
      >
        <Linkedin size={20} className='mt-2'/>
      </a>
    </div>
  );
};

export default LinkedInBadge;
