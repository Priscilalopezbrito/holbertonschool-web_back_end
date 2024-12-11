#!/usr/bin/env python3
""" Simple helper function """
from typing import Tuple


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
