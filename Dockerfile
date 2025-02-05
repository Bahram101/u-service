# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install 

# Копируем весь проект в контейнер
COPY . .

# Запускаем приложение
CMD ["npm", "run", "dev"] 