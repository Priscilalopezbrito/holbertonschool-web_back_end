#!/usr/bin/env python3
""" Execute multiple coroutines at the same time with async """
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Multiple coroutines """
    coroutines = [wait_random(max_delay) for c in range(n)]
    delays = []
    for cr in asyncio.as_completed(coroutines):
        delay = await cr
        delays.append(delay)
    return delays
