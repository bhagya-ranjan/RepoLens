import os
import shutil

from git import Repo


# Folder where all cloned repositories will be stored
REPOSITORIES_PATH = "storage/repositories"


def clone_repository(github_url: str):
    """
    Clone a GitHub repository.

    Parameters:
        github_url (str): GitHub repository URL

    Returns:
        dict: Information about the cloned repository
    """

    # Create storage folder if it doesn't exist
    os.makedirs(REPOSITORIES_PATH, exist_ok=True)

    # Extract repository name from URL
    repo_name = github_url.rstrip("/").split("/")[-1]

    # Destination folder
    destination = os.path.join(REPOSITORIES_PATH, repo_name)

    # If already cloned, delete it
    if os.path.exists(destination):
        shutil.rmtree(destination)

    # Clone repository
    Repo.clone_from(github_url, destination)

    return {
        "repository_name": repo_name,
        "repository_path": destination
    }