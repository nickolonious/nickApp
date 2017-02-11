Start-Process "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Argument "start karma.conf.js"
Start-Process "chrome" -Argument ".\_reports\html-results.html"