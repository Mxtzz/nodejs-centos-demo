#!/usr/bin/node

var argv = process.argv;

process.kill(argv[2], argv[3]);
  // 2代表进程ID  3代表信号
