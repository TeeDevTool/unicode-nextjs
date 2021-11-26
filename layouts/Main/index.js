import { paddingLayout, widthLayout } from "config/static";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        width: widthLayout,
        height: 812,
        padding: `40px ${paddingLayout}px`,
      }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
