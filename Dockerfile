FROM node:20.17.0-alpine AS builder

# 작업 디렉터리 설정
WORKDIR /app

# 소스 코드 복사
COPY ./client .

# 프로젝트 빌드
RUN npm ci
RUN npm run build

#RUN ls
#RUN ls /app
#RUN ls /app/build

# 2단계: 런타임 스테이지
FROM nginx:stable-alpine

# 빌드 결과물을 Nginx 디렉터리에 복사
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/nginx.conf


# 컨테이너가 실행되면 Nginx가 시작되도록 설정
CMD ["nginx", "-g", "daemon off;"]

# 기본 포트 설정
EXPOSE 5173