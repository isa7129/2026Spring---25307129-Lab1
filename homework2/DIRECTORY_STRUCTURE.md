MultiShoppingPriceComparison/
│
├── app/                          # 应用核心（原 AppScope）
│   ├── app.json5                # 应用配置
│   ├── resources/               # 应用级资源
│   │   ├── base/
│   │   └── en_US/
│   └── module.json5             # 模块配置
│
├── common/                       # 公共模块（原 commons）
│   ├── base/                    # 基础能力
│   │   ├── constants/           # 常量定义
│   │   ├── utils/               # 工具类
│   │   └── Index.ets
│   ├── components/              # 公共组件
│   └── resources/               # 公共资源
│
├── features/                     # 功能模块
│   ├── home/                    # 首页模块
│   │   ├── src/
│   │   ├── oh-package.json5
│   │   └── build-profile.json5
│   ├── detail/                  # 详情模块
│   ├── cart/                    # 购物车模块
│   ├── user/                    # 用户模块
│   └── live/                    # 直播模块
│
├── products/                     # 产品层
│   ├── phone/                   # 手机
│   ├── tablet/                  # 平板
│   └── foldable/                # 折叠屏
│
├── docs/                         # 文档目录
│   ├── API.md                   # API文档
│   ├── 开发指南.md
│   └── screenshots/             # 截图（原 screenshots）
│
├── scripts/                      # 脚本目录
│   ├── build.sh                 # 构建脚本
│   ├── deploy.sh                # 部署脚本
│   └── format.sh                # 代码格式化
│
├── configs/                      # 配置文件
│   ├── .eslintrc.js            # ESLint配置
│   ├── .prettierrc              # Prettier配置
│   └── .stylelintrc             # 样式检查配置
│
├── .gitignore                    # Git忽略文件
├── .gitattributes                # Git属性配置
├── LICENSE                       # 开源协议
├── README.md                     # 项目说明
├── README.zh.md                  # 中文说明
├── CONTRIBUTING.md               # 贡献指南
├── CHANGELOG.md                  # 更新日志
├── build-profile.json5           # 构建配置
├── hvigorfile.ts                 # 构建脚本
├── oh-package.json5              # 包配置
└── package.json                  # 依赖管理