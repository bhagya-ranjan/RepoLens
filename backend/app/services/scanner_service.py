import os
from app.models.file_metadata import FileMetadata

LANGUAGE_MAP = {
    ".py": "Python",
    ".java": "Java",
    ".js": "JavaScript",
    ".jsx": "React",
    ".ts": "TypeScript",
    ".tsx": "React TypeScript",
}

SUPPORTED_EXTENSIONS = {
    ".py",
    ".java",
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
}

IGNORED_DIRECTORIES = {
    ".git",
    "node_modules",
    "dist",
    "build",
    "__pycache__",
    ".next",
    "coverage",
}


def scan_repository(repository_path: str):
    """
    Scan a repository and return all supported source files.
    """

    source_files = []

    for root, directories, files in os.walk(repository_path):

        directories[:] = [
            directory
            for directory in directories
            if directory not in IGNORED_DIRECTORIES
        ]

        for file in files:

            extension = os.path.splitext(file)[1]

            if extension not in SUPPORTED_EXTENSIONS:
                continue

            file_path = os.path.join(root, file)

            file_info = FileMetadata(
                file_name=file,
                file_path=file_path,
                relative_path=os.path.relpath(file_path, repository_path),
                extension=extension,
                language=LANGUAGE_MAP.get(extension, "Unknown"),
                size=os.path.getsize(file_path),
            )

            source_files.append(file_info)

    return source_files