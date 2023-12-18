# 安装 Jest 和 TypeORM
npm install --save-dev jest
npm install typeorm mysql

# 修改 package.json 文件以添加测试脚本
$package = Get-Content -Path ./package.json | ConvertFrom-Json
$package.scripts.test = "jest"
$package | ConvertTo-Json | Set-Content -Path ./package.json

# 创建 TypeORM 配置文件
$config = @{
    "type" = "mysql"
    "host" = "localhost"
    "port" = 3306
    "username" = "test"
    "password" = "test"
    "database" = "test"
    "synchronize" = $true
    "logging" = $false
    "entities" = @("src/entity/**/*.ts")
    "migrations" = @("src/migration/**/*.ts")
    "subscribers" = @("src/subscriber/**/*.ts")
    "cli" = @{
        "entitiesDir" = "src/entity"
        "migrationsDir" = "src/migration"
        "subscribersDir" = "src/subscriber"
    }
}
$config | ConvertTo-Json | Set-Content -Path ormconfig.json