<div align="center">

# 🚀 RepoLens AI

### AI-Powered Codebase Understanding using RAG, Semantic Search & Gemini

Understand any GitHub repository in seconds by chatting with its code.

<img src="https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python"/>
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi"/>
<img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/ChromaDB-VectorDB-purple?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Gemini-AI-orange?style=for-the-badge"/>

</div>

---

# ✨ Features

- 🤖 Chat with any GitHub repository using natural language
- 🔍 Semantic code search using vector embeddings
- 🧠 Retrieval-Augmented Generation (RAG)
- ⚡ FastAPI backend with optimized indexing pipeline
- 📂 Automatic repository scanning
- ✂️ Intelligent document chunking
- 🗄️ ChromaDB vector database
- 💬 Gemini-powered contextual answers
- 📄 Source citations for every response
- 👨‍💻 Built-in syntax highlighted code viewer
- 🌙 Modern dark UI

---

# 🏗 Architecture

```text
                GitHub Repository
                       │
                       ▼
                Repository Cloner
                       │
                       ▼
              Source Code Scanner
                       │
                       ▼
            Document Builder
                       │
                       ▼
            Intelligent Chunking
                       │
                       ▼
         SentenceTransformer Embeddings
                       │
                       ▼
                 ChromaDB
                       │
             User Question
                       │
                       ▼
              Semantic Retrieval
                       │
                       ▼
             Prompt Construction
                       │
                       ▼
                  Gemini AI
                       │
                       ▼
      Answer + Referenced Source Files
                       │
                       ▼
          Interactive Code Viewer
```

---

# 🧠 Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Axios
- React Markdown
- React Syntax Highlighter
- Lucide React

## Backend

- FastAPI
- Python
- GitPython
- Sentence Transformers
- ChromaDB
- Google Gemini API

---

# ⚙️ Workflow

```
Clone Repository
        ↓
Scan Files
        ↓
Build Documents
        ↓
Chunk Source Code
        ↓
Generate Embeddings
        ↓
Store in ChromaDB
        ↓
Ask Question
        ↓
Semantic Retrieval
        ↓
Gemini Generates Answer
        ↓
Referenced Files
        ↓
Open Source Code
```

---

# 📁 Project Structure

```
RepoLens
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── layouts
│
├── backend
│   ├── api
│   ├── services
│   ├── models
│   ├── core
│   └── storage
│
└── README.md
```

---

# 🧩 Core Components

### Repository Scanner

Automatically scans supported source files while ignoring build directories.

### Intelligent Chunking

Splits source code into overlapping chunks to preserve context during retrieval.

### Embedding Engine

Generates semantic embeddings using SentenceTransformers.

### Vector Database

Stores embeddings inside ChromaDB for efficient similarity search.

### Retrieval Pipeline

Fetches the most relevant code snippets using vector similarity.

### Gemini Integration

Generates contextual answers strictly based on retrieved repository code.

### Interactive Code Viewer

Displays syntax-highlighted source code with clickable references.

---

# 🚀 Getting Started

## Backend

```bash
cd backend

python -m venv venv

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📌 Supported Languages

- Python
- Java
- JavaScript
- TypeScript
- React
- TSX

---

# 🎯 Future Enhancements

- Repository Explorer
- Multi-Repository Support
- Conversation History
- Electron Desktop App
- Streaming Responses
- Chunk Highlighting
- Repository Statistics

---

# 👨‍💻 Author

**Bhagya Ranjan Singh**

B.Tech CSE • NSUT

---

<div align="center">

⭐ If you found this project interesting, consider giving it a star!

</div>
