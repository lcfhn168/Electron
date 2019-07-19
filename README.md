# Electron

#两种调试方式：
  ##1.run.js
  ##2.选择文件 右键 扩展工具 -electron  
  
   ### windows 系统设置：文件-设置-工具-外部工具
        program:electron.cmd
        argumments:.
        working directory:$FileDir$
   ###mac 系统设置：文件-设置-工具-外部工具
             program:electron
             argumments:.
             working directory:$FileDir$
             
             
     打包    npm install electron-packager -g