import os
from typing import Any, Dict, Iterable, List, Optional

from openai import OpenAI

OPENAI_API_KEY = "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"

DEFAULT_MODEL = 'gpt-3.5-turbo'
DEFAULT_MAX_TOKENS = 1200
DEFAULT_TEMPERATURE = 0.0
DEFAULT_TOP_P = 1.0
DEFAULT_FREQUENCY_PENALTY = 0.0
DEFAULT_PRESENCE_PENALTY = 0.0
DEFAULT_N_PAST_MESSAGES = 10
DEFAULT_SEED = None

client = OpenAI(api_key = OPENAI_API_KEY)

def get_completion(
    messages: List[Dict[str, str]],
    max_tokens: Optional[int] = DEFAULT_MAX_TOKENS,
    temperature: Optional[float] = DEFAULT_TEMPERATURE,
    top_p: Optional[float] = DEFAULT_TOP_P,
    frequency_penalty: Optional[float] = DEFAULT_FREQUENCY_PENALTY,
    presence_penalty: Optional[float] = DEFAULT_PRESENCE_PENALTY,
    seed: Optional[int] = DEFAULT_SEED,
):
    response = client.chat.completions.create(
        model=DEFAULT_MODEL,
        messages=messages,  # type: ignore
        max_tokens=max_tokens,
        temperature=temperature,
        top_p=top_p,
        frequency_penalty=frequency_penalty,
        presence_penalty=presence_penalty,
        seed=seed,
        stream=False,
    )
    reply_content = response.choices[0].message.content
    if reply_content:
        return response

    raise ValueError("No reply content from API response!")