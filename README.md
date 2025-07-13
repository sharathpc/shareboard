# 🚀 ShareBoard

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-9.0.0-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.4.2-blue.svg)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A real-time collaborative platform for code editing and rich text collaboration with live session sharing.


🔗 **Live Demo**:

<img src="./screenshots/demo.gif">


## ✨ Features

- 🔄 **Real-time Collaboration** - WebSocket-based live synchronization
- 📝 **Dual Editor Interface** - Monaco Editor + Lexical rich text editor
- 🎯 **Session Management** - Unique URLs with automatic clipboard copy
- ⚡ **Performance Optimized** - Throttled updates for smooth experience
- 🌙 **Dark/Light Mode** - Comfortable coding in any environment
- 📐 **Resizable Interface** - Customizable split-pane layout
- 🐳 **Docker Ready** - One-command deployment
- 📱 **Responsive Design** - Works on all devices

## 🖥️ Demo

ShareBoard features a clean, modern interface with:
- **📝 Monaco Code Editor** - Full-featured with syntax highlighting
- **✍️ Lexical Text Editor** - Modern rich text editing
- **🎛️ Language Selector** - 50+ programming languages
- **🔗 Real-time Sync** - Instant collaboration updates
- **📋 Auto URL Copy** - Easy session sharing

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend│    │  NestJS Backend │    │  PostgreSQL DB  │
│                 │    │                 │    │                 │
│ • Monaco Editor │◄──►│ • WebSocket API │◄──►│ • Session Data  │
│ • Lexical Editor│    │ • TypeORM       │    │ • Real-time     │
│ • Chakra UI     │    │ • Throttling    │    │ • Persistent    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** with TypeScript
- 🎨 **Chakra UI** - Modern component library
- 📝 **Monaco Editor** - VS Code's editor engine
- ✍️ **Lexical** - Facebook's rich text editor
- 🔄 **Redux Toolkit** - State management
- 🔌 **Socket.IO Client** - Real-time communication

### Backend
- 🪺 **NestJS** - Progressive Node.js framework
- 🗃️ **TypeORM** - Database ORM
- 🔌 **Socket.IO** - WebSocket server
- 🐘 **PostgreSQL** - Reliable database
- ⚡ **Lodash Throttle** - Performance optimization

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 16+ (for development)

### 1. Clone & Run
```bash
git clone https://github.com/yourusername/shareboard.git
cd shareboard
docker-compose up --build
```

### 2. Access the Application
- 🌐 **Frontend**: http://localhost:4200
- ⚙️ **Backend**: http://localhost:3000
- 🗄️ **Database**: localhost:5432

### 3. Start Collaborating
1. Visit http://localhost:4200
2. A new session is created automatically
3. URL is copied to your clipboard
4. Share the link with collaborators
5. Edit code and text in real-time! 🎉

## 📁 Project Structure

```
shareboard/
├── 🐳 docker-compose.yml          # Multi-container setup
├── ⚙️ services/                   # NestJS backend
│   ├── src/
│   │   ├── 🔌 app.gateway.ts     # WebSocket handlers
│   │   ├── 🧠 app.service.ts     # Business logic
│   │   ├── 🗃️ entities/          # Database models
│   │   └── 📦 dto/              # Data transfer objects
│   └── package.json
└── 🎨 webapp/                    # React frontend
    ├── src/
    │   ├── 🧩 components/        # React components
    │   ├── 🔄 redux/            # State management
    │   └── 🚀 App.tsx           # Main application
    └── package.json
```

## 🔧 Development

### Frontend Development
```bash
cd webapp
npm install
npm run develop
```

### Backend Development
```bash
cd services
npm install
npm run develop
```

## 🔌 API Endpoints

### WebSocket Events
- `setData` - Initialize session data
- `retriveData` - Get existing session data
- `codeEditor/setValue` - Update code content
- `textEditor/setValue` - Update text content
- `language/setLanguage` - Change programming language

### Database Schema
```typescript
@Entity()
export class Session {
    @PrimaryColumn()
    sessionId: string
    @Column()
    language: string;
    @Column()
    codeValue: string;
    @Column()
    textValue: string;
}
```

## 🐳 Docker Configuration

```yaml
version: "3.8"
services:
  database:
    image: postgres:13
    environment:
      POSTGRES_USER: shareboard
      POSTGRES_PASSWORD: shareboard
      POSTGRES_DB: shareboard
    volumes:
      - pgdata:/var/lib/postgresql/data

  services:
    build: ./services
    environment: 
      DATABASE_URL: 'postgresql://shareboard:shareboard@database:5432/shareboard'
    ports: - 3000:3000
  
  webapp:
    build: ./webapp
    ports: - 4200:80

volumes:
  pgdata:
```

## 🎯 Key Features Explained

### 🔄 Real-time Collaboration
- WebSocket-based synchronization
- Throttled updates (10s DB, 1s frontend)
- Automatic session joining

### 📝 Dual Editor Interface
- **Monaco Editor**: Professional code editing with syntax highlighting
- **Lexical**: Modern rich text editing with clean UI
- **Split Pane**: Resizable layout for optimal workflow

### ⚡ Performance Optimizations
- Database write throttling prevents overload
- Frontend update throttling ensures smooth UX
- Efficient Redux state management
- Optimized WebSocket communication

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - VS Code's editor engine
- [Lexical](https://lexical.dev/) - Facebook's modern text editor
- [Chakra UI](https://chakra-ui.com/) - Beautiful React components
- [NestJS](https://nestjs.com/) - Progressive Node.js framework

---

⭐ **Star this repository if you found it helpful!**

---

*Built with ❤️ for the developer community* 