function Pagination({ currentPage, totalPages, onPageChange, onNext, onPrev }) {

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        // Logic to determine which page numbers to display (UI only)
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
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
