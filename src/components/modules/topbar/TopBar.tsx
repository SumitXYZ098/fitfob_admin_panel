import CustomBox from "../../atoms/customBox/CustomBox";

const TopBar = () => {
  return (
    <CustomBox customClasses="w-full rounded-xl p-3.5 flex items-center justify-between sticky top-0 shadow z-99">
      {"Top Bar"}
    </CustomBox>
  );
};

export default TopBar;
