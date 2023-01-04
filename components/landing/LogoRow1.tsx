import Bersuara from "../../public/logos/bersuara";
import Chronos from "../../public/logos/chronos";
import DN35 from "../../public/logos/dn35";
import Silicon from "../../public/logos/silicon";
import Uluwatu from "../../public/logos/uluwatu";
import Vishwakarma from "../../public/logos/vishwakarma";
import Vishwakarma2 from "../../public/logos/vishwakarma2";

export default function LogoRow1() {
  return (
    <div className="scroll-infinite flex flex-nowrap items-center space-x-40">
      <Chronos />
      <DN35 />
      <Vishwakarma2 />
      <Bersuara />
      <Uluwatu />
      <Silicon />
      <Vishwakarma />
      <Chronos />
      <DN35 />
      <Vishwakarma2 />
      <Bersuara />
      <Uluwatu />
      <Silicon />
      <Vishwakarma />
    </div>
  );
}
