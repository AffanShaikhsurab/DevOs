// archon-ui-main/src/pages/PlanningWorkspace.tsx
import React, { useState } from 'react';
import { uploadMarkdown } from '../services/planningApi';

const PlanningWorkspace: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                const result = await uploadMarkdown(selectedFile);
                console.log("Upload successful:", result);
                alert("File uploaded successfully!");
            } catch (error) {
                console.error("Upload failed:", error);
                alert("File upload failed.");
            }
        }
    };

    return (
        <div>
            <h1>BMAD Planning Workspace</h1>
            <input type="file" accept=".md" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!selectedFile}>
                Upload PRD
            </button>
        </div>
    );
};

export default PlanningWorkspace;
