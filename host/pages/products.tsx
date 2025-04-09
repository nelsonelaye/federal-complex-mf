import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import React from "react";

const RemotePage = dynamic(() => import("remote/ProductsPage"), {
  ssr: false,
});
const Products = () => {
  return <RemotePage />;
};

// export function Products(props: any) {
//   return <RemotePage {...props} />;
// }

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const remotePage = await import("remote/ProductsPage");

//   if (remotePage.getServerSideProps) {
//     return await remotePage.getServerSideProps(context);
//   }

//   return {
//     props: {},
//   };
// };

export default Products;

//   export default LocalPage;
