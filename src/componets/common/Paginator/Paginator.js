import React, { useState } from 'react'
import style from './paginator.module.css'
import cn from 'classnames'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
        let pages =[];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize +1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={style.paginatorWrapper}>
            {
                portionNumber > 1 && 
                <button onClick={() =>{setPortionNumber(portionNumber -1 )}} >Prev</button>
            }
            {pages
            .filter(p => p >= leftPortionPageNumber && p<= rightPortionNumber)
            .map((p) => {
                return <span className={ cn({
                    [style.selectedPage]: currentPage === p
                },style.pageNumber)} 
                key={p}
                onClick={ () =>{
                    onPageChanged(p);
                }}>{p}</span>
            })}
            {portionCount > portionNumber && 
                <button onClick={() =>{setPortionNumber(portionNumber + 1)}}>Next</button>
            }
        </div>
    )
}

export default Paginator;