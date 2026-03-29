FROM node:22-slim

# 安装工具及 code-server
RUN apt-get update && apt-get install -y curl git ssh && \
    curl -fsSL https://code-server.dev/install.sh | sh && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# 处理权限，让 1000 用户（HF常用用户）有权操作
RUN mkdir -p /home/node/app /home/node/.vscode-config /home/node/.npm-global && \
    chown -R 1000:1000 /home/node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
USER 1000
WORKDIR /home/node/app

# 预装中文语言包（对小白友好）
RUN code-server --install-extension MS-CEINTL.vscode-language-pack-zh-hans

# 暴露端口
EXPOSE 7860

# 极简启动逻辑：模拟一个简单的业务程序
# 启动 code-server，并顺便跑一个 index.js 模拟你的爬虫或项目
CMD ["/bin/sh", "-c", "code-server --auth none --bind-addr 0.0.0.0:7860 --user-data-dir /home/node/.vscode-config ."]
