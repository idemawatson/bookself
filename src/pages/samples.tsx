import { MainLayout } from "@/components/layout/MainLayout";
import useSession from "@/hooks/useSession";

const Samples = () => {
  const session = useSession();

  return <div>{JSON.stringify(session)}</div>;
};

Samples.layout = MainLayout;

export default Samples;
