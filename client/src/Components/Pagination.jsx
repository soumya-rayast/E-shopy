import React from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex justify-center items-center mt-4">
            {/* Previous Button */}
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 border rounded ${currentPage === 1
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-black border-black'
                    }`}
            >
                <GrPrevious />
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1
                            ? 'bg-black text-white'
                            : 'bg-white text-black border-black'
                        }`}
                >
                    {index + 1}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 border rounded ${currentPage === totalPages
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-black border-black'
                    }`}
            >
                <GrNext />
            </button>
        </div>
    );
};

export default Pagination;
