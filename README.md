@binary/type
==========

LISA 沙盒化二进制定义。

## 定义

#### `homeDir: string`

根目录的绝对路径。

#### `binaryDir?: string`

可执行文件目录的绝对路径。

#### `env?: Record<string, string>`

对外暴露的环境变量。

#### `version(): Promise<string>`

获取可执行文件版本。
