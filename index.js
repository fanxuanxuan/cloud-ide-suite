const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    // 生成一个每 1 秒自动刷新的网页
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>项目交付演示</title>
            <meta http-equiv="refresh" content="1"> 
            <style>
                body { font-family: system-ui; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f4f7f6; margin: 0; }
                .card { background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); text-align: center; }
                h1 { color: #2c3e50; margin-bottom: 10px; }
                .time { font-size: 13rem; font-weight: bold; color: #ff0000; font-family: monospace; }
                .footer { margin-top: 120px; color: #3498db; font-size: 0.9rem; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>业务程序运行中</h1>
                <div class="time">${new Date().toLocaleTimeString()}</div>
                <div class="footer">当前系统日期：${new Date().toLocaleDateString()}</div>
                <p style="font-size: 12px; color: #bdc3c7;">(这是从 GitHub 自动打包的业务镜像)</p>
            </div>
        </body>
        </html>
    `;
    res.end(html);
});

// 监听 7860 端口
server.listen(7860, '0.0.0.0', () => {
    console.log('业务服务器已启动...');
});
