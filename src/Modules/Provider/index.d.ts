declare module "io-elements-provider" {
  import React from "react";

  interface IOElementsProviderProps {
    children: React.ReactNode;
    // Add any additional props here
  }

  const IOElementsProvider: React.FC<IOElementsProviderProps>;

  export default IOElementsProvider;
}
