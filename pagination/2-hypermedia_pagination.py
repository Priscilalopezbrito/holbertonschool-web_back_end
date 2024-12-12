#!/usr/bin/env python3
""" Simple helper function """
from typing import Tuple, List, Dict
import csv
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Args:
        page (int): Page number
        page_size (int): Page size

    Returns:
        Tuple[int, int]: Page range
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Get hypermedia of a given page.

        Args:
            page (int): Page number
            page_size (int): Page size

        Returns:
            Dict: Hypermedia of a given page
        """

        # Verify that both arguments are integers greater than 0

        assert isinstance(page, int) and page > 0, \
            "Page must be positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "Page size must be positive integer"

        dataset = self.dataset()  # Loaded dataset
        start = (page - 1) * page_size
        end = start + page_size
        data = dataset[start:end]

        total_records = len(dataset)
        total_pages = math.ceil(total_records / page_size)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
