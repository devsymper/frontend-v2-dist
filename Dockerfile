ARG REPO_LOCATION=registry.symper.vn
ARG BASE_VERSION=1.4
FROM ${REPO_LOCATION}/nginx:${BASE_VERSION}
# Copy source code
WORKDIR /src
ADD ./ /var/www/apps.symper.vn
EXPOSE 80
