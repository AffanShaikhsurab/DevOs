# python/src/server/api/ingestion.py
from fastapi import APIRouter, UploadFile, File
from ..services.markdown_ingestion_service import markdown_ingestion_service

router = APIRouter()

@router.post("/ingest/markdown")
async def ingest_markdown(file: UploadFile = File(...)):
    content = await file.read()
    file_content = content.decode("utf-8")
    result = markdown_ingestion_service.process_markdown(file_content)
    return result
