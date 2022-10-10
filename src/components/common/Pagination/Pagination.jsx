import React, {useState, useEffect} from 'react';
import {Pagination} from 'react-bootstrap'
import s from './Pagination.module.css'

const CustomizedPagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const onPrevClick = () => setPortionNumber(--portionNumber)
    const onNextClick = () => setPortionNumber(++portionNumber)
    useEffect(() => {
        setPortionNumber(portionNumber)
    }, [portionNumber])
    return (
        <Pagination>
            {portionNumber > 1 ? <Pagination.First onClick={onPrevClick}>Prev</Pagination.First> : null}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <Pagination.Item className={currentPage === p ? s.selectedPage : ''} key={p}
                                            onClick={() => onPageChanged(p)}>{p} </Pagination.Item>
                })
            }
            {portionCount > portionNumber ? <Pagination.Last onClick={onNextClick}>Next</Pagination.Last> : null}
        </Pagination>)
}

export default CustomizedPagination;