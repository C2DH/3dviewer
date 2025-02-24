import { useSearchParams } from "react-router";
import GLBPreload from "./components/GLBPreload";
import Footer from "./components/Footer";

const Viewer = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url") || import.meta.env.BASE_URL + "/demo.glb";
  if (!url) return <div>URL not found</div>;
  return (
    <div className="h-screen w-screen">
      <GLBPreload modelPath={url} />
      <Footer />
    </div>
  );
};

export default Viewer;
