import io

def test_ingest_markdown(client):
    """Test that the ingest/markdown endpoint accepts a file and returns success."""
    file_content = b"# Test Markdown"
    file = io.BytesIO(file_content)

    response = client.post(
        "/ingest/markdown",
        files={"file": ("test.md", file, "text/markdown")}
    )

    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"
    assert data["message"] == "Markdown processed."
