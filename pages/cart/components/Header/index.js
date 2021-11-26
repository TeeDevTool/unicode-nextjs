import Link from "next/link";
import Image from "next/image";
import Typography from "components/Typography";

import useAction from "hooks/useAction";

const BackButton = () => {
  const [, , , , goToPath] = useAction();
  return (
    <div onClick={() => goToPath("/")} style={{ position: "absolute", top: 4 }}>
      <Image src="/icons/back.svg" alt="back" width={18} height={12.5} />
    </div>
  );
};

const Header = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        width: "100%",
        paddingBottom: 15,
      }}
    >
      <BackButton />
      <div style={{ display: "inline-block" }}>
        <Typography type="header">Express Cart</Typography>
      </div>
    </div>
  );
};

export default Header;
