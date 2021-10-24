FROM fedora:34

RUN dnf update -y

RUN dnf install npm -y

RUN npm install -g webpack webpack-cli style-loader css-loader eslint eslint-config-google eslint-plugin-vue