# 3月21日纪念日网站 — 设计文档

## 概述

一个介绍3月21日多个国际纪念日的多页面网站。采用沉浸式全屏设计，每个纪念日拥有独特的主题色和视觉风格。

## 技术栈

- **框架**: Next.js 16 App Router + TypeScript
- **样式**: Tailwind CSS v4，CSS 变量驱动主题切换
- **动效**: CSS 原生动画 + scroll-driven animations
- **包管理**: pnpm
- **部署**: 纯静态内容，无需后端 API

## 页面结构

### 路由

| 路由 | 页面 | 主题色 |
|------|------|--------|
| `/` | 首页 | 暗色 (#0a0a0a) |
| `/forest` | 世界森林日 | 绿色 (#1B5E20 → #4CAF50) |
| `/poetry` | 世界诗歌日 | 紫色 (#4A148C → #7B1FA2) |
| `/down-syndrome` | 世界唐氏综合征日 | 橙色 (#E65100 → #FF9800) |
| `/anti-racism` | 国际消除种族歧视日 | 蓝色 (#0D47A1 → #1976D2) |

### 首页 (`/`)

- 暗色背景 (#0a0a0a)
- 中央标题区："MARCH 21" + "3月21日" + "一个日期，四份意义"
- 2×2 网格布局，4个渐变色块卡片作为各纪念日入口
- 每个卡片包含：emoji 图标 + 纪念日名称 + 简短描述
- hover 效果：缩放 + 阴影增强

### 纪念日子页面（通用结构）

每个子页面包含以下5个区域：

1. **Hero 全屏区** — 主题渐变背景 + 大标题 + 副标题 + 日期
2. **简介区** — 纪念日的起源和意义（2-3段文字）
3. **数据/事实区** — 3-4个关键数据卡片
4. **行动号召区** — "我们能做什么" + 行动建议列表
5. **底部导航** — 返回首页 + 前往下一个纪念日

## 主题配色详情

### 世界森林日 (World Day of Forests)
- 渐变: #1B5E20 → #4CAF50 → #A5D6A7
- 浅色背景: #E8F5E9
- 视觉元素: 自然纹理、树木剪影、大地色系

### 世界诗歌日 (World Poetry Day)
- 渐变: #4A148C → #7B1FA2 → #CE93D8
- 浅色背景: #F3E5F5
- 视觉元素: 书法元素、羽毛笔意象、优雅衬线字体

### 世界唐氏综合征日 (World Down Syndrome Day)
- 渐变: #E65100 → #FF9800 → #FFCC02
- 浅色背景: #FFF3E0
- 视觉元素: 彩色袜子元素、温暖明快、包容主题

### 国际消除种族歧视日 (International Day for the Elimination of Racial Discrimination)
- 渐变: #0D47A1 → #1976D2 → #64B5F6
- 浅色背景: #E3F2FD
- 视觉元素: 团结手势、多元文化象征、庄重感

## 组件架构

```
app/
├── layout.tsx              # 根布局（Geist 字体）
├── page.tsx                # 首页
├── globals.css             # 全局样式 + Tailwind
├── forest/
│   └── page.tsx            # 世界森林日
├── poetry/
│   └── page.tsx            # 世界诗歌日
├── down-syndrome/
│   └── page.tsx            # 世界唐氏综合征日
├── anti-racism/
│   └── page.tsx            # 国际消除种族歧视日
└── components/
    ├── HeroSection.tsx     # 通用 Hero 区组件
    ├── InfoSection.tsx     # 简介区组件
    ├── StatsSection.tsx    # 数据/事实区组件
    ├── ActionSection.tsx   # 行动号召区组件
    └── PageNavigation.tsx  # 底部导航组件
```

## 共享组件设计

### HeroSection
- Props: `title`, `subtitle`, `date`, `gradient`, `icon`
- 全屏高度 (100vh)，flex 居中
- 主题渐变背景

### StatsSection
- Props: `stats: { value, label, description }[]`, `theme`
- 横向排列 3-4 个数据卡片
- 主题色强调数字

### PageNavigation
- Props: `prevPage`, `nextPage`, `homePath`
- 底部固定导航条
- 显示"返回首页"和"下一个纪念日"

## 不包含的内容

- 无后端 API
- 无用户交互/表单
- 无数据库
- 无国际化（仅中文）
- 无暗色/亮色模式切换（首页暗色，子页面各自主题色）
