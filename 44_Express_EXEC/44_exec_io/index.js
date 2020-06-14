const exec = require('child_process').execFile; // создает процесс который выполняет файл по указанному тобой пути
const dir = exec('exec',
    { cwd: 'E:\\Downloads\\Ekz2\\44.exec io\\exec\\exec\\bin\\Debug' },
    (err, stdout, stderr) => {
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        else {
            console.log(`stdout: ${stdout}`);
        }
    });
dir.stdin.write('exam');
dir.stdin.end(); 