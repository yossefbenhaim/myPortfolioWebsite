# syntax=docker/dockerfile:1

############################
# 1) Build stage (Node)
############################
ARG NODE_VERSION=20-alpine
FROM node:${NODE_VERSION} AS build
WORKDIR /app

# התקנת תלויות על בסיס קבצי ה-manifest
COPY package*.json ./
# אם אתה עם pnpm/yarn – החלף לפקודות המקבילות
RUN npm install

# העתקת שאר הקוד ובנייה
COPY . .
ENV NODE_ENV=production
# אם זה Vite או CRA, שניהם "npm run build"
RUN npm run build

############################
# 2) Serve stage (Nginx)
############################
FROM nginx:alpine

# קונפיג ל-SPA (redirect לכל route ל-index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# איזה תיקיית build להעתיק? ברירת מחדל: dist (Vite).
# ל-CRA תעביר בזמן build: --build-arg BUILD_DIR=build
ARG BUILD_DIR=dist
COPY --from=build /app/${BUILD_DIR} /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
