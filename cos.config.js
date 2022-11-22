const env = process.env.npm_lifecycle_event;//运行命令

const cosBuketMap=new Map([
    ['build-sit',{
        bucket: 'sit-fe-static-1308250937',
        region: 'ap-shanghai',
    }],
    ['build-gz',{
        bucket: 'fe-nj-static-1308250937',
        region: 'ap-nanjing',
    }],
    ['build-hk',{
        bucket: 'fe-static-1308250937',
        region: 'ap-hongkong',
    }],
])

module.exports = {
    client: {
        enable: true, // 是否启用
        Bucket: cosBuketMap.get(env).bucket, // COS 存储桶的名称
        Region: cosBuketMap.get(env).region, // COS 存储桶所在地域
        SecretId: "AKIDkJdgSxCBsISL0PWO0MRGo43mEPJwKSJu", // 腾讯云 SecretId
        SecretKey: "MSJvHM9futa1C7l9G7hz0tWrwjGWVDep", // 腾讯云 SecretKey
    },
    upload: {
        source: ".next/static", // 本地资源，支持单文件、文件夹、glob 表达式
        //ignore: ["dist/**/*.map"], // 要忽略文件的 glob 表达式
        cwd: process.cwd(), // 查找 source 时的工作目录，默认是 process.cwd()
        target: "_next/static", // 保存到 COS 的路径，默认是根路径
        rename: false, // 是否对文件进行重命名，如何设置为 true 默认重命名为 16 个小写字母和数字的随机组合，设置为数字可以自定义长度
        flat: false, // 是否铺平文件夹层级
        showProgress: true, // 是否以进度条的形式展示上传过程
        cdnPurgeCache: true, // 是否刷新 CDN 缓存
        cdnPushCache: true, // 是否预热 CDN 缓存
        dryRun: false, // 只模拟上传过程，不实际上传
    },
};