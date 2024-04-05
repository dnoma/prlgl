import os
from dotenv import load_dotenv
from typing import Any, Dict, Iterable, List, Optional
from openai import OpenAI

# CHECK: Read OpenAI API key from an environment variable
# Load the environment variables from .env file

o = os.path.dirname(os.path.abspath(__file__))

os.chdir(o)

load_dotenv()


OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

if not OPENAI_API_KEY:
    
    # raise ValueError("No OpenAI API key found in environment variables", os.getcwd())
    
    OPENAI_API_KEY = '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'

# Init
DEFAULT_MODEL = 'gpt-4-turbo-preview'
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