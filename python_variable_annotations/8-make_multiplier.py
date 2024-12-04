#!/usr/bin/env python3
""" Complex types - functions """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Make multiplier function """
    def multiplies(number: float) -> float:
        """ Nested function that multiplies a float by multiplier"""
        return number * multiplier
    return multiplies
