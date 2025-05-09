// src/utils/helpers.js

// 复制文本到剪贴板（增加成功/失败回调）
export const copyToClipboard = async (text, successCallback, errorCallback) => {
    try {
        await navigator.clipboard.writeText(text);
        if (successCallback) successCallback();
    } catch (err) {
        console.error('复制失败:', err);
        if (errorCallback) errorCallback(err);
    }
};

// 带确认的重置页面
export const resetAll = (confirmationMessage = '确定要刷新网页吗？') => {
    if (confirm(confirmationMessage)) {
        location.reload();
    }
};

// 通用文件下载（支持自定义MIME类型）
export const downloadFile = (
    filename,
    content,
    mimeType = 'text/plain'
) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return true; // 返回下载状态
};