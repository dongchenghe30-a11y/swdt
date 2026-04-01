// ===================================
// ClawDiag - 主应用逻辑
// 19种图表功能
// ===================================

// 图表示例代码
const diagramExamples = {
    flowchart: {
        title: { zh: '流程图', en: 'Flowchart' },
        code: `flowchart TD
    A[开始] --> B{判断?}
    B -->|是| C[处理1]
    B -->|否| D[处理2]
    C --> E[输出结果]
    D --> E
    E --> F[结束]`
    },
    sequence: {
        title: { zh: '时序图', en: 'Sequence Diagram' },
        code: `sequenceDiagram
    participant User
    participant System
    participant Database
    
    User->>System: 提交请求
    System->>Database: 验证数据
    Database-->>System: 返回结果
    System-->>User: 响应成功`
    },
    class: {
        title: { zh: '类图', en: 'Class Diagram' },
        code: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +String breed
        +bark()
    }
    class Cat {
        +String color
        +meow()
    }
    Animal <|-- Dog
    Animal <|-- Cat`
    },
    state: {
        title: { zh: '状态图', en: 'State Diagram' },
        code: `stateDiagram-v2
    [*] --> 初始状态
    初始状态 --> 处理中: 提交
    处理中 --> 完成: 成功
    处理中 --> 失败: 错误
    完成 --> [*]
    失败 --> 初始状态: 重试`
    },
    gantt: {
        title: { zh: '甘特图', en: 'Gantt Chart' },
        code: `gantt
    title 项目进度计划
    dateFormat YYYY-MM-DD
    section 阶段一
    需求分析: 2026-04-01, 7d
    设计: 2026-04-08, 5d
    section 阶段二
    开发: 2026-04-13, 14d
    测试: 2026-04-27, 7d
    section 阶段三
    部署: 2026-05-04, 3d
    验收: 2026-05-07, 3d`
    },
    er: {
        title: { zh: 'ER图', en: 'ER Diagram' },
        code: `erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : included
    USER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        date created
        string status
    }
    PRODUCT {
        int id PK
        string name
        float price
    }`
    },
    journey: {
        title: { zh: '用户旅程图', en: 'User Journey' },
        code: `journey
    title 用户购买流程
    section 搜索
      打开App: 5: 用户
      搜索商品: 4: 用户
      浏览结果: 3: 用户
    section 决策
      查看详情: 5: 用户
      比较价格: 4: 用户
      加入购物车: 5: 用户
    section 购买
      确认订单: 5: 用户
      支付: 5: 用户
      完成: 5: 用户`
    },
    git: {
        title: { zh: 'Git图', en: 'Git Graph' },
        code: `gitGraph
    commit id: "初始提交"
    branch feature-1
    checkout feature-1
    commit id: "功能开发"
    commit id: "完成开发"
    checkout main
    merge feature-1
    branch feature-2
    checkout feature-2
    commit id: "功能2开发"
    commit id: "功能2完成"
    checkout main
    merge feature-2
    commit id: "发布版本"`
    },
    mindmap: {
        title: { zh: '思维导图', en: 'Mind Map' },
        code: `mindmap
  root((项目规划))
    需求分析
      用户调研
      需求文档
      优先级
    设计
      UI设计
      架构设计
      数据库
    开发
      前端
      后端
      测试
    部署
      服务器
      监控
      维护`
    },
    pie: {
        title: { zh: '饼图', en: 'Pie Chart' },
        code: `pie
    title 项目资源分配
    "前端开发" : 35
    "后端开发" : 30
    "测试" : 20
    "运维" : 10
    "文档" : 5`
    },
    timeline: {
        title: { zh: '时间线', en: 'Timeline' },
        code: `timeline
    title 公司发展历程
    2018年 : 成立公司
          : 获得天使轮融资
    2019年 : 发布1.0版本
          : 用户突破10万
    2020年 : 获得A轮融资
          : 团队扩展至50人
    2021年 : 2.0版本发布
          : 国际化市场拓展
    2022年 : 用户突破100万
          : B轮融资成功
    2023年 : 3.0版本发布
          : 行业领先`
    },
    kanban: {
        title: { zh: '看板', en: 'Kanban' },
        code: `kanban
    title 任务看板
    section 待处理
      任务1: 4
      任务2: 3
      任务3: 2
    section 进行中
      任务4: 5
      任务5: 3
    section 已完成
      任务6: 5
      任务7: 4
      任务8: 5`
    },
    quadrant: {
        title: { zh: '四象限图', en: 'Quadrant Chart' },
        code: `quadrantChart
    title 产品功能优先级
    x-axis 低优先级 --> 高优先级
    y-axis 低价值 --> 高价值
    quadrant-1 高价值高优先级
    quadrant-2 低价值高优先级
    quadrant-3 低价值低优先级
    quadrant-4 高价值低优先级
    "核心功能A": [0.9, 0.9]
    "核心功能B": [0.85, 0.85]
    "优化功能C": [0.7, 0.6]
    "新功能D": [0.5, 0.8]
    "实验功能E": [0.3, 0.4]
    "维护功能F": [0.6, 0.3]`
    },
    sankey: {
        title: { zh: '桑基图', en: 'Sankey Diagram' },
        code: `sankey
    %% 能源流向图
    source,target,value
    煤炭,发电厂,100
    天然气,发电厂,50
    核能,发电厂,30
    发电厂,工业,120
    发电厂,居民,40
    发电厂,商业,20`
    },
    xychart: {
        title: { zh: 'XY图表', en: 'XY Chart' },
        code: `xychart-beta
    title "月度销售额趋势"
    x-axis [1月, 2月, 3月, 4月, 5月, 6月]
    y-axis "销售额(万)" 0 --> 100
    bar [45, 52, 68, 72, 85, 92]
    line [45, 52, 68, 72, 85, 92]`
    },
    block: {
        title: { zh: '块状图', en: 'Block Diagram' },
        code: `block-beta
    blocks
        front: ["前端"]
        backend: ["后端"]
        database: ["数据库"]
        cache: ["缓存"]
        storage: ["存储"]
    connections
        front --> backend
        backend --> database
        backend --> cache
        backend --> storage`
    },
    architecture: {
        title: { zh: '架构图', en: 'Architecture' },
        code: `architecture-beta
    runner [负载均衡] at 20% 10%
    serverA [应用服务1] at 30% 40%
    serverB [应用服务2] at 50% 40%
    db [数据库] at 70% 40%
    cache [缓存] at 70% 60%
    storage [对象存储] at 70% 80%
    
    runner -> serverA
    runner -> serverB
    serverA <-> db
    serverB <-> db
    serverA -> cache
    serverB -> cache
    serverA -> storage
    serverB -> storage`
    },
    packet: {
        title: { zh: '数据包图', en: 'Packet Diagram' },
        code: `flowchart TD
    subgraph IP包结构
    A[版本 4位] --> B[首部 20-60字节]
    B --> C[源地址 32位]
    C --> D[目的地址 32位]
    E[数据] --> D
    end
    A --> F[IPv4数据包]
    B --> F
    F --> G[传输层]
    G --> H[应用层]`
    },
    packet: {
        title: { zh: '数据包图', en: 'Packet Diagram' },
        code: `flowchart TD
    subgraph IP包结构
    A[版本 4位] --> B[首部 20-60字节]
    B --> C[源地址 32位]
    C --> D[目的地址 32位]
    E[数据] --> D
    end
    A --> F[IPv4数据包]
    B --> F
    F --> G[传输层]
    G --> H[应用层]`
    }
};
let currentDiagramType = null;
let currentZoom = 1;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initMermaid();
    initLanguage();
    initEventListeners();
    // Initialize with flowchart
    switchDiagramType('flowchart');
});

// Initialize Mermaid
function initMermaid() {
    mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    });
}

// Initialize event listeners
function initEventListeners() {
    // Language switch
    document.getElementById('langSwitch').addEventListener('click', function() {
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        setLanguage(newLang);
    });
    
    // Type bar buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            switchDiagramType(type);
        });
    });
    
    // Copy code
    document.getElementById('copyCode').addEventListener('click', copyCode);
    
    // Render button
    document.getElementById('renderBtn').addEventListener('click', renderDiagram);
    
    // Zoom controls
    document.getElementById('zoomIn').addEventListener('click', () => adjustZoom(0.1));
    document.getElementById('zoomOut').addEventListener('click', () => adjustZoom(-0.1));
    document.getElementById('resetZoom').addEventListener('click', resetZoom);
    
    // Wheel zoom on preview container
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        adjustZoom(delta);
    }, { passive: false });
    
    // Drag to pan
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    
    const diagramOutput = document.getElementById('diagramOutput');
    
    previewContainer.addEventListener('mousedown', function(e) {
        if (e.target.closest('#diagramOutput')) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            previewContainer.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        diagramOutput.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            previewContainer.style.cursor = 'move';
        }
    });
    
    // Export dropdown menu
    const exportBtn = document.getElementById('exportBtn');
    const exportMenu = document.getElementById('exportMenu');
    const exportDropdown = document.querySelector('.export-dropdown');
    
    exportBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        exportMenu.classList.toggle('show');
    });
    
    exportDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    document.addEventListener('click', function(e) {
        if (!exportDropdown.contains(e.target)) {
            exportMenu.classList.remove('show');
        }
    });
    
    exportMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        const format = e.target.getAttribute('data-format');
        if (format) {
            exportMenu.classList.remove('show');
            switch(format) {
                case 'svg': exportSvg(); break;
                case 'png': exportPng(); break;
                case 'jpg': exportJpg(); break;
                case 'webp': exportWebp(); break;
                case 'pdf': exportPdf(); break;
                case 'code': exportCode(); break;
            }
        }
    });
    
    // Code editor input event
    document.getElementById('codeEditor').addEventListener('input', debounce(renderDiagram, 500));
    
    // Cheat sheet modal
    const helpBtn = document.getElementById('helpBtn');
    const cheatSheetModal = document.getElementById('cheatSheetModal');
    const closeCheatSheet = document.getElementById('closeCheatSheet');
    
    if (helpBtn && cheatSheetModal && closeCheatSheet) {
        helpBtn.addEventListener('click', () => {
            cheatSheetModal.classList.add('show');
        });
        
        closeCheatSheet.addEventListener('click', () => {
            cheatSheetModal.classList.remove('show');
        });
        
        cheatSheetModal.addEventListener('click', (e) => {
            if (e.target === cheatSheetModal) {
                cheatSheetModal.classList.remove('show');
            }
        });
    }
    
    // View more button for SEO cards
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            const hiddenCards = document.querySelectorAll('.hidden-card');
            hiddenCards.forEach(card => {
                card.style.display = 'block';
            });
            viewMoreBtn.style.display = 'none';
        });
    }
    
    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Switch diagram type
function switchDiagramType(type) {
    currentDiagramType = type;
    
    // Update active button
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-type') === type) {
            btn.classList.add('active');
        }
    });
    
    // Set code
    document.getElementById('codeEditor').value = diagramExamples[type].code;
    
    // Reset zoom
    currentZoom = 1;
    updateZoom();
    
    // Render diagram
    setTimeout(renderDiagram, 100);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Render diagram
async function renderDiagram() {
    const code = document.getElementById('codeEditor').value;
    const container = document.getElementById('diagramOutput');
    
    if (!code.trim()) {
        container.innerHTML = '<p style="color: #6B7280;">' + (currentLang === 'zh' ? '请输入Mermaid代码' : 'Please enter Mermaid code') + '</p>';
        return;
    }
    
    try {
        // For some diagrams, we need to use special syntax
        let processedCode = code;
        
        // Handle different diagram types
        if (currentDiagramType === 'pie' && !code.includes('pie')) {
            processedCode = 'pie\n' + code;
        } else if (currentDiagramType === 'mindmap' && !code.includes('mindmap')) {
            processedCode = 'mindmap\n' + code;
        } else if (currentDiagramType === 'gantt' && !code.includes('gantt')) {
            processedCode = 'gantt\n' + code;
        } else if (currentDiagramType === 'quadrant' && !code.includes('quadrant')) {
            processedCode = 'quadrantChart\n' + code;
        } else if (currentDiagramType === 'timeline' && !code.includes('timeline')) {
            processedCode = 'timeline\n' + code;
        } else if (currentDiagramType === 'kanban' && !code.includes('kanban')) {
            processedCode = 'kanban\n' + code;
        } else if (currentDiagramType === 'sankey' && !code.includes('sankey')) {
            processedCode = 'sankey\n' + code;
        } else if (currentDiagramType === 'xychart' && !code.includes('xychart')) {
            processedCode = 'xychart-beta\n' + code;
        } else if (currentDiagramType === 'block' && !code.includes('block')) {
            processedCode = 'block-beta\n' + code;
        } else if (currentDiagramType === 'architecture' && !code.includes('architecture')) {
            processedCode = 'architecture-beta\n' + code;
        } else if (currentDiagramType === 'packet' && !code.includes('flowchart')) {
            processedCode = 'flowchart TD\n' + code;
        }
        
        const { svg } = await mermaid.render('diagram-' + Date.now(), processedCode);
        container.innerHTML = svg;
        
        // Apply zoom
        applyZoom();
        
        showToast(t('editor.rendered'));
    } catch (error) {
        container.innerHTML = '<p style="color: #EF4444;">' + (currentLang === 'zh' ? '渲染错误: ' : 'Render error: ') + error.message + '</p>';
        console.error('Mermaid render error:', error);
    }
}

// Copy code
function copyCode() {
    const code = document.getElementById('codeEditor').value;
    navigator.clipboard.writeText(code).then(() => {
        showToast(t('editor.copied'));
    });
}

// Zoom functions
let translateX = 0, translateY = 0;

function adjustZoom(delta) {
    currentZoom = Math.max(0.25, Math.min(3, currentZoom + delta));
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    applyZoom();
}

function updateZoom() {
    const container = document.getElementById('diagramOutput');
    container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
    container.style.transformOrigin = 'center top';
}

function applyZoom() {
    const container = document.getElementById('diagramOutput');
    container.style.transition = 'transform 0.2s ease';
    container.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
}

// Export to PNG
async function exportPng() {
    const svgElement = document.querySelector('#diagramOutput svg');
    if (!svgElement) {
        showToast(currentLang === 'zh' ? '请先渲染图表' : 'Please render the diagram first');
        return;
    }
    
    try {
        // Clone SVG with all content
        const clonedSvg = svgElement.cloneNode(true);
        
        // Get proper dimensions - check multiple sources
        let width, height;
        
        // Try getBoundingClientRect first (most reliable for rendered size)
        const rect = svgElement.getBoundingClientRect();
        
        // Try SVG attributes
        const svgWidth = clonedSvg.getAttribute('width');
        const svgHeight = clonedSvg.getAttribute('height');
        const viewBox = clonedSvg.getAttribute('viewBox');
        
        if (svgWidth && svgHeight) {
            width = parseFloat(svgWidth);
            height = parseFloat(svgHeight);
        } else if (viewBox) {
            const parts = viewBox.split(/\s+|,/).filter(p => p);
            if (parts.length >= 4) {
                width = parseFloat(parts[2]);
                height = parseFloat(parts[3]);
            }
        }
        
        // Fallback to rendered size
        if (!width || !height || isNaN(width) || isNaN(height)) {
            width = rect.width || 800;
            height = rect.height || 600;
        }
        
        // Ensure numeric values
        width = Math.max(1, width);
        height = Math.max(1, height);
        
        // Add required namespaces
        clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        
        // Set explicit dimensions
        clonedSvg.setAttribute('width', width);
        clonedSvg.setAttribute('height', height);
        
        // Do NOT remove style elements - they contain critical color info
        // Just ensure they work in standalone SVG
        
        // Serialize SVG
        const serializer = new XMLSerializer();
        let svgData = serializer.serializeToString(clonedSvg);
        
        // Add XML declaration and DOCTYPE
        svgData = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgData;
        
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Use higher scale for better quality
        const scale = 2;
        canvas.width = Math.ceil(width * scale);
        canvas.height = Math.ceil(height * scale);
        
        // Load SVG into image
        const img = new Image();
        
        // Use base64 encoding for better compatibility
        const svgBase64 = btoa(unescape(encodeURIComponent(svgData)));
        const dataUrl = 'data:image/svg+xml;base64,' + svgBase64;
        
        await new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = (e) => {
                console.error('Image load error:', e);
                reject(new Error('Failed to load SVG image'));
            };
            img.src = dataUrl;
        });
        
        // Draw white background first
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw SVG
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Download
        const link = document.createElement('a');
        link.download = `diagram-${currentDiagramType}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        showToast(t('editor.exported'));
    } catch (error) {
        console.error('Export error:', error);
        showToast(currentLang === 'zh' ? '导出失败: ' + error.message : 'Export failed: ' + error.message);
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Debounce helper
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get current language (for i18n.js access)
function getCurrentLang() {
    return currentLang;
}

// Export to SVG
function exportSvg() {
    const svgElement = document.querySelector('#diagramOutput svg');
    if (!svgElement) {
        showToast(currentLang === 'zh' ? '请先渲染图表' : 'Please render the diagram first');
        return;
    }
    
    try {
        const clonedSvg = svgElement.cloneNode(true);
        clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        
        const serializer = new XMLSerializer();
        let svgData = serializer.serializeToString(clonedSvg);
        svgData = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgData;
        
        const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.download = `diagram-${currentDiagramType}-${Date.now()}.svg`;
        link.href = url;
        link.click();
        
        URL.revokeObjectURL(url);
        showToast(t('editor.exported'));
    } catch (error) {
        console.error('Export SVG error:', error);
        showToast(currentLang === 'zh' ? '导出SVG失败: ' + error.message : 'Export SVG failed: ' + error.message);
    }
}

// Export to JPG
async function exportJpg() {
    const svgElement = document.querySelector('#diagramOutput svg');
    if (!svgElement) {
        showToast(currentLang === 'zh' ? '请先渲染图表' : 'Please render the diagram first');
        return;
    }
    
    try {
        const clonedSvg = svgElement.cloneNode(true);
        let width, height;
        
        const rect = svgElement.getBoundingClientRect();
        const svgWidth = clonedSvg.getAttribute('width');
        const svgHeight = clonedSvg.getAttribute('height');
        const viewBox = clonedSvg.getAttribute('viewBox');
        
        if (svgWidth && svgHeight) {
            width = parseFloat(svgWidth);
            height = parseFloat(svgHeight);
        } else if (viewBox) {
            const parts = viewBox.split(/\s+|,/).filter(p => p);
            if (parts.length >= 4) {
                width = parseFloat(parts[2]);
                height = parseFloat(parts[3]);
            }
        }
        
        if (!width || !height || isNaN(width) || isNaN(height)) {
            width = rect.width || 800;
            height = rect.height || 600;
        }
        
        width = Math.max(1, width);
        height = Math.max(1, height);
        
        clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        clonedSvg.setAttribute('width', width);
        clonedSvg.setAttribute('height', height);
        
        const serializer = new XMLSerializer();
        let svgData = serializer.serializeToString(clonedSvg);
        svgData = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgData;
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const scale = 2;
        canvas.width = Math.ceil(width * scale);
        canvas.height = Math.ceil(height * scale);
        
        const img = new Image();
        const svgBase64 = btoa(unescape(encodeURIComponent(svgData)));
        const dataUrl = 'data:image/svg+xml;base64,' + svgBase64;
        
        await new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = (e) => reject(new Error('Failed to load SVG image'));
            img.src = dataUrl;
        });
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const link = document.createElement('a');
        link.download = `diagram-${currentDiagramType}-${Date.now()}.jpg`;
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.click();
        
        showToast(t('editor.exported'));
    } catch (error) {
        console.error('Export JPG error:', error);
        showToast(currentLang === 'zh' ? '导出JPG失败: ' + error.message : 'Export JPG failed: ' + error.message);
    }
}

// Export to WEBP
async function exportWebp() {
    const svgElement = document.querySelector('#diagramOutput svg');
    if (!svgElement) {
        showToast(currentLang === 'zh' ? '请先渲染图表' : 'Please render the diagram first');
        return;
    }
    
    try {
        const clonedSvg = svgElement.cloneNode(true);
        let width, height;
        
        const rect = svgElement.getBoundingClientRect();
        const svgWidth = clonedSvg.getAttribute('width');
        const svgHeight = clonedSvg.getAttribute('height');
        const viewBox = clonedSvg.getAttribute('viewBox');
        
        if (svgWidth && svgHeight) {
            width = parseFloat(svgWidth);
            height = parseFloat(svgHeight);
        } else if (viewBox) {
            const parts = viewBox.split(/\s+|,/).filter(p => p);
            if (parts.length >= 4) {
                width = parseFloat(parts[2]);
                height = parseFloat(parts[3]);
            }
        }
        
        if (!width || !height || isNaN(width) || isNaN(height)) {
            width = rect.width || 800;
            height = rect.height || 600;
        }
        
        width = Math.max(1, width);
        height = Math.max(1, height);
        
        clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        clonedSvg.setAttribute('width', width);
        clonedSvg.setAttribute('height', height);
        
        const serializer = new XMLSerializer();
        let svgData = serializer.serializeToString(clonedSvg);
        svgData = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgData;
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const scale = 2;
        canvas.width = Math.ceil(width * scale);
        canvas.height = Math.ceil(height * scale);
        
        const img = new Image();
        const svgBase64 = btoa(unescape(encodeURIComponent(svgData)));
        const dataUrl = 'data:image/svg+xml;base64,' + svgBase64;
        
        await new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = (e) => reject(new Error('Failed to load SVG image'));
            img.src = dataUrl;
        });
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const link = document.createElement('a');
        link.download = `diagram-${currentDiagramType}-${Date.now()}.webp`;
        link.href = canvas.toDataURL('image/webp', 0.95);
        link.click();
        
        showToast(t('editor.exported'));
    } catch (error) {
        console.error('Export WEBP error:', error);
        showToast(currentLang === 'zh' ? '导出WEBP失败: ' + error.message : 'Export WEBP failed: ' + error.message);
    }
}

// Export to PDF
async function exportPdf() {
    const svgElement = document.querySelector('#diagramOutput svg');
    if (!svgElement) {
        showToast(currentLang === 'zh' ? '请先渲染图表' : 'Please render the diagram first');
        return;
    }
    
    try {
        const clonedSvg = svgElement.cloneNode(true);
        let width, height;
        
        const rect = svgElement.getBoundingClientRect();
        const svgWidth = clonedSvg.getAttribute('width');
        const svgHeight = clonedSvg.getAttribute('height');
        const viewBox = clonedSvg.getAttribute('viewBox');
        
        if (svgWidth && svgHeight) {
            width = parseFloat(svgWidth);
            height = parseFloat(svgHeight);
        } else if (viewBox) {
            const parts = viewBox.split(/\s+|,/).filter(p => p);
            if (parts.length >= 4) {
                width = parseFloat(parts[2]);
                height = parseFloat(parts[3]);
            }
        }
        
        if (!width || !height || isNaN(width) || isNaN(height)) {
            width = rect.width || 800;
            height = rect.height || 600;
        }
        
        width = Math.max(1, width);
        height = Math.max(1, height);
        
        clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        clonedSvg.setAttribute('width', width);
        clonedSvg.setAttribute('height', height);
        
        const serializer = new XMLSerializer();
        let svgData = serializer.serializeToString(clonedSvg);
        svgData = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgData;
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const scale = 2;
        canvas.width = Math.ceil(width * scale);
        canvas.height = Math.ceil(height * scale);
        
        const img = new Image();
        const svgBase64 = btoa(unescape(encodeURIComponent(svgData)));
        const dataUrl = 'data:image/svg+xml;base64,' + svgBase64;
        
        await new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = (e) => reject(new Error('Failed to load SVG image'));
            img.src = dataUrl;
        });
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Convert to PNG for PDF embedding
        const pngDataUrl = canvas.toDataURL('image/png');
        
        // Use jsPDF for PDF export
        if (typeof jspdf === 'undefined') {
            // Dynamically load jsPDF
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js';
            script.onload = () => createPdf(pngDataUrl, width, height);
            script.onerror = () => {
                showToast(currentLang === 'zh' ? 'PDF库加载失败' : 'PDF library failed to load');
            };
            document.head.appendChild(script);
        } else {
            createPdf(pngDataUrl, width, height);
        }
    } catch (error) {
        console.error('Export PDF error:', error);
        showToast(currentLang === 'zh' ? '导出PDF失败: ' + error.message : 'Export PDF failed: ' + error.message);
    }
}

function createPdf(pngDataUrl, width, height) {
    const { jsPDF } = window.jspdf;
    
    // Calculate PDF dimensions (convert px to mm, assuming 96 DPI)
    const pxToMm = 25.4 / 96;
    const pdfWidth = width * pxToMm;
    const pdfHeight = height * pxToMm;
    
    // Create PDF with appropriate orientation
    const orientation = pdfWidth > pdfHeight ? 'landscape' : 'portrait';
    const pdf = new jsPDF(orientation, 'mm', [pdfWidth, pdfHeight]);
    
    pdf.addImage(pngDataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`diagram-${currentDiagramType}-${Date.now()}.pdf`);
    
    showToast(t('editor.exported'));
}

// Export code
function exportCode() {
    const code = document.getElementById('codeEditor').value;
    if (!code.trim()) {
        showToast(currentLang === 'zh' ? '没有代码可导出' : 'No code to export');
        return;
    }
    
    try {
        const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.download = `diagram-${currentDiagramType}-${Date.now()}.txt`;
        link.href = url;
        link.click();
        
        URL.revokeObjectURL(url);
        showToast(t('editor.exported'));
    } catch (error) {
        console.error('Export code error:', error);
        showToast(currentLang === 'zh' ? '导出代码失败: ' + error.message : 'Export code failed: ' + error.message);
    }
}