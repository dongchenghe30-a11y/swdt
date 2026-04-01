// ===================================
// ClawDiag - 国际化支持
// 中英文切换
// ===================================

const translations = {
    // Navigation
    'nav.home': {
        zh: '首页',
        en: 'Home'
    },
    'nav.features': {
        zh: '功能',
        en: 'Features'
    },
    'nav.diagrams': {
        zh: '图表',
        en: 'Diagrams'
    },
    'nav.about': {
        zh: '关于',
        en: 'About'
    },
    
    // Hero Section
    'hero.title': {
        zh: '免费在线图表工具',
        en: 'Free Online Diagram Tool'
    },
    'hero.subtitle': {
        zh: '支持19种图表类型，无需安装，直接在浏览器中创建专业的流程图、时序图、思维导图等',
        en: 'Create professional flowcharts, mind maps, and 18+ diagram types directly in your browser'
    },
    'hero.start': {
        zh: '开始创建',
        en: 'Start Creating'
    },
    'hero.demo': {
        zh: '查看示例',
        en: 'View Demo'
    },
    'hero.diagramTypes': {
        zh: '图表类型',
        en: 'Diagram Types'
    },
    'hero.free': {
        zh: '免费使用',
        en: 'Free to Use'
    },
    'hero.install': {
        zh: '无需安装',
        en: 'No Install'
    },
    
    // Features
    'features.title': {
        zh: '核心功能',
        en: 'Core Features'
    },
    'features.edit.title': {
        zh: '实时编辑',
        en: 'Real-time Edit'
    },
    'features.edit.desc': {
        zh: '输入Mermaid语法，实时预览图表效果',
        en: 'Enter Mermaid syntax, preview instantly'
    },
    'features.export.title': {
        zh: '多种导出',
        en: 'Multiple Export'
    },
    'features.export.desc': {
        zh: '支持PNG、SVG、JSON格式导出',
        en: 'Export to PNG, SVG, JSON'
    },
    'features.i18n.title': {
        zh: '中英文',
        en: 'Bilingual'
    },
    'features.i18n.desc': {
        zh: '支持中文和英文界面',
        en: 'Support Chinese and English'
    },
    'features.responsive.title': {
        zh: '响应式',
        en: 'Responsive'
    },
    'features.responsive.desc': {
        zh: '完美适配电脑和移动设备',
        en: 'Works on desktop and mobile'
    },
    
    // Diagrams
    'diagrams.title': {
        zh: '图表类型',
        en: 'Diagram Types'
    },
    'diagrams.subtitle': {
        zh: '选择下方图表类型开始创建',
        en: 'Select a diagram type to start'
    },
    
    // Diagram Names
    'diagrams.flowchart.title': { zh: '流程图', en: 'Flowchart' },
    'diagrams.flowchart.desc': { zh: '业务逻辑、工作流程', en: 'Business logic, workflows' },
    
    'diagrams.sequence.title': { zh: '时序图', en: 'Sequence Diagram' },
    'diagrams.sequence.desc': { zh: '交互时序、API调用', en: 'Interaction timing, API calls' },
    
    'diagrams.class.title': { zh: '类图', en: 'Class Diagram' },
    'diagrams.class.desc': { zh: '面向对象类结构', en: 'OOP class structure' },
    
    'diagrams.state.title': { zh: '状态图', en: 'State Diagram' },
    'diagrams.state.desc': { zh: '状态转换流程', en: 'State transitions' },
    
    'diagrams.gantt.title': { zh: '甘特图', en: 'Gantt Chart' },
    'diagrams.gantt.desc': { zh: '项目进度管理', en: 'Project progress management' },
    
    'diagrams.er.title': { zh: 'ER图', en: 'ER Diagram' },
    'diagrams.er.desc': { zh: '数据库设计', en: 'Database design' },
    
    'diagrams.journey.title': { zh: '用户旅程图', en: 'User Journey' },
    'diagrams.journey.desc': { zh: '用户体验流程', en: 'User experience flow' },
    
    'diagrams.git.title': { zh: 'Git图', en: 'Git Graph' },
    'diagrams.git.desc': { zh: '版本历史记录', en: 'Version history' },
    
    'diagrams.mindmap.title': { zh: '思维导图', en: 'Mind Map' },
    'diagrams.mindmap.desc': { zh: '头脑风暴、结构化思考', en: 'Brainstorming, structured thinking' },
    
    'diagrams.pie.title': { zh: '饼图', en: 'Pie Chart' },
    'diagrams.pie.desc': { zh: '占比分析', en: 'Proportion analysis' },
    
    'diagrams.timeline.title': { zh: '时间线', en: 'Timeline' },
    'diagrams.timeline.desc': { zh: '发展历程', en: 'Development history' },
    
    'diagrams.kanban.title': { zh: '看板', en: 'Kanban' },
    'diagrams.kanban.desc': { zh: '任务管理', en: 'Task management' },
    
    'diagrams.quadrant.title': { zh: '四象限图', en: 'Quadrant Chart' },
    'diagrams.quadrant.desc': { zh: '优先级矩阵分析', en: 'Priority matrix analysis' },
    
    'diagrams.sankey.title': { zh: '桑基图', en: 'Sankey Diagram' },
    'diagrams.sankey.desc': { zh: '流向分析', en: 'Flow analysis' },
    
    'diagrams.xychart.title': { zh: 'XY图表', en: 'XY Chart' },
    'diagrams.xychart.desc': { zh: '数据可视化', en: 'Data visualization' },
    
    'diagrams.block.title': { zh: '块状图', en: 'Block Diagram' },
    'diagrams.block.desc': { zh: '系统架构', en: 'System architecture' },
    
    'diagrams.architecture.title': { zh: '架构图', en: 'Architecture' },
    'diagrams.architecture.desc': { zh: '技术架构设计', en: 'Technical architecture' },
    
    'diagrams.packet.title': { zh: '数据包图', en: 'Packet Diagram' },
    'diagrams.packet.desc': { zh: '网络数据包结构', en: 'Network packet structure' },
    
    'diagrams.journey.title': { zh: '用户旅程', en: 'User Journey' },
    'diagrams.journey.desc': { zh: '用户体验流程', en: 'User experience flow' },
    
    'diagrams.timeline.title': { zh: '时间线', en: 'Timeline' },
    'diagrams.timeline.desc': { zh: '发展历程', en: 'Development history' },
    
    'diagrams.kanban.title': { zh: '看板', en: 'Kanban' },
    'diagrams.kanban.desc': { zh: '任务管理', en: 'Task management' },
    
    // Tooltips
    'tool.zoomIn': { zh: '放大', en: 'Zoom In' },
    'tool.zoomOut': { zh: '缩小', en: 'Zoom Out' },
    'tool.reset': { zh: '重置', en: 'Reset' },
    
    // Editor
    'editor.back': {
        zh: '← 返回',
        en: '← Back'
    },
    'editor.code': {
        zh: 'Mermaid 代码',
        en: 'Mermaid Code'
    },
    'editor.copy': {
        zh: '复制',
        en: 'Copy'
    },
    'editor.render': {
        zh: '渲染图表',
        en: 'Render'
    },
    'editor.preview': {
        zh: '预览',
        en: 'Preview'
    },
    'editor.exportPng': {
        zh: '导出PNG',
        en: 'Export PNG'
    },
    'editor.export': {
        zh: '导出',
        en: 'Export'
    },
    'editor.exportSvg': {
        zh: '导出SVG',
        en: 'Export SVG'
    },
    'editor.exportJpg': {
        zh: '导出JPG',
        en: 'Export JPG'
    },
    'editor.exportWebp': {
        zh: '导出WEBP',
        en: 'Export WEBP'
    },
    'editor.exportPdf': {
        zh: '导出PDF',
        en: 'Export PDF'
    },
    'editor.exportCode': {
        zh: '导出代码',
        en: 'Export Code'
    },
    'editor.copied': {
        zh: '已复制到剪贴板',
        en: 'Copied to clipboard'
    },
    'editor.rendered': {
        zh: '图表已渲染',
        en: 'Diagram rendered'
    },
    'editor.exported': {
        zh: '导出成功',
        en: 'Export successful'
    },
    'editor.cheatSheet': {
        zh: '语法速查表',
        en: 'Syntax Cheat Sheet'
    },

    // Cheat Sheet Content
    'cheat.flowchart': { zh: '流程图', en: 'Flowchart' },
    'cheat.rectDesc': { zh: '普通节点', en: 'Rectangle node' },
    'cheat.roundDesc': { zh: '开始/结束', en: 'Start/End' },
    'cheat.diamondDesc': { zh: '判断节点', en: 'Decision' },
    'cheat.arrowDesc': { zh: '箭头连接', en: 'Arrow' },
    'cheat.labelArrowDesc': { zh: '带标签箭头', en: 'Labeled arrow' },

    'cheat.sequence': { zh: '时序图', en: 'Sequence' },
    'cheat.participantDesc': { zh: '定义参与者', en: 'Define participant' },
    'cheat.syncMsgDesc': { zh: '同步消息', en: 'Sync message' },
    'cheat.asyncMsgDesc': { zh: '异步消息', en: 'Async message' },
    'cheat.returnMsgDesc': { zh: '返回消息', en: 'Return message' },
    'cheat.noteDesc': { zh: '注释', en: 'Note' },

    'cheat.class': { zh: '类图', en: 'Class Diagram' },
    'cheat.classDefDesc': { zh: '定义类', en: 'Define class' },
    'cheat.publicDesc': { zh: '公开属性', en: 'Public' },
    'cheat.privateDesc': { zh: '私有属性', en: 'Private' },
    'cheat.inheritDesc': { zh: '继承关系', en: 'Inheritance' },
    'cheat.compositionDesc': { zh: '组合关系', en: 'Composition' },

    'cheat.state': { zh: '状态图', en: 'State Diagram' },
    'cheat.startStateDesc': { zh: '初始状态', en: 'Initial state' },
    'cheat.transDesc': { zh: '状态转换', en: 'Transition' },
    'cheat.eventDesc': { zh: '带事件转换', en: 'With event' },
    'cheat.endStateDesc': { zh: '结束状态', en: 'Final state' },

    'cheat.gantt': { zh: '甘特图', en: 'Gantt Chart' },
    'cheat.ganttTitleDesc': { zh: '图表标题', en: 'Chart title' },
    'cheat.dateFormatDesc': { zh: '日期格式', en: 'Date format' },
    'cheat.sectionDesc': { zh: '分组阶段', en: 'Section' },
    'cheat.taskDesc': { zh: '任务(天数)', en: 'Task (days)' },

    'cheat.mindmap': { zh: '思维导图', en: 'Mind Map' },
    'cheat.rootDesc': { zh: '中心主题', en: 'Central topic' },
    'cheat.branchDesc': { zh: '一级分支', en: 'Level 1 (2 spaces)' },
    'cheat.subBranchDesc': { zh: '二级分支', en: 'Level 2 (4 spaces)' },

    'cheat.er': { zh: 'ER图', en: 'ER Diagram' },
    'cheat.oneManyDesc': { zh: '一对多', en: 'One-to-many' },
    'cheat.oneOneDesc': { zh: '一对一', en: 'One-to-one' },
    'cheat.entityStartDesc': { zh: '实体开始', en: 'Entity start' },
    'cheat.pkDesc': { zh: '主键', en: 'Primary key' },

    'cheat.pie': { zh: '饼图', en: 'Pie Chart' },
    'cheat.pieTitleDesc': { zh: '饼图标题', en: 'Pie title' },
    'cheat.pieDataDesc': { zh: '数据项', en: 'Data item' },
    
    // Footer
    'footer.desc': {
        zh: '免费在线图表工具，让创建图表更简单',
        en: 'Free online diagram tool, making diagram creation easier'
    },
    'footer.links': {
        zh: '链接',
        en: 'Links'
    },
    'footer.privacy': {
        zh: '隐私政策',
        en: 'Privacy Policy'
    },
    'footer.terms': {
        zh: '服务条款',
        en: 'Terms of Service'
    },
    'footer.contact': {
        zh: '联系我们',
        en: 'Contact Us'
    },
    'footer.follow': {
        zh: '关注我们',
        en: 'Follow Us'
    },
    'footer.copyright': {
        zh: '© 2026 ClawDiag. 保留所有权利。',
        en: '© 2026 ClawDiag. All rights reserved.'
    },
    
    // Legal Pages
    'legal.privacy.title': { zh: '隐私政策', en: 'Privacy Policy' },
    'legal.terms.title': { zh: '服务条款', en: 'Terms of Service' },
    'legal.contact.title': { zh: '联系我们', en: 'Contact Us' },
    'legal.back': { zh: '← 返回首页', en: '← Back to Home' },
    'legal.email': { zh: '电子邮件', en: 'Email' },
    'legal.hours': { zh: '工作时间', en: 'Business Hours' },
    'legal.address': { zh: '公司地址', en: 'Company Address' },
    'legal.lastUpdate': { zh: '最后更新日期', en: 'Last updated' },
    
    // SEO Content
    'seo.diagramGuide': {
        zh: '图表类型使用指南',
        en: 'Diagram Types Usage Guide'
    },
    'seo.flowchart.desc': {
        zh: '流程图是展示业务流程和工作流程的最佳工具。通过标准化符号和清晰箭头，帮助您可视化决策路径、业务逻辑和操作步骤。适用于项目管理、流程优化和系统设计。',
        en: 'Flowcharts are the best tool for visualizing business processes and workflows. Through standardized symbols and clear arrows, help you visualize decision paths, business logic, and operational steps.'
    },
    'seo.sequence.desc': {
        zh: '时序图用于展示系统组件之间的交互时序和消息传递。非常适合描述API调用、函数调用链和分布式系统中的请求响应流程。是软件架构设计的重要工具。',
        en: 'Sequence diagrams show the interaction timing and message passing between system components. Perfect for describing API calls, function call chains, and request-response flows in distributed systems.'
    },
    'seo.class.desc': {
        zh: '类图是面向对象编程的核心工具，展示类的属性、方法和类之间的关系。帮助开发团队理解系统结构，实现代码生成和逆向工程。适用于软件设计和架构文档。',
        en: 'Class diagrams are the core tool of object-oriented programming, showing class attributes, methods, and relationships. Help development teams understand system structure.'
    },
    'seo.state.desc': {
        zh: '状态图描述对象在其生命周期内所经历的状态序列以及导致状态转换的事件。适用于游戏开发、工作流引擎和协议设计等领域。',
        en: 'State diagrams describe the sequence of states an object goes through during its lifecycle and the events that cause state transitions. Ideal for game development and workflow engines.'
    },
    'seo.gantt.desc': {
        zh: '甘特图是项目管理的经典工具，通过条形图展示项目进度、任务依赖和时间安排。帮助项目经理追踪进度、协调资源和优化工作流程。',
        en: 'Gantt charts are a classic project management tool that display project progress, task dependencies, and scheduling through bar charts. Help project managers track progress and coordinate resources.'
    },
    'seo.mindmap.desc': {
        zh: '思维导图是一种放射性思维的表达方式，适合头脑风暴、笔记整理和知识管理。通过中心主题向四周发散，帮助您组织想法和激发创意。',
        en: 'Mind maps are a way to express radiating thoughts, suitable for brainstorming, note-taking, and knowledge management. Spread from a central topic to help organize ideas and spark creativity.'
    },
    'seo.er.desc': {
        zh: 'ER图(实体关系图)是数据库设计的标准工具，展示实体、属性和实体之间的关系。帮助设计师规划数据库结构，是系统分析和数据库开发的重要文档。',
        en: 'ER diagrams (Entity-Relationship diagrams) are the standard tool for database design, showing entities, attributes, and relationships between entities. Essential for system analysis and database development.'
    },
    'seo.git.desc': {
        zh: 'Git图可视化展示代码版本历史和分支合并情况。帮助开发团队理解代码演进、追踪bug引入点和管理多人协作开发。是现代软件开发不可或缺的工具。',
        en: 'Git graphs visually display code version history and branch merge situations. Help development teams understand code evolution and manage multi-person collaborative development.'
    },
    'seo.journey.desc': {
        zh: '用户旅程图展示用户在产品或服务中的完整体验过程。通过阶段划分和情感评分，帮助产品团队识别用户痛点和优化机会。是用户体验设计和市场营销的重要工具。',
        en: 'User journey maps display the complete experience process of users with a product or service. Through stage segmentation and sentiment scoring, help product teams identify pain points and optimization opportunities.'
    },
    'seo.pie.desc': {
        zh: '饼图是最直观的数据可视化工具之一，通过圆形切片展示各部分占比情况。适合展示市场份额、预算分配、调查结果等比例数据。一目了然地呈现数据分布。',
        en: 'Pie charts are one of the most intuitive data visualization tools, showing proportions through circular slices. Ideal for displaying market share, budget allocation, survey results and other proportional data.'
    },
    'seo.timeline.desc': {
        zh: '时间线图用于展示事件发展的时间顺序和历史进程。适合公司发展历程、项目里程碑、个人履历等场景。通过时间轴可视化，让复杂的历史信息变得清晰有序。',
        en: 'Timeline charts display the chronological sequence of events and historical progress. Ideal for company development history, project milestones, resumes and other scenarios.'
    },
    'seo.kanban.desc': {
        zh: '看板是一种可视化的工作流程管理工具，通过列式布局展示任务在不同阶段的状态。源自丰田生产系统，现广泛应用于敏捷开发和项目管理，帮助团队实现可视化协作。',
        en: 'Kanban is a visual workflow management tool that displays task stages through columnar layouts. Originating from Toyota production system, now widely used in agile development and project management.'
    },
    'seo.quadrant.desc': {
        zh: '四象限图通过二维矩阵将项目或任务按重要性和紧急性进行分类。帮助用户识别优先级，做出合理的资源分配决策。是时间管理和项目规划的高效工具。',
        en: 'Quadrant charts categorize items by importance and urgency through a 2D matrix. Help users identify priorities and make reasonable resource allocation decisions.'
    },
    'seo.sankey.desc': {
        zh: '桑基图是一种高效的流向可视化图表，宽度代表流量大小。适用于能源分配、资金流动、用户转化等场景。能够直观展示复杂系统中的能量或数据流动方向。',
        en: 'Sankey diagrams are efficient flow visualization charts where width represents flow volume. Ideal for energy allocation, capital flow, user conversion and other scenarios.'
    },
    'seo.xychart.desc': {
        zh: 'XY图表结合柱状图和折线图，展示数据的变化趋势和对比。支持双轴显示，适合展示销售趋势、统计数据对比等。是数据分析报告的常用图表类型。',
        en: 'XY charts combine bar and line charts to show data trends and comparisons. Support dual-axis display, ideal for sales trends and statistical data comparison.'
    },
    'seo.block.desc': {
        zh: '块状图用于展示系统架构和模块之间的关系。通过方块和连线展示系统的组成部分和数据流向。适合技术架构设计、系统概要设计和模块化展示。',
        en: 'Block diagrams show system architecture and module relationships. Display system components and data flow through blocks and connections. Ideal for technical architecture design.'
    },
    'seo.architecture.desc': {
        zh: '架构图是系统设计的核心工具，展示系统的技术栈、组件交互和部署结构。帮助开发团队和利益相关者理解系统全貌，是技术方案评审和文档编写的重要依据。',
        en: 'Architecture diagrams are core tools for system design, showing technical stack, component interactions and deployment structure. Help development teams understand the big picture.'
    },
    'seo.packet.desc': {
        zh: '数据包图用于可视化网络协议和数据结构。展示数据包各字段的含义和层次关系，是网络教学、协议分析和接口设计的有效工具。帮助理解数据在网络中的传输方式。',
        en: 'Packet diagrams visualize network protocols and data structures. Display packet field meanings and hierarchical relationships. Effective for network teaching and protocol analysis.'
    },
    'seo.viewMore': {
        zh: '查看更多',
        en: 'View More'
    },
    'seo.aboutTitle': {
        zh: '关于ClawDiag',
        en: 'About ClawDiag'
    },
    'seo.aboutDesc': {
        zh: 'ClawDiag是一款免费的在线图表制作工具，基于Mermaid技术构建。我们致力于为用户提供简洁、高效的图表创建体验，无需安装任何软件，直接在浏览器中即可创建专业的流程图、时序图、思维导图、甘特图等19种图表类型。',
        en: 'ClawDiag is a free online diagram creation tool built on Mermaid technology. We are committed to providing users with a simple and efficient diagram creation experience. Without installing any software, you can create professional diagrams directly in your browser.'
    },
    'seo.aboutFeature': {
        zh: '我们的工具支持实时预览、代码编辑、PNG导出等功能，同时提供中英文双语界面，满足全球用户的需求。无论您是项目经理、开发者、学生还是教师，ClawDiag都能帮助您快速创建清晰、规范的图表。',
        en: 'Our tool supports real-time preview, code editing, PNG export and other features, while providing bilingual Chinese-English interface to meet the needs of global users.'
    },
    'seo.useCasesTitle': {
        zh: '图表适用场景',
        en: 'Diagram Use Cases'
    },
    'seo.useCase1Title': {
        zh: '软件开发',
        en: 'Software Development'
    },
    'seo.useCase1Desc': {
        zh: '时序图 - 描述API接口调用和数据流转|类图 - 展示面向对象设计和系统架构|状态图 - 建模业务状态和流程控制|流程图 - 梳理业务流程和算法逻辑',
        en: 'Sequence Diagram - Describe API calls and data flow|Class Diagram - Show OOP design and system architecture|State Diagram - Model business states and flow control|Flowchart - Sort out business processes and algorithm logic'
    },
    'seo.useCase2Title': {
        zh: '项目管理',
        en: 'Project Management'
    },
    'seo.useCase2Desc': {
        zh: '甘特图 - 规划项目进度和任务排期|看板 - 可视化任务状态和团队协作|思维导图 - 分解项目目标和工作范围|流程图 - 规划项目流程和审批节点',
        en: 'Gantt Chart - Plan project progress and task scheduling|Kanban - Visualize task status and team collaboration|Mind Map - Decompose project goals and scope|Flowchart - Plan project process and approval nodes'
    },
    'seo.useCase3Title': {
        zh: '数据分析',
        en: 'Data Analysis'
    },
    'seo.useCase3Desc': {
        zh: '饼图 - 展示数据占比和分布情况|桑基图 - 分析数据流向和转化率|XY图表 - 可视化数据趋势和相关性|四象限 - 优先级排序和分类分析',
        en: 'Pie Chart - Show data proportion and distribution|Sankey Diagram - Analyze data flow and conversion rate|XY Chart - Visualize data trends and correlations|Quadrant - Priority ranking and classification analysis'
    },
    'seo.useCase4Title': {
        zh: '系统设计',
        en: 'System Design'
    },
    'seo.useCase4Desc': {
        zh: '架构图 - 描述系统整体架构和技术栈|ER图 - 设计数据库结构和表关系|块状图 - 展示模块划分和组件关系|数据包 - 描述网络协议和数据结构',
        en: 'Architecture Diagram - Describe overall system architecture and tech stack|ER Diagram - Design database structure and table relationships|Block Diagram - Show module division and component relationships|Packet Diagram - Describe network protocols and data structures'
    },
    
    // FAQ
    'seo.faqTitle': {
        zh: '常见问题',
        en: 'FAQ'
    },
    'seo.faq1q': {
        zh: 'ClawDiag是免费的吗？',
        en: 'Is ClawDiag free to use?'
    },
    'seo.faq1a': {
        zh: '是的，ClawDiag完全免费使用。无需注册、无需付费，所有功能都可以免费使用。',
        en: 'Yes, ClawDiag is completely free to use. No registration required, no payment needed, all features are available for free.'
    },
    'seo.faq2q': {
        zh: '我创建的图表会保存在哪里？',
        en: 'Where are my diagrams saved?'
    },
    'seo.faq2a': {
        zh: '您的图表代码保存在浏览器的本地存储中。如果需要保存或分享图表，可以导出为PNG、SVG或PDF文件。',
        en: 'Your diagram code is stored in your browser\'s local storage. If you need to save or share diagrams, you can export them as PNG, SVG or PDF files.'
    },
    'seo.faq3q': {
        zh: '支持哪些图表类型？',
        en: 'What diagram types are supported?'
    },
    'seo.faq3a': {
        zh: 'ClawDiag支持19种图表类型，包括流程图、时序图、类图、状态图、甘特图、思维导图、ER图、Git图、饼图、时间线、看板、四象限、桑基图、XY图表、块状图、架构图、数据包图等。',
        en: 'ClawDiag supports 19 diagram types, including flowchart, sequence diagram, class diagram, state diagram, gantt chart, mind map, ER diagram, git graph, pie chart, timeline, kanban, quadrant chart, sankey diagram, xy chart, block diagram, architecture diagram, packet diagram and more.'
    },
    'seo.faq4q': {
        zh: '导出的图片可以商用吗？',
        en: 'Can I use exported images for commercial purposes?'
    },
    'seo.faq4a': {
        zh: '可以。您导出的图表图片没有任何使用限制，可以用于商业用途、教学文档、网站展示等。',
        en: 'Yes. There are no usage restrictions on exported diagram images. You can use them for commercial purposes, educational materials, website display, etc.'
    },
    'seo.faq5q': {
        zh: '如何学习Mermaid语法？',
        en: 'How can I learn Mermaid syntax?'
    },
    'seo.faq5a': {
        zh: '点击编辑器上方的"?"按钮可以查看语法速查表。我们也提供了每种图表类型的示例代码，您可以参考修改。',
        en: 'Click the "?" button above the editor to view the syntax cheat sheet. We also provide sample code for each diagram type that you can reference and modify.'
    },
    'seo.faq6q': {
        zh: '什么是思维导图？',
        en: 'What is a mind map?'
    },
    'seo.faq6a': {
        zh: '思维导图是一种以中心主题为核心，向四周发散的放射性思维可视化工具。它通过层级结构和颜色帮助您组织想法、激发创意，适用于头脑风暴、笔记整理、项目规划和知识管理等多种场景。',
        en: 'A mind map is a visual tool for radiating thinking with a central topic as the core, spreading outward. It uses hierarchical structure and colors to help you organize ideas and spark creativity, suitable for brainstorming, note-taking, project planning and knowledge management.'
    }
};

// Current language
let currentLang = 'zh';

// Get translation
function t(key) {
    const trans = translations[key];
    if (!trans) return key;
    return trans[currentLang] || trans.zh || key;
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('clawdiag-lang', lang);
    updatePage();
    updateLangButton();
}

// Update all translation elements
function updatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const trans = translations[key];
        if (trans) {
            el.textContent = trans[currentLang] || trans.zh || key;
        }
    });
    
    // Update document lang
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // Update title based on language
    if (currentLang === 'zh') {
        document.title = 'ClawDiag - 在线图表工具 | Free Online Diagram Maker';
    } else {
        document.title = 'ClawDiag - Free Online Diagram Tool | Create Diagrams Online';
    }
    
    // Update meta description
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
        if (currentLang === 'zh') {
            descEl.setAttribute('content', 'ClawDiag提供免费的在线图表制作工具，支持流程图、时序图、思维导图等19种图表类型。无需安装，直接在浏览器中创建专业图表。');
        } else {
            descEl.setAttribute('content', 'ClawDiag provides free online diagram tools, supporting flowcharts, sequence diagrams, mind maps and 18+ diagram types. Create professional diagrams directly in your browser.');
        }
    }
}

// Update language switch button
function updateLangButton() {
    const btn = document.querySelector('.lang-text');
    if (btn) {
        btn.textContent = currentLang === 'zh' ? 'EN' : '中';
    }
}

// Initialize language
function initLanguage() {
    const saved = localStorage.getItem('clawdiag-lang');
    if (saved) {
        currentLang = saved;
    } else {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    updatePage();
    updateLangButton();
}

// Export for use in app.js
window.i18n = {
    t,
    setLanguage,
    getLang: () => currentLang,
    initLanguage
};
