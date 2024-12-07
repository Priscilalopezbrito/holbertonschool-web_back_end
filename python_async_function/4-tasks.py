#!/usr/bin/env python3
""" Tasks """
import asyncio
import random
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Multiple coroutines """
    coroutines = [wait_random(max_delay) for c in range(n)]
    delays = []
    for cr in asyncio.as_completed(coroutines):
        delay = await cr
        delays.append(delay)
    return delays
