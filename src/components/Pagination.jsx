function Pagination({ currentPage, totalPages, onPageChange, onNext, onPrev }) {

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="pagination">
            <button
                className="pagination-btn"
                onClick={onPrev}
                disabled={currentPage === 1}
            >
                ← Prev
            </button>

            <div className="pagination-numbers">
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        className={`pagination-num ${currentPage === page ? 'active' : ''}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className="pagination-btn"
                onClick={onNext}
                disabled={currentPage === totalPages}
            >
                Next →
            </button>
        </div>
    );
}

export default Pagination;
