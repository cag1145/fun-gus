from fastapi import APIRouter, HTTPException
from app.curriculum.content import LESSON_CONTENT

router = APIRouter()


@router.get("/lessons")
def list_lessons():
    return [
        {
            "id": lesson["id"],
            "title": lesson["title"],
            "track": lesson["track"],
            "description": lesson.get("description", ""),
            "duration": lesson.get("duration", "15 min"),
            "sectionCount": len(lesson["sections"]),
        }
        for lesson in LESSON_CONTENT.values()
    ]


@router.get("/lessons/{lesson_id}")
def get_lesson(lesson_id: str):
    lesson = LESSON_CONTENT.get(lesson_id)
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    return lesson


@router.get("/tracks")
def get_tracks():
    tracks = {}
    for lesson in LESSON_CONTENT.values():
        track = lesson["track"]
        if track not in tracks:
            tracks[track] = {
                "id": track,
                "title": track.replace("_", " ").title(),
                "lessons": [],
            }
        tracks[track]["lessons"].append(
            {
                "id": lesson["id"],
                "title": lesson["title"],
                "description": lesson.get("description", ""),
                "duration": lesson.get("duration", "15 min"),
                "sectionCount": len(lesson["sections"]),
            }
        )
    return list(tracks.values())
