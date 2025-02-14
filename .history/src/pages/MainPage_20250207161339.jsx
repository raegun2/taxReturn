import Showcase1 from "./Mains/Showcase1";
import Showcase2 from "./Mains/Showcase2";
import Showcase3 from "./Mains/Showcase3";
import TaxCalculator from "./Mains/TaxCalculator";

function MainPage() {
  return (
    <div  className="container text-center w-100">
      <Showcase1 />
      <TaxCalculator />
      <Showcase2 />
      <Showcase3 />
      
    </div>
  );
}
export default MainPage