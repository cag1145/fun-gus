from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from app.curriculum.characters import CHARACTER_DATA

router = APIRouter()


@router.get("")
def list_characters(
    kingdom: Optional[str] = Query(None),
    alignment: Optional[str] = Query(None),
):
    chars = list(CHARACTER_DATA.values())
    if kingdom:
        chars = [c for c in chars if c["kingdom"] == kingdom]
    if alignment:
        chars = [c for c in chars if c["alignment"] == alignment]
    # Return summary (no full backstory)
    return [
        {k: v for k, v in c.items() if k != "backstory"}
        for c in chars
    ]


@router.get("/{character_id}")
def get_character(character_id: str):
    char = CHARACTER_DATA.get(character_id)
    if not char:
        raise HTTPException(status_code=404, detail="Character not found")
    return char
