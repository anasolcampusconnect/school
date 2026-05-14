import React from 'react';

const PrincipalMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 text-[#0B1E4A] p-10">
      <h1 className="text-4xl font-bold mb-4">Principal Message</h1>
      <p className="text-xl text-gray-500 italic font-medium">Message Details - Coming Soon 🚀</p>
      <div className="mt-8 w-24 h-1 bg-[#059669]"></div>
    </div>
  );
};

export default PrincipalMessage;