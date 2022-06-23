## Super simple JWT authentication with Express and Prisma

### Requirements

⬇️ Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/en/)
- [MySQL](https://www.mysql.com/en/) v5.6, v5.7 or 8 👉 You can use [docker](https://www.docker.com/en/) to run MySQL

### Setup

🙊 Configure your MySQL database and JWT secret in `.env` file:

```env
DATABASE_URL="mysql://YOUR_USER:YOUR_PASSWORD@HOST:PORT/SOME_DATABASE"
JWT_SECRET_KEY=secret
```

🚀 Install dependencies:

```bash
pnpm i

npx prisma migrate dev
```

Enjoy! 🙋
