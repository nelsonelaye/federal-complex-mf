"use client";
import dynamic from "next/dynamic";

const RemoteComponent = dynamic(() => import("remote/ComponentA"), {
  ssr: false,
});

export default RemoteComponent;

// export function LocalPage(props) {
//     return <RemotePage {...props} />
//   }

//   export const getServerSideProps = async (ctx) => {
//     const remotePage = await import('remote/SomePage');

//     if (remotePage.getServerSideProps) {
//       return remotePage.getServerSideProps(ctx)
//     }

//     return {
//       props: {},
//     }
//   }

//   export default LocalPage;
