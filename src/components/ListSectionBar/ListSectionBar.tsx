import { useLocation } from "react-router-dom";

type Props = {
  listSection: {
    name: string;
    href: string;
  }[];
  handlePageChange: (number: number) => void;
  currentPage: number;
};
const ListSectionBar = ({
  listSection,
  handlePageChange,
  currentPage,
}: Props) => {
  const location = useLocation();
  console.log("location", location, currentPage);
  return (
    <>
      {listSection &&
        listSection.length > 0 &&
        listSection.map((item, idx) => (
          <div
            className="bg-slate-400 p-4"
            key={item.href}
            onClick={() => handlePageChange(idx)}
            style={{
              cursor: "pointer",
              color: currentPage === idx ? "red" : "",
            }}
          >
            {idx + 1}
          </div>
        ))}
    </>
  );
};

export default ListSectionBar;
