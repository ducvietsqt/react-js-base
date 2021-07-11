import React from "react";
import PropTypes from "prop-types";
export default class Paginate extends React.Component {
  render() {
    const { pages, currentPage, changePage } = this.props
    return (
      <div className="pages-list">
        {
          currentPage > 1 && <div className="page-item" onClick={() => changePage(currentPage - 1)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
        }
        { pages.map(([page], index) => {
          const active = currentPage === index + 1
          const cl = active ? ['page-item page-item--active'] : ['page-item']
          return <div onClick={() => changePage(index + 1)} className={cl} key={index}>{ page }</div>
        })}
        { currentPage < pages.length && <div className="page-item" onClick={() => changePage(currentPage + 1)}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>}
      </div>
    )
  }
}

Paginate.propTypes = {
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  changePage: PropTypes.func,
}
