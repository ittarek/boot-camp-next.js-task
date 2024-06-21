import React from 'react';

const Container = ({children}) => {
    return (
      <div className="max-w-[2520px] mx-auto xl:px-3 md:px-6 sm:px-2 px-4 my-3">
        {children}
      </div>
    );
};

export default Container;