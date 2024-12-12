#!/usr/bin/env python3
""" Simple helper function """
from typing import Tuple, List
import csv


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

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
         Get page of data

         Args:
             page (int): Page number
             page_size (int): Page size
        Returns:
            List[List]: Page range
        """

        # Verify that both arguments are integers greater than 0

        assert isinstance(page, int) and page > 0, \
            "Page must be positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "Page size must be positive integer"

        dataset = self.dataset()  # Loaded dataset
        start = (page - 1) * page_size
        end = start + page_size

        return dataset[start:end]
