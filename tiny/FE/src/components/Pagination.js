import { useContext, useEffect, useRef, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { AuthContext } from "./context/AuthProvider";

export const PaginationComp = ({ historyPerPage, totalHistory, paginate }) => {
  const [pageNumbers, setPageNumbers] = useState([])
  const { hCount } = useContext(AuthContext);
//    const pageNumber = []

useEffect(() => {
    if(hCount)
    for (let i = 1; i <= hCount.count; i++) {
        setPageNumbers(prev => [...prev, i])
    } 
}, [])
   
  return (
    <div>
      <Pagination>
        {pageNumbers.map((number, index) => {
          return (
            <Pagination.Item key={number + index *7 -1}onClick={() => paginate(number)}>
              {number}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};
