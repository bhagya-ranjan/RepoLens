import os
import shutil
import stat

from git import Repo


REPOSITORIES_PATH = "storage/repositories"


def remove_readonly(func, path, exc_info):
    """
    Handle read-only files on Windows when deleting repositories.
    """
    os.chmod(path, stat.S_IWRITE)
    func(path)


def clone_repository(github_url: str):
    """
    Clone a GitHub repository.
    """

    os.makedirs(REPOSITORIES_PATH, exist_ok=True)

    repo_name = github_url.rstrip("/").split("/")[-1]

    destination = os.path.join(REPOSITORIES_PATH, repo_name)

    # Delete existing repository safely
    if os.path.exists(destination):
        shutil.rmtree(destination, onerror=remove_readonly)

    # Clone repository
    Repo.clone_from(github_url, destination)

    return {
        "repository_name": repo_name,
        "repository_path": destination
    }