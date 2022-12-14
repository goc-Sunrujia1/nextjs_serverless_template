FROM node:16-alpine AS Builder
RUN mkdir -p /code_run_docker
WORKDIR /code_run_docker
ADD . /code_run_docker
RUN yarn install
RUN yarn build-gz

FROM node:16-alpine
WORKDIR /code_run_docker
COPY --from=Builder /code_run_docker/.next/standalone ./
EXPOSE 9000
CMD ["yarn","start-port"]