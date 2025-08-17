// archon-ui-main/src/services/planningApi.ts
export const uploadMarkdown = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/ingest/markdown", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload markdown file.");
    }

    return response.json();
};
