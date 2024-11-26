import { NextPage } from "next";

 
declare module "next" {
  type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}
