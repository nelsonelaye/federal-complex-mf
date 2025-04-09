declare module "remote/*" {
  const Component: React.ComponentType<any>;

  export function getServerSideProps(context: any): Promise<{ props: any }>;
  // For data exports
  export const products: any[];

  // For default exports (could be component or data)
  const ModuleExport: any;
  export default ModuleExport;
}
