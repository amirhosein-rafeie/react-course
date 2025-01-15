import React,{useEffect} from "react";

const ComponentA = () => {
  // unmounting
  useEffect(() => {
    return () => {
      console.log("Component is unmounted.");
    };
  }, []);
  
  return <div>ComponentA</div>;
};

export default ComponentA;
